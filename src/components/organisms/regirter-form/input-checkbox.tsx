import React, { /* useCallback */ } from 'react';
import { useField } from 'formik';
import Form from 'react-bootstrap/Form'
//import { InputField } from '../../molecules/input-field';
//import { InputTextStyled } from '../../molecules/input-text/styled';
import { TextLabelRegister } from './styles';

export const CheckBox = ({
  name,
  type,
  disabled,
  label,
  placeholder,
  required,
  icon,
  config,
}: InputPropsForm) => {
  const [field, meta, /* helper */] = useField({ name });
  //const { setValue } = helper;
/*   const handleCallback = useCallback(
    (e, { value }) => {
      setValue(value);
    },
    [setValue],
  ); */
  return (
      <Form.Group style={{}}>
        <Form.Check
              style={{     
                position: 'relative',
                display: 'flex',
                paddingLeft: '1.25rem',
                justifyContent: 'initial',
                alignItems: 'center'
              }}
              required
              name={field.name}
              label={<TextLabelRegister>{label}</TextLabelRegister>}
              isInvalid={!!meta.error}
              feedback={meta.error}
              id="validationFormik106"
              feedbackTooltip
              disabled={disabled}
        />
      </Form.Group>
  );
};
