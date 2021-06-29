import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../../redux/reducers/userReducer';
import { CustomNavbar } from '../../ui/components/navbar/index';

const SignIn = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(setUser({
                id: 2,
                username: "Milko"
            }))
        }, 5000);
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
