import styled from 'styled-components';

export const MainDiv = styled.div`
  background: #fff;
  width: auto;
  z-index: 100;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height:65vh;
`;
export const SubContainerDiv = styled.div`
  background: transparent !important;
  width: auto;
  z-index: 100;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &>div.tab-content{
    width: 100%;
    height: auto;
  }
  &>nav{
    flex: 1;
    width: 100%;
    display: flex;
    height: 3em;
    &.tab-content{
      width: 100%;
      height: 100%;
    }
  }
  &>nav>.nav-item{
    flex: 1;
    background-color: #F50050;
    color: #fff;
    border-radius: 0 !important;
    text-align: center;
    font: normal normal 800 Open Sans;
    font-size: 1em;
    letter-spacing: 0px;
    color:  rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
      background-color: #F50050 !important;
      opacity: 1;
      border: 0;
      color:  rgba(255, 255, 255, 1) !important;
    }
    &:hover{
      border: 0 !important;
    }
  }
  height: auto;
  & > h1 {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
  @media (max-width: 769px) {
    height: auto;
    &>nav>a{
      width: 100%;
    }
  }
`;

