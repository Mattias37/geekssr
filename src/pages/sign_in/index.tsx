import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userMe } from '../../redux/user/action';
import { getProfile } from '../../redux/user/selectors';
import { CustomNavbar } from '../../ui/components/navbar/index';

const SignIn = () => {
    const dispatch = useDispatch(); 
    const user = useSelector(getProfile);
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(userMe());
        }, 5000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <CustomNavbar />
            <Button color="primary">SetUser</Button>
            {JSON.stringify(user)}
        </div>
    )
}

export default SignIn;
