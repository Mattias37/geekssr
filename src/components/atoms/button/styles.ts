import styled from 'styled-components';

interface Props {
  primary?: boolean;
  warning?: boolean;
  outline?: boolean;
  blood?: boolean;
  gold?: boolean;
  edit?: boolean;
  fluid?: boolean;
  border?: boolean;
  radius?: number;
  fontSize?: number;
}

export const ButtonStyled = styled.button<Props>`
  cursor: pointer;
  display: inline-block;
  outline: 0;
  vertical-align: baseline;
  font-weight: 700;
  line-height: 1em;
  min-height: 1em;
  text-align: center;
  padding: 0.78571429em 1.5em 0.78571429em;
  border: none;
  border-radius: 1px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: Open Sans;
  text-transform: uppercase;
  background-color: #ff0055;
  &:hover {
    background: #7d8831;
    color: #fcfcfc;
  }
  ${(props) => (props.disabled ? 'opacity: 0.7' : 'opacity: 1')};
  ${(props) => {
    let styles = '';
    if (props.outline) {
      styles = `
        background: #fff;
        color: #1191cd;
        border: 1px solid white;
        &:hover {
          background: #1191cd;
          color: #ffffff;
        }
      `;
    }
    if (props.warning) {
      styles = styles.concat(`
      background: red;
      color: #ffffff;
      border: 1px solid red;
      &:hover {
        background: red;
        color: #ffffff;
      }
      `);
    }
    if (props.blood) {
      styles = styles.concat(`
      background: #ff0055;
      color: #ffffff;
      border: 1px solid #ff0055;
      &:hover {
        background: #ff0055;
        opacity: 0.6;
        color: #ffffff;
      }
      `);
    }
    if (props.gold) {
      styles = styles.concat(`
      background: #E2A803;
      color: #ffffff;
      border: 1px solid #E2A803;
      &:hover {
        background: #E2A803;
        opacity: 0.6;
        color: #ffffff;
      }
      `);
    }
    if (props.edit) {
      styles = styles.concat(`
      background: #55cfff;
      color: #ffffff;
      border: 1px solid #55cfff;
      &:hover {
        background: #55cfff;
        color: #ffffff;
      }
      `);
    }
    if (props.border) {
      styles = styles.concat(`
        border-radius: 0;
        width: 125px;
      `);
    }
    if (props.radius) {
      styles = styles.concat(`
        border-radius: ${props.radius}px;
      `);
    }
    if (props.fontSize) {
      styles = styles.concat(`
        font-size: ${props.fontSize}vw;
      `);
    }
    return styles;
  }}
  @media (max-width: 374px) {
    font-size: 3.5vw;
    line-height: 1em;
    padding: 0.78571429em 1em 0.78571429em;
  }
  ${(props) => (props.fluid ? 'width: 100%' : '')};
`;
