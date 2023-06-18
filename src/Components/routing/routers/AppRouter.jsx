import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../includes/SideBar";
import MainScreen from "../../screens/MainScreen";
import Search from "../../screens/Search";
import MyProfile from "../../screens/MyProfile";
import MyPostHighliteModal from "../../includes/modals/MyPostHighliteModal";
import MyPosts from "../../includes/myprofile/MyPosts";

function AppRouter() {
    return (
        <>
            <Container>
                <SideBar />
                <MyPostHighliteModal />
                {/* <MainScreen /> */}
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<MainScreen />} />
                    <Route path="search" element={<Search />} />
                    <Route path="/home/profile" element={<MyProfile />} />
                </Routes>
            </Container>
        </>
    );
}

export default AppRouter;
const Container = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;
    /* background-color: #000; */
    overflow-x: hidden;
`;
