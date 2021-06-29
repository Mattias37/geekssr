import styled from 'styled-components';

interface Props {
    backgroundcolor: string;
    textcolor: string;
}

export const ButtonMain = styled.button<Props>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.backgroundcolor)};
    color: ${(props) => (props.textcolor)};
    border: 0;
    min-width: 208px;
    height: 40px;
    & > svg{
        height: auto;
        margin-right: 5px;
        width: 1.5em;
    }
`;