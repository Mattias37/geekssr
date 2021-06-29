import styled from 'styled-components';

export const LimiteInputTextStyled = styled.div`
  margin-top: -1.2em;
  font-weight: bold;
  color: #4a4a4a;
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
`;

export const InputTextStyled = styled.input<{
  date?: boolean;
  radius?: string;
}>`
  width: auto;
  ${({ date }) => date && `width: 4vw;`}
  &.ui.input>input {
    ${({ radius }) => radius && `border-radius: ${radius}`};
  }
  @media (max-width: 768px) {
    width: 220px;
    ${({ date }) => date && `width: 50px;`}
    height:20px;
  }
`;
