import { useState } from 'react';
import { addTeamLeague } from '../../../redux/leagues/action';
import { getLeagueSelected } from '../../../redux/leagues/action';
import { useDispatch } from 'react-redux';
import { ButtonContainer } from './styles';
import { Form, Modal, ModalBody } from 'react-bootstrap';
import { Button } from '../../atoms/button';

export const ModalLisTeams = ({ show, onHide, teams, idLeague }: any) => {
  const dispatch = useDispatch();

  const [teamSelected, setTeam] = useState('NA');
  const handleRequest = (isAdmin: boolean) => {
    dispatch(addTeamLeague(idLeague, { teamId: teams[teamSelected]._id }));
    dispatch(getLeagueSelected(idLeague));
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton>EQUIPOS</Modal.Header>
      <ModalBody>
        <Form.Control
          as="select"
          onChange={(e) => {
            setTeam(e.target.value);
          }}>
          <option value="NA">seleccionar...</option>
          {teams.map((team: any, index: number) => (
            <option value={index} key={index}>
              {team.name}
            </option>
          ))}
        </Form.Control>
        {teamSelected !== 'NA' && (
          <ButtonContainer>
            <Button
              radius={5}
              onClick={() => handleRequest(teams[teamSelected].isAdmin)}
              className="mx-auto my-4">
              {teams[teamSelected].isAdmin
                ? 'Inscribir equipo'
                : 'Solicitar al administrador la inscripcion'}
            </Button>
          </ButtonContainer>
        )}
      </ModalBody>
    </Modal>
  );
};
