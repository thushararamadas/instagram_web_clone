import React, { Children, useContext } from "react";
import { Context } from "../../contexts/Store";
import { Navigate, useSearchParams } from "react-router-dom";

function AuthRoute({ children }) {
    const { user_data, dispatch } = useContext(Context);
    const is_verified = user_data.is_verified;
    const [searchParams] = useSearchParams();
    const nextpath = searchParams.get("next") ? searchParams.get("next") : "/";
    return !is_verified ? children : <Navigate to={nextpath} />;
}

export default AuthRoute;
