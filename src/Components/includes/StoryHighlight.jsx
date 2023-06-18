import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import storieList from "../../assets/js/storieList";
import { Context } from "../contexts/Store";

function StoryHighlight({ currentStory, isviewd }) {
    const { clickedStori, dispatch } = useContext(Context);
    const [isLiked, setLiked] = useState(false);

    return (
        <StoriCOntainer
            className={
                currentStory === clickedStori - 1
                    ? "prev"
                    : currentStory === clickedStori - 2
                    ? "prev-prev"
                    : currentStory === clickedStori + 1
                    ? "next"
                    : currentStory === clickedStori + 2
                    ? "next-next "
                    : ""
            }
        >
            <All className={isviewd === true ? "" : "active"}>
                <FlexDiiv>
                    <Gradient>
                        <ProfileDiv>
                            <img
                                src={storieList[currentStory].profile_picture}
                                alt="Profile"
                            />
                        </ProfileDiv>
                    </Gradient>
                    <NameDiv>
                        <ProfileName>
                            {storieList[currentStory].username}
                        </ProfileName>
                    </NameDiv>
                </FlexDiiv>
            </All>
            <StoryImage>
                <Watching>{/* <Timing></Timing> */}</Watching>
                <img src={storieList[currentStory].story} alt="Image" />
                <Profile>
                    <ProfileImage>
                        <img
                            src={storieList[currentStory].profile_picture}
                            alt="Image"
                        />
                    </ProfileImage>
                    <Name>{storieList[currentStory].username}</Name>
                    <Time>{storieList[currentStory].time}</Time>
                </Profile>
                <SendMsg className={isviewd === true ? "" : "active"}>
                    <input type="text" placeholder="Replay to " />
                    <Like>
                        <img
                            src={require("../../assets/love.png")}
                            alt="Image"
                        />
                    </Like>

                    <Like>
                        <img
                            src={require("../../assets/send.png")}
                            alt="Image"
                        />
                    </Like>
                </SendMsg>
            </StoryImage>
        </StoriCOntainer>
    );
}

export default StoryHighlight;
const StoriCOntainer = styled.div`
    /* background-color: #080707; */
    width: 30%;
    padding: 5px 0 75px 0;
    position: absolute;
    top: 0;
    left: 35%;
    &.prev {
        transform: scale(0.4);
        left: 170px;
    }
    &.prev-prev {
        transform: scale(0.4);
        left: -70px;
    }
    &.next {
        left: 900px;
        transform: scale(0.4);
    }
    &.next-next {
        left: 1100px;
        transform: scale(0.4);
    }
`;
const StoryImage = styled.div`
    position: relative;
    width: 400px;
    margin: 0 auto;
    img {
        border-radius: 5px;
        display: block;
        width: 100%;
    }
`;
const SendMsg = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    padding: 0 20px;
    input {
        margin-right: 10px;
        padding: 15px;
        border-radius: 25px;
        width: 270px;
        border: 1px solid #fff;
        background: none;
        ::placeholder {
            font-size: 15px;
            color: #fff;
        }
    }
    &.active {
        visibility: hidden;
    }
`;
const Like = styled.div`
    filter: invert(1);
    width: 25px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
    }
`;
const Liked = styled.div`
    width: 30px;
    img {
        display: block;
        width: 100%;
    }
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 25px;
    left: 25px;
`;
const ProfileImage = styled.div`
    width: 45px;
    margin-right: 10px;
    img {
        border-radius: 50%;
        display: block;
        width: 100%;
    }
`;
const Name = styled.div`
    color: #fff;
    margin-right: 10px;
`;
const Time = styled.div`
    color: #fff;
    opacity: 0.6;
`;
const FlexDiiv = styled.div`
    position: absolute;
    top: 250px;
    left: 120px;
    z-index: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Gradient = styled.div`
    min-width: 170px;
    max-width: 170px;
    height: 170px;
    background-image: linear-gradient(
        to right top,
        rgb(254, 167, 0),
        rgb(124, 19, 248)
    );
    border-radius: 50%;
    width: 70px;
`;
const ProfileDiv = styled.div`
    width: 155px;
    padding: 8px;
    img {
        display: block;
        width: 100%;
        border-radius: 50%;
    }
`;
const NameDiv = styled.div``;

const ProfileName = styled.p`
    color: #fff;
    font-size: 16px;
`;
const All = styled.div`
    display: none;
    &.active {
        display: block;
    }
`;
const fillAnimation = keyframes`
0% { background-color: transparent; }
100% { background-color: #FFFF; }
`;
const Watching = styled.div`
    position: absolute;
    width: 97%;
    /* border: 1px solid #656565; */
    padding: 2px;
    left: 5px;
    top: 5px;
    border-radius: 15px;
    background: white;
    background-color: transparent;
    animation: ${fillAnimation} 2s linear forwards;
`;

const Timing = styled.div`
    width: 97%;
`;
