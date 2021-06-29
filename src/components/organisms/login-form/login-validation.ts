import * as Yup from 'yup';

const requiredMsg = 'Campo requerido.';

export const loginValidation = Yup.object().shape({
  email: Yup.string().required(requiredMsg),
  password: Yup.string().required(requiredMsg),
});

export const emailValidation = Yup.object().shape({
  email: Yup.string().required(requiredMsg),
});

export const newPasswordValidation = Yup.object().shape({
  recoveryCode: Yup.string().required(requiredMsg),
  newPassword: Yup.string().required(requiredMsg),
});
