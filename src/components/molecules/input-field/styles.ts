import { Form } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  disabled?: boolean;
}

export const StyledLabel = styled.label<Props>`
  display: flex !important;
  color: white;
  font-weight: bold;
  align-items: center;
  margin: 0px;
  padding: 0px;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

export const StyledIcon = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 11.4px;
    height: 15px;
    margin-right: 10px;
  }
`;
export const StyledFormField = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 32%;
  & > .ui{
    width: 90%;
    height: 50px;
  }
`;
export const StyledFormLabel = styled.label<{ date?: boolean }>`
  &.ui.label {
    font-size: 12px;
  }
  ${({ date }) =>
    date &&
    `
        width: auto;
        text-align: center;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
        &.ui.label{
          font-size: 12px;
          display: flex;
          
        }
  `};
  @media (max-width: 768px) {
    &.ui.label {
      font-size: 9px;
    }
    ${({ date }) =>
      date &&
      `
        width: 50px;
        text-align: center;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
        &.ui.label{
          font-size: 9px;
          display: flex;
          
        }
  `};
  }
`;
