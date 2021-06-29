import * as Yup from "yup";

const requiredMsg = "Campo requerido.";

export const registerValidation = Yup.object().shape({
  username: Yup.string().required(requiredMsg),
  phone: Yup.string().required(requiredMsg),
  password: Yup.string().min(8, 'Contraseña debe tener mínimo 8 caracteres').required(requiredMsg),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), ''], 'Contraseña debe ser iguales')
  .required(requiredMsg),
  habeasData: Yup.bool().oneOf([true], 'Debe accpetar nuestras políticas.').required(requiredMsg),
  year: Yup.number().required(requiredMsg),
  day: Yup.number().required(requiredMsg).test('len', 'dia invalido', val => ( val && val > 0 && val <= 31) ? true : false),
  month: Yup.number().required(requiredMsg).test('len', 'mes invalido', val => ( val && val > 0 && val <= 12) ? true : false),
  email: Yup.string().email("email invalido").required(requiredMsg),
});
