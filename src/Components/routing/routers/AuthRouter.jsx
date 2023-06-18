import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../authentication/Login";

function AuthRouter() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default AuthRouter;
