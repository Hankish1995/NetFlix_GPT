import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/redux/userSlice/userSlice";
const AppLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, accessToken } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName, token: accessToken }))
            }
            else {
                dispatch(removeUser())
            }
        })
    }, [dispatch])
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default AppLayout