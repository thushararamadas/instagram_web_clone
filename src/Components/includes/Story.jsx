import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import StoryModal from "./modals/StoryModal";
import { Context } from "../contexts/Store";
import storieList from "../../assets/js/storieList";

function Story() {
    const { clickedStori, dispatch } = useContext(Context);
    return (
        <>
            <MainContainer>
                <StoryDiv>
                    {storieList.map((item) => (
                        <>
                            <FlexDiiv>
                                <Gradient>
                                    <ProfileDiv
                                        onClick={() => {
                                            dispatch({
                                                type: "STORY_MODAL",
                                                isStoryModal: true,
                                                clickedStori: item.id - 1,
                                            });
                                        }}
                                    >
                                        <img
                                            src={item.profile_picture}
                                            alt="Profile"
                                        />
                                    </ProfileDiv>
                                </Gradient>
                                <NameDiv>
                                    <ProfileName>{item.username}</ProfileName>
                                </NameDiv>
                            </FlexDiiv>
                        </>
                    ))}
                </StoryDiv>
            </MainContainer>
        </>
    );
}

export default Story;
const MainContainer = styled.div`
    /* background-color: #000; */
    margin: 20px auto;
    width: 85%;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const StoryDiv = styled.div`
    display: flex;
`;
const FlexDiiv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Gradient = styled.div`
    min-width: 60px;
    max-width: 60px;
    height: 60px;
    background-image: linear-gradient(
        to right top,
        rgb(254, 167, 0),
        rgb(124, 19, 248)
    );
    border-radius: 50%;
    width: 70px;
`;
const ProfileDiv = styled.div`
    width: 55px;
    padding: 3px;
    img {
        display: block;
        width: 100%;
        border-radius: 50%;
    }
`;
const NameDiv = styled.div``;

const ProfileName = styled.p`
    color: #656565;
    font-size: 12px;
`;
