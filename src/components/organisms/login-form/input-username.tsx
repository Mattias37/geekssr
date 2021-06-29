import React, { useCallback } from 'react';
import { useField } from 'formik';
import { InputField } from '../../molecules/input-field';
import { InputTextStyled } from '../../molecules/input-text/styled';
import { TextLabelRegister } from './styles';

export const InputUsername = ({
  name,
  type,
  disabled,
  label,
  placeholder,
  required,
  icon,
  config,
}: InputPropsForm) => {
  const [field, meta, helper] = useField({ name });
  const { setValue } = helper;
  const handleCallback = useCallback(
    (e, { value }) => {
      setValue(value);
    },
    [setValue],
  );
  return (
    <InputField
      required={required}
      inputLabel={<TextLabelRegister>{label}</TextLabelRegister>}
      placeholder={placeholder}
      icon={icon}
      name={field.name}
      disabled={disabled}
      errors={meta.error}
      touched={meta.touched}>
      <InputTextStyled
        {...field}
        radius="50px"
        config={config}
        type={type}
        value={field.value}
        onChange={handleCallback}
        placeholder={placeholder}
        disabled={disabled}
        autoCapitalize="none"
      />
    </InputField>
  );
};
