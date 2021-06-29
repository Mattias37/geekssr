import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    wrap: no-wrap;
    margin: 2em;
    & > span {
        height: auto;
    }
`;

export const BlackDiv = styled.div`
    width: 6px;
    height: 34px;
    background: #000000 0% 0% no-repeat padding-box;
    opacity: 1;
`;

export const RedDiv = styled.div`
    width: 5px;
    height: 34px;
    background: #F50050 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-right: 15px;
`;