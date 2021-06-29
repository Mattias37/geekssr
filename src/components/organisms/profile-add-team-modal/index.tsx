import React, { useEffect, useState, useCallback } from 'react';
import { Formik, Field, } from 'formik';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { SectionTitle } from '../../molecules/section-title'
import { useMount } from '../../../hooks/useMount';
import { apiClient } from '../../../services';
import { 
  FormContainer,
  RegisterButton,
  FormFieldMainOuter,
  FormFieldOuter,
  // ErrorDiv
} from './styles';


interface Props {
  initialData?: Record<string, any>;
  onHide: any;
}
const initialValues = {
  name: '',
  game: '',
  icon: null,
  maxPlayers: 1
};

export const AddTeamModal = (props: Props) => {
  // const dispatch = useDispatch();
  const [dataList, setDataList] = useState<any>([]);
  // const [selectData, setSelectData] = useState<any>({});
/*   const [error, setError] = useState<any>({
    game: '',
    username: '',
  }); */


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

  const handleSubmit = useCallback(
    async (values) => {
      try {
        const res = await apiClient.ProfileService.createTeam(values);
        console.log(res);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        props.onHide();
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {

    if (!!props.initialData && !!dataList) {
      const findData = dataList.find(
        (item: any) => item.value === props.initialData?.gameId,
      );
      if (findData) {
        /* setError((prev: any) => ({
          ...prev,
          game: !!props.initialData?.gameId,
          username: !!props.initialData?.username,
        }));
        setSelectData({
          game: findData,
          username: props.initialData.username,
        }); */
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
      <SectionTitle text="AGREGAR UN EQUIPO" />
      <FormContainer>
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}> 
        {({ errors, isValid, submitForm, setFieldValue }) => {
          // const errorMessage = Object.entries(errors);
        return (
        <Container fluid>
          {/* {errorMessage.map((error, index) => (
              <ErrorDiv key={index}><span role='img' aria-label="error">😰</span>{error.toString()}</ErrorDiv>
            ))}
          {errorsAuth && <ErrorDiv><span role='img' aria-label="error">😰</span>{errorsAuth.data.message}</ErrorDiv>} */}
            <Row>
              <Col xs={12} md={12}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>NOMBRE DEL EQUIPO:</label>
                    <Field 
                      className='formikField' 
                      type="text"
                      name="name" 
                      placeholder='NOMBRE DEL EQUIPO' 
                      required
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={12}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>VIDEOJUEGO:</label>
                    <Field className='formikField'  as="select" name="game" required>
                      <option value="default">ESCOGE UN VIDEOJUEGO</option>
                      {dataList.map((videojuego: any, index: number) => <option key={index} value={videojuego.value}>{videojuego.label}</option>)}
                    </Field>
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={12}>
                <FormFieldMainOuter>
                    <FormFieldOuter>
                      <label>Logo:</label>
                      <input id="file1" name="icon" type="file" onChange={(event: any) => {
                          setFieldValue("icon", event?.currentTarget?.files[0]);
                        }} className="formikField" 
                      />
                    </FormFieldOuter>
                  </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={12}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>CANTIDAD DE PARTICIPANTES:</label>
                    <Field 
                      className='formikField' 
                      type="number"
                      name="maxPlayers" 
                      placeholder='CANTIDAD DE PARTICIPANTES' 
                      required
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
            </Row>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
              }}>
              <RegisterButton disabled={false} onClick={submitForm}>
                {false ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                ) : (
                  'AGREGAR EQUIPO'
                )}
              </RegisterButton>
            </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
            </div>
          </Container>
          )}}
        </Formik>
      </FormContainer>
    </>
  );
};
