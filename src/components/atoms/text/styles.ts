import styled from 'styled-components';

interface P {
  underline?: boolean;
  size?: string;
  color?: string;
  width?: string;
  aling?: string;
  justify?: string;
  weight?: string;
  input?: boolean;
  marginTop?: number;
}

export const TextStyled = styled.span`
  font-family: Open Sans;
  width: ${(props: P) => (props.width ? props.width : 'max-content')};
  height: 39.6694px;
  font-size: ${(props: P) => (props.size ? props.size : '12px')};
  color: ${(props: P) => (props.color ? props.color : '#4a4a4a')};
  display: flex;
  font-weight: ${({ weight }: P) => (weight ? weight : 'normal')};
  align-items: ${(props) => (props.aling ? props.aling : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')}px;
  text-align: center;
  ${({ input }) =>
    input && `font-family: Bebas Neue;`};
  ${({ underline }) => underline && `text-decoration: underline;`};
`;
