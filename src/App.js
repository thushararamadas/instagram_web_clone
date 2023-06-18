import React from "react";
import style from "./assets/css/style.css";
import AppRouter from "./Components/routing/routers/AppRouter";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import Store from "./Components/contexts/Store";
import MainRouter from "./Components/routing/routers/MainRouter";

function App() {
    return (
        <>
            <Store>
                <Router>
                    <MainRouter />
                </Router>
            </Store>
        </>
    );
}

export default App;
