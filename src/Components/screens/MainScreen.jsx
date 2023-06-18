import React from "react";
import styled from "styled-components";
import Posts from "../includes/Posts";
import Story from "../includes/Story";
import StoryModal from "../includes/modals/StoryModal";
import AccountDetails from "../includes/AccountDetails";

function MainScreen() {
    return (
        <>
            <StoryModal />
            <MainContainer>
                <LeftContainer>
                    <Story />
                    <Posts />
                </LeftContainer>
                <RightContainer>
                    <AccountDetails />
                </RightContainer>
            </MainContainer>
        </>
    );
}

export default MainScreen;
const MainContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 20px 50px;
    position: absolute;
    left: 250px;
`;
const LeftContainer = styled.div`
    width: 50%;
`;
const RightContainer = styled.div`
    width: 25%;
`;
