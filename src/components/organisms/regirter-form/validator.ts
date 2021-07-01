import * as yup from 'yup';

export const SignUpValidator = yup.object({
    fullname: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required(),
    phone: yup.number().required(),
    birthdate: yup.date().required(),
    password: yup.string().required(),
    passwordConfirm: yup.string().required(),
    acceptTerms: yup.bool().required(),
    receiveEmail: yup.bool()
});

export const validateConfirmPassword = (pass, value) => {
    let error = '';
    if(pass && value){
        if(pass !== value){
            error = 'Password not matched';
        }
    }
    return error;
}