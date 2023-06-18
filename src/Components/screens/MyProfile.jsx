import React, { useState } from "react";
import styled from "styled-components";
import MyPosts from "../includes/myprofile/MyPosts";
import { Link } from "react-router-dom";

function MyProfile() {
    const [isHighlightsModal, setHighlightsModal] = useState(false);
    const [active, setactive] = useState(false);
    const [saved, setSaved] = useState(false);
    const [taged, setTaged] = useState(false);

    console.log(active, "LLLLLLLLL");
    const Highlights = [
        {
            id: 1,
            image: require("../../assets/hightlight1.jpg"),
            info: "💛",
        },
        {
            id: 2,
            image: require("../../assets/high2.jpg"),
            info: "🫂",
        },
        {
            id: 3,
            image: require("../../assets/high3.jpg"),
            info: "🖤",
        },
    ];
    return (
        <>
            <MainContainer>
                <Top>
                    <Left>
                        <img
                            src={require("../../assets/mypro.jpg")}
                            alt="Profile"
                        />
                    </Left>
                    <Right>
                        <One>
                            <Name>thushararamadas</Name>
                            <Editprofile>
                                <p>Edit Profile</p>{" "}
                            </Editprofile>
                            <Settings>
                                <img
                                    src={
                                        require("../../assets/settings.svg")
                                            .default
                                    }
                                    alt="Settings"
                                />
                            </Settings>
                        </One>
                        <One>
                            <Post>4 posts</Post>
                            <Post>327 followers</Post>
                            <Post>418 following</Post>
                        </One>
                        <UserName>Thushara Ramadas</UserName>
                        <Info>Software Developer</Info>
                    </Right>
                </Top>
                <Middle>
                    {Highlights.map((item) => (
                        <FlexDiiv
                            onClick={() => {
                                setHighlightsModal(true);
                            }}
                        >
                            <ProfileDiv>
                                <img src={item.image} alt="Profile" />
                            </ProfileDiv>
                            <NameDiv>
                                <ProfileName>{item.info}</ProfileName>
                            </NameDiv>
                        </FlexDiiv>
                    ))}
                </Middle>
                <Bottom>
                    <Flex>
                        <Head
                            className={active ? "active" : ""}
                            onClick={() => {
                                setactive(true);
                                setSaved(false);
                                setTaged(false);
                            }}
                        >
                            Posts
                        </Head>
                        <Head
                            className={saved ? "active" : ""}
                            onClick={() => {
                                setSaved(true);
                                setactive(false);
                                setTaged(false);
                            }}
                        >
                            Saved
                        </Head>
                        <Head
                            className={taged ? "active" : ""}
                            onClick={() => {
                                setTaged(true);
                                setactive(false);
                                setSaved(false);
                            }}
                        >
                            Taged
                        </Head>
                    </Flex>
                    <MyPosts />
                </Bottom>
            </MainContainer>
        </>
    );
}

export default MyProfile;
const MainContainer = styled.div`
    width: 64%;
    margin: 0 auto;
    padding: 30px;
    position: absolute;
    right: 50px;
`;
const Top = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 90%;
    margin-bottom: 60px;
`;
const Left = styled.div`
    margin-right: 80px;
    img {
        display: block;
        width: 100%;
        border-radius: 50%;
    }
`;
const Right = styled.div``;
const Middle = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd5f0;
    padding-bottom: 40px;
`;
const Bottom = styled.div``;
const One = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Name = styled.p`
    font-size: 22px;
    margin-right: 20px;
`;
const Editprofile = styled.button`
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin-right: 20px;
    p {
        font-weight: 700;
    }
`;
const Settings = styled.div`
    width: 25px;
    img {
        display: block;
        width: 100%;
    }
`;
const Post = styled.div`
    margin-right: 45px;
`;
const UserName = styled.p`
    font-size: 14px;
    font-weight: 500;
`;
const Info = styled.p`
    font-size: 14px;
`;
const FlexDiiv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
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
    border: 3px solid #c7c7c7;
    border-radius: 50%;
    width: 75px;
    padding: 3px;
    margin-bottom: 15px;
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
const Head = styled(Link)`
    margin-right: 70px;
    padding-top: 10px;
    text-decoration: none;
    color: #000;
    &.active {
        border-top: 1px solid #000;
    }
`;
const Flex = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
