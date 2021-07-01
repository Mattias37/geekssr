export const isValid = (errors, touched, field) => {    
    if(errors[field] && touched[field]){
        return 'form-control is-invalid'
    }

    return 'form-control'
}

export const getErrorMessage = (errors, touched, field) => {
    if(errors[field] && touched[field]){
        return errors[field]
    }
    return '';
}