import * as Yup from 'yup';

const requiredMsg = 'Campo requerido.';

export const registerValidation = Yup.object().shape({
  username: Yup.string().required(requiredMsg),
  game: Yup.string().required(requiredMsg),
});
