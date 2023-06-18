import React, { Children } from "react";
import { useContext } from "react";
import { Context } from "../../contexts/Store";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user_data, dispatch } = useContext(Context);
    const is_verified = user_data.is_verified;
    return is_verified ? children : <Navigate to="/auth/login" />;
}

export default PrivateRoute;
