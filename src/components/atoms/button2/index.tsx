import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Io from 'react-icons/io';

import { ButtonMain } from './style';


interface Props {
    text: string;
    edit: boolean;
    type?: string;
    textcolor: string;
    backgroundcolor: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button2 = (props: Props) => {
    return (
        <ButtonMain  textcolor={props.textcolor} backgroundcolor={props.backgroundcolor} onClick={props.onClick}>
            {props.edit ?
            <Fa.FaRegEdit /> : <Io.IoIosAddCircleOutline />}
            <p>{props.text}</p>
        </ButtonMain>
    )
};

