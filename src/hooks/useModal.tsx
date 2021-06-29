import React, { useState, ReactNode } from 'react';
import { Modal } from 'react-bootstrap';

export const useModal = () => {
    const [show, setShow] = useState(false);

    const onToggle = () => {
        setShow(!show);
    };

    interface Props {
        dialogClassName?: string;
        size: 'sm' | 'lg' | 'xl';
        animation: boolean;
        centered?: boolean;
        scrollable: boolean;
        show: boolean;
        onToggle: Function;
        children: ReactNode;
    }
    const ContainerModal = ({
        children,
        centered,
        size,
        show,
        dialogClassName,
        animation,
        scrollable,
        onToggle
    }: Props) => (
        <Modal
            dialogClassName={dialogClassName}
            size={size}
            show={show}
            scrollable={scrollable}
            centered={centered}
            animation={animation}
            onHide={onToggle}>
            {children}
        </Modal>
    );
    return [show, onToggle, ContainerModal];
};
