import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "../routes/PrivateRoute";
import AppRouter from "./AppRouter";
import { Context } from "../../contexts/Store";

function MainRouter() {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const fetchUserData = () => {
            let user_data = localStorage.getItem("user");
            if (user_data) {
                user_data = JSON.parse(user_data);
                dispatch({
                    type: "USER_LOGIN",
                    user_data: user_data,
                });
            }
        };
        fetchUserData();
    }, []);
    return (
        <>
            <Routes>
                <Route
                    path="auth/*"
                    element={
                        <AuthRoute>
                            <AuthRouter />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <AppRouter />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default MainRouter;
