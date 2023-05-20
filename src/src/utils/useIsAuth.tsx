import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";
import {loadProfile} from "../redux/thunks/profileThunk";
import {useLocation, useNavigate} from "react-router-dom";

const IsAuth = () => {
    const user = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        dispatch(loadProfile());
    }, [user.IdInstance]);

    useEffect(() => {
        if ((user.status === 'error') && (user.IdInstance === '' || user.ApiTokenInstance === '')) {
            navigate("/login")
        } else if (location.pathname === '/login') {
            navigate("/")
        }
    }, [user, location.pathname]);

    return <></>;
};

export default IsAuth;
