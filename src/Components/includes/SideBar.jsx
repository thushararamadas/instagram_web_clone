import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../contexts/Store";

function SideBar() {
    const { dispatch } = useContext(Context);
    return (
        <>
            <MainContainer>
                <TextLogo>
                    <img
                        src={
                            require("../../assets/instagram-wordmark.svg")
                                .default
                        }
                        alt="LoGo"
                    />
                </TextLogo>
                <FlexDiv>
                    <ScreenIcons>
                        <IconsDiv to="/home">
                            <Icon>
                                <img
                                    src={require("../../assets/home.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Home</ScreenName>
                        </IconsDiv>
                        <IconsDiv>
                            <Icon>
                                <img
                                    src={require("../../assets/search.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Search</ScreenName>
                        </IconsDiv>
                        <IconsDiv>
                            <Icon>
                                <img
                                    src={require("../../assets/direction.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Explore</ScreenName>
                        </IconsDiv>
                        <IconsDiv>
                            <Icon>
                                <img
                                    src={require("../../assets/video.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Reels</ScreenName>
                        </IconsDiv>
                        <IconsDiv>
                            <Icon>
                                <img
                                    src={require("../../assets/chat.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Messages</ScreenName>
                        </IconsDiv>
                        <IconsDiv>
                            <Icon>
                                <img
                                    src={require("../../assets/heart.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Notifications</ScreenName>
                        </IconsDiv>
                        <IconsDiv>
                            <Icon>
                                <img
                                    src={require("../../assets/tab.png")}
                                    alt="Icons"
                                />
                            </Icon>
                            <ScreenName>Create</ScreenName>
                        </IconsDiv>
                        <ProfileDiv to="/home/profile">
                            <Profile>
                                <img
                                    src={require("../../assets/mypro.jpg")}
                                    alt="Icons"
                                />
                            </Profile>
                            <Profilename>Profile</Profilename>
                        </ProfileDiv>
                    </ScreenIcons>
                    <More>
                        <IconsDiv
                            onClick={() => {
                                dispatch({
                                    type: "LOGOUT",
                                });
                            }}
                        >
                            <Iconss>
                                <img
                                    src={require("../../assets/menu.png")}
                                    alt="Icons"
                                />
                            </Iconss>
                            <ScreenName>Log out</ScreenName>
                        </IconsDiv>
                    </More>
                </FlexDiv>
            </MainContainer>
        </>
    );
}

export default SideBar;
const MainContainer = styled.div`
    /* background-color: #000; */
    width: 15%;
    height: 100vh;
    border-right: 1px solid rgb(219 219 219);
    padding: 10px;
    position: fixed;
`;
const TextLogo = styled.div`
    padding: 20px;
    width: 120px;
    img {
        display: block;
        width: 100%;
    }
`;
const ScreenIcons = styled.div``;
const ProfileDiv = styled(Link)`
    text-decoration: none;
    color: #000;
    padding: 20px 25px;
    display: flex;
    :hover {
        background-color: rgb(219 219 219);
    }
`;
const Profile = styled.div`
    width: 25px;
    margin-right: 20px;
    border: 2px solid #000;
    border-radius: 50%;
    img {
        border-radius: 50%;
        display: block;
        width: 100%;
    }
`;
const ScreenName = styled.p`
    color: #000;
`;
const Profilename = styled.p`
    font-weight: 700;
`;
const IconsDiv = styled(Link)`
    text-decoration: none;
    padding: 20px 25px;
    display: flex;
    :hover {
        background-color: rgb(219 219 219);
    }
`;
const Icon = styled.div`
    width: 20px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const More = styled.div`
    margin-top: 80px;
`;
const Iconss = styled.div`
    width: 25px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
