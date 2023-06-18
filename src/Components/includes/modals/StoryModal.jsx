import React, { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../contexts/Store";
import storieList from "../../../assets/js/storieList";
import StoryHighlight from "../StoryHighlight";
import StoryHighlightSmall from "../StoryHighlightSmall";

function StoryModal() {
    const { clickedStori, isStoryModal, dispatch } = useContext(Context);
    const isviewd = false;
    useEffect(() => {
        const changestori = setInterval(() => {
            if (storieList.length - 1 > clickedStori) {
                dispatch({
                    type: "CHANGE_STORY",
                    clickedStori: clickedStori,
                });
            }
        }, 5000);

        return () => {
            clearInterval(changestori);
        };
    }, [clickedStori]);
    return (
        <>
            {isStoryModal && (
                <Cover>
                    <MainCOntainer>
                        <Top>
                            <Logo>
                                <img
                                    src={
                                        require("../../../assets/instagram-wordmark.svg")
                                            .default
                                    }
                                    alt="Logo"
                                />
                            </Logo>
                            {clickedStori - 2 > -1 && (
                                <StoryHighlight
                                    currentStory={clickedStori - 2}
                                />
                            )}
                            {clickedStori - 1 > -1 && (
                                <StoryHighlight
                                    currentStory={clickedStori - 1}
                                />
                            )}

                            <StoryHighlight
                                currentStory={clickedStori}
                                isviewd={true}
                            />

                            {clickedStori + 1 < storieList.length && (
                                <StoryHighlight
                                    currentStory={clickedStori + 1}
                                />
                            )}
                            {clickedStori + 2 < storieList.length && (
                                <StoryHighlight
                                    currentStory={clickedStori + 2}
                                />
                            )}
                            <Close
                                onClick={() => {
                                    dispatch({
                                        type: "STORY_MODAL",
                                        isStoryModal: false,
                                    });
                                }}
                            >
                                <img
                                    src={
                                        require("../../../assets/close.svg")
                                            .default
                                    }
                                    alt="Close"
                                />
                            </Close>
                        </Top>
                    </MainCOntainer>
                </Cover>
            )}
        </>
    );
}

export default StoryModal;
const Cover = styled.div`
    background-color: #1a1a1a;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 100;
`;
const MainCOntainer = styled.div``;
const Top = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    width: 120px;
    img {
        filter: invert(1);
        display: block;
        width: 100%;
    }
`;
const Close = styled.div`
    width: 25px;
    img {
        filter: invert(1);
        display: block;
        width: 100%;
    }
`;
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
