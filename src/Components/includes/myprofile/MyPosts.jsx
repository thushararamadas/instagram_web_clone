import React, { useContext, useState } from "react";
import styled from "styled-components";
import storieList from "../../../assets/js/storieList";
import MyPostHighliteModal from "../modals/MyPostHighliteModal";
import { Context } from "../../contexts/Store";

function MyPosts() {
    const { dispatch } = useContext(Context);
    const [item, setItem] = useState(0);
    const [post, setPost] = useState([
        {
            id: 1,
            image: require("../../../assets/post4.jpeg"),
            like: require("../../../assets/liked.png"),
            cmnt: require("../../../assets/chatt.png"),
            comments: [
                {
                    id: 1,
                    name: "Nikhil_p",
                    comment: "I love you...",
                    profile_img: require("../../../assets/nikhilp.jpg"),
                    date: "24w",
                },
                {
                    id: 2,
                    name: "junior_moosa",
                    comment: "Heppi❤️",
                    profile_img: require("../../../assets/moosa.jpg"),
                    date: "24w",
                },
                {
                    id: 3,
                    name: "Nikhil_p",
                    comment: "I love you...",
                    profile_img: require("../../../assets/nikhilp.jpg"),
                    date: "24w",
                },
                {
                    id: 4,
                    name: "Nikhil_p",
                    comment: "I love you...",
                    profile_img: require("../../../assets/nikhilp.jpg"),
                    date: "24w",
                },
                {
                    id: 5,
                    name: "Nikhil_p",
                    comment: "I love you...",
                    profile_img: require("../../../assets/nikhilp.jpg"),
                    date: "24w",
                },
                {
                    id: 6,
                    name: "junior_moosa",
                    comment: "Heppi❤️",
                    profile_img: require("../../../assets/moosa.jpg"),
                    date: "24w",
                },
                {
                    id: 7,
                    name: "junior_moosa",
                    comment: "Heppi❤️",
                    profile_img: require("../../../assets/moosa.jpg"),
                    date: "24w",
                },
            ],
        },
        {
            id: 2,
            image: require("../../../assets/post2.jpeg"),
            like: require("../../../assets/liked.png"),
            cmnt: require("../../../assets/chatt.png"),
            comments: [
                {
                    id: 1,
                    name: "Nikhil_p",
                    comment: "powliii",
                    profile_img: require("../../../assets/nikhilp.jpg"),
                    date: "24w",
                },
                {
                    id: 2,
                    name: "junior_moosa",
                    comment: "❤️",
                    profile_img: require("../../../assets/moosa.jpg"),
                    date: "24w",
                },
            ],
        },
        // {
        //     id: 3,
        //     image: require("../../../assets/post4.jpeg"),
        //     like: require("../../../assets/liked.png"),
        //     cmnt: require("../../../assets/chatt.png"),
        // },
        // {
        //     id: 4,
        //     image: require("../../../assets/post2.jpeg"),
        //     like: require("../../../assets/liked.png"),
        //     cmnt: require("../../../assets/chatt.png"),
        // },
    ]);
    console.log(item, "posttttttttttt");
    return (
        <>
            <MainContainer>
                <Container>
                    {post.map((item) => (
                        <>
                            <PostContainer
                                key={item.id}
                                onClick={() => {
                                    setItem(item.id);
                                    dispatch({
                                        type: "ACTIVE_POST",
                                        postActive: true,
                                        clickedpost: item,
                                    });
                                }}
                            >
                                <img src={item.image} alt="Image" />
                                <HoverDiv>
                                    <Hoverlike>
                                        <img src={item.like} alt="Like" />
                                        <p>114</p>
                                    </Hoverlike>
                                    <Hovercmnt>
                                        <img src={item.cmnt} alt="Like" />
                                        <p>14</p>
                                    </Hovercmnt>
                                </HoverDiv>
                            </PostContainer>
                        </>
                    ))}
                </Container>
            </MainContainer>
        </>
    );
}

export default MyPosts;
const MainContainer = styled.div``;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7px;
`;
const HoverDiv = styled.div`
    display: none;
`;
const PostContainer = styled.div`
    width: 320px;
    height: 320px;
    position: relative;
    img {
        display: block;
        width: 100%;
    }
    :hover {
        opacity: 0.6;
        ${HoverDiv} {
            display: block;
        }
    }
`;

const Hoverlike = styled.div`
    display: flex;
    width: 20px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 30%;
    filter: invert(0);
    img {
        display: block;
        width: 100%;
        margin-right: 5px;
    }
    p {
        color: #fff;
        font-weight: 700;
    }
`;
const Hovercmnt = styled.div`
    display: flex;
    width: 20px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 55%;
    img {
        display: block;
        width: 100%;
        margin-right: 5px;
        filter: invert(1);
    }
    p {
        color: #fff;
        font-weight: 700;
    }
`;
