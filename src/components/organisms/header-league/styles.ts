import styled from 'styled-components';

interface Props {
  photo?: string;
}

export const Header = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 1em;
  display: flex;
  border-bottom: 2px solid #ff0055;
  @media (max-width: 768px) {
    height: 80vh;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90vw;
  margin: 20px auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPriceTop = styled.div`
background: #FFFFFF00 0% 0% no-repeat padding-box;
border: 3px solid #707070;
opacity: 1;
border-radius: 120px;
height: 221px;
padding: 3%;
min-width: 200px;
margin: auto;
`;


export const PhotoProfile = styled.div<Props>`

background: #444444 0% 0% no-repeat padding-box;
box-shadow: 0px 10px 25px #34343659;
padding: 3%;
height: 175px;
border-radius: inherit;
  background: ${(props) => `url(${props.photo})`} no-repeat center;
  background-size: cover;
`;

export const SelectPhoto = styled.input`
  margin-left: 150px;
  margin-top: 150px;
  width: 48px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 10px 25px #34343659;
  background-image: url('https://webstockreview.net/images/camera-icon-png-7.png');
  background-size: contain;
  height: 48px;
  border: none;
  outline: none;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  color: #ff0055;
  &>.formikField{
    background: #FFFFFF00 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    opacity: 1;
  }
  &> h4 >.formikField{
    background: #FFFFFF00 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    opacity: 1;
  }
  &>h3{
    font-family: Bebas Neue;
    font-size: 2.5em;
  }
  &>h4{
    color: #7D7D7D;
    font-size: 1em;
    font-family: Open Sans !important;
  }
  &>div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &>div>h4{
    color: #7D7D7D;
    font-size: 1em;
    font-family: Open Sans !important;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const FormFieldMainOuter = styled.div`
  position: relative;
  margin: 0.5em;
`;
export const FormFieldOuter = styled.div`
  &>label{
    transform: translate(14px, -6px) scale(0.75);
    background-color: #fff;
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    transform-origin: top left;
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    padding: 0;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }
  &>.formikField{
    background: #FFFFFF00 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    opacity: 1;
    padding: 0.5em;
  }
  &> h4 >.formikField{
    background: #FFFFFF00 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    opacity: 1;
  }
`;

export const CountryImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-right: 5px;
  @media (max-width: 768px) {
    width: 26px;
    height: 21px;
    margin-top: 5px;
  }
`;

export const Banner = styled.div`
  width: 400px;
  height: 28px;
  background: rgba(255, 0, 85, 0.3);
  text-align: center;
  font-size: 15px;
  color: #fff;
  margin-top: -200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SelectTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const RowTeam = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const RowTeamPhoto = styled.img`
  height: auto;
  width: 100px;
  border-radius: 50%;
`;

export const RowTeamName = styled.label`
  width: 300px;
  font-size: 30px;
  line-height: 3.5rem;
`;

export const RowTeamRadio = styled.input`
  margin-top: 18px;
  width: 20px;
  height: 20px;
`;
