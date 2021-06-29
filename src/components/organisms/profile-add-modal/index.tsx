import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { SectionTitle } from '../../molecules/section-title'
import { useMount } from '../../../hooks/useMount';
import { apiClient } from '../../../services';
import { FormContainer } from './styles';
import {
  createAccountGame,
  updateAccountGame,
} from '../../../redux/profile/action';


interface Props {
  initialData?: Record<string, any>;
}
export const AddMoreModal = (props: Props) => {
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState<any>();
  const [selectData, setSelectData] = useState<any>({});
  const [error, setError] = useState<any>({
    game: '',
    username: '',
  });

  const initialData = () => {
    setSelectData({});
    setError({
      game: '',
      username: '',
    });
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setError((prev: any) => ({ ...prev, [name]: !!value }));
    setSelectData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchList = async () => {
    try {
      const { data } = await apiClient.ProfileService.games();
      const newList = data.data.map((item: any) => ({
        value: item._id,
        label: item.name,
      }));
      setDataList(newList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    if (!!props.initialData && !!dataList) {
      const findData = dataList.find(
        (item: any) => item.value === props.initialData?.gameId,
      );
      if (findData) {
        setError((prev: any) => ({
          ...prev,
          game: !!props.initialData?.gameId,
          username: !!props.initialData?.username,
        }));
        setSelectData({
          game: findData,
          username: props.initialData.username,
        });
      }
    } else {
      console.log(props.initialData);
    }
  }, [props.initialData, dataList]);
  useMount(() => {
    fetchList();
  });
  return (
    <>
      <SectionTitle text="VIDEO JUEGO" />
      <FormContainer>
        <Row>
          <Col md={4} className="mb-3">
            <Select
              isDisabled={!dataList}
              value={selectData.game}
              options={dataList as any}
              onChange={(newValue: any) => {
                setError((prev: any) => ({ ...prev, game: !!newValue }));
                setSelectData((prev: any) => ({ ...prev, game: newValue }));
              }}
            />
            {error && !error.game && <p>el campo es obligatorio</p>}
          </Col>
          <Col md={4} className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nickname"
              aria-describedby="basic-addon1"
              name="username"
              value={selectData.username}
              onChange={handleChange}
            />
            {error && !error.username && <p>el campo es obligatorio</p>}
          </Col>
          <Col>
            <Button
              disabled={!error.game || !error.username}
              id="Button-styled-organims"
              onClick={async () => {
                const values = selectData;
                values.game = values.game.value;
                if (!!props.initialData) {
                  await dispatch(
                    updateAccountGame(props.initialData.gameAccountId, values),
                  );
                } else {
                  await dispatch(createAccountGame(values));
                }
                initialData();
              }}>
              {!!props.initialData ? 'ACTUALIZAR' : 'AGREGAR'}
            </Button>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};
