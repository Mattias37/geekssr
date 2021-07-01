import React, { ReactNode } from 'react';
import { StyledFormField, StyledFormLabel, StyledIcon, StyledLabel } from './styles';

export interface FieldLabelProp {
  inputLabel?: ReactNode | string;
  icon?: ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  showError?: boolean;
}

interface Props {
  name: string;
  date?: boolean;
  errors?: string;
  touched?: boolean;
  children: JSX.Element[] | JSX.Element | ReactNode;
}

export function InputField(props: Props & FieldLabelProp) {
  const { inputLabel, errors, touched, required, disabled, date } = props;
  return (
    <StyledFormField required={required}>
      <StyledLabel disabled={disabled}>
        {props.icon && <StyledIcon>{props.icon}</StyledIcon>}
        {inputLabel}
      </StyledLabel>
      <div />
      {props.children}
      {(touched || props.showError) && errors && (
        <StyledFormLabel date={date} color="red">
          {errors}
        </StyledFormLabel>
      )}
    </StyledFormField>
  );
}
