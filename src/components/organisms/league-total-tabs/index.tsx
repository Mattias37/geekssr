import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {
  MainDiv,
  SubContainerDiv,
} from './style';
import { Button2 } from '../../atoms/button2';
import { LeaguesTransmitions } from '../leagues-transmitions';
import { LeagueInformation } from '../league-information';
//import { LeaguesSponsors } from '../leagues-sponsors';
import { LeagueParticipantsScreen } from '../participant-leagues-page';
import { LeaguePositions } from '../league-positions';
import { LeagueCalendar } from '../league-calendar';
import { LeagueBrackets } from '../league-brackets';

interface Props {
  buttonText: string;
  onclick(): any;
}
export const LeagueTotalScreen = (props: Props) => {

  return (
      <MainDiv>
        <SubContainerDiv>
          <Tabs defaultActiveKey="informacion" id="uncontrolled-tab-example">
            <Tab eventKey="participa" title={
              <Button2 
                text={props.buttonText} 
                edit={false} 
                textcolor='#fff'
                backgroundcolor='#8F002F' 
                onClick={props.onclick}
              /> 
            }>
              <LeagueInformation />
            </Tab>
            <Tab eventKey="informacion" title="Información">
              <LeagueInformation />
            </Tab>
            <Tab eventKey="participantes" title="Participantes">
              <LeagueParticipantsScreen />
            </Tab>
            <Tab eventKey="calendario" title="Calendario">
              <LeagueCalendar />
            </Tab>
            {/* <Tab eventKey="sponsors" title="Sponsors">
              <LeaguesSponsors />
              </Tab> */}
            <Tab eventKey="posiciones" title="Posiciones">
              <LeaguePositions />
            </Tab>
            <Tab eventKey="finales" title="Finales">
              <LeagueBrackets />
            </Tab>
            <Tab eventKey="transmiciones" title="transmisiones">
              <LeaguesTransmitions />
            </Tab>
          </Tabs>
        </SubContainerDiv>
      </MainDiv>
  );
};
