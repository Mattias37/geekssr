import styled from 'styled-components';

export const ProfileContainer = styled.div`
  border: solid 1px grey;
  margin: 0.5em;
  border-radius: 0 15px 15px 15px;
  padding: 1em;
  width: 100%;
  min-width: 350px;
  &>h3{
    text-align: left;
    font: normal normal normal 30px/23px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
  &>p{
    border-bottom: 2px solid grey;
    color: grey;
    font-weight: 400;
    font-family: Open Sans !important;
  }
  &>ul{
    color: #FF0055;
    font-family: Open Sans !important;
    width: 100%;
  }
  &>ul>li{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding: 2px;
    border-bottom: 0.5px solid #BABABA;
  }
  &>ul>li>div{
    color: #FF0055;
    font-family: Open Sans !important;
    &:nth-child(2n) {
      color: #7D7D7D;
      font-weight: 300 !important;
    }
  }
  @media (max-width: 768px) {
    min-width: 280px;
  }
`;
export const ProfileContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #BABABA;
`;

export const ProfileContainerTeams = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const ProfileContainerTeams2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2em;
`;

export const GameAccountContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 5px auto;
  border-bottom: 1px solid gray;
  justify-content: space-between;
`;

export const UsernameContainer = styled.span`
  color: #FF0055;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: #FF0055;
  width: 20px; 
  height: 20px;
  outline: none;
  border-radius: 50%;
  color: white;
  padding: 0px;
`;