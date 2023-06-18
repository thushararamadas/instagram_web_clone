import React, { useContext, useState } from "react";
import styled from "styled-components";
import EmojiPicker from "emoji-picker-react";
import { Context } from "../../contexts/Store";

function MyPostHighliteModal() {
    const { postActive, clickedpost, post, dispatch } = useContext(Context);
    const [isEmoji, setEmoji] = useState(false);
    const [data, setData] = useState("");
    // console.log(clickedpost.comments, "LLLLLLLLLLLLLLLLL");
    const [comments, setComments] = useState([
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
    ]);
    const addNewComment = () => {
        clear();
        setComments([
            ...comments,
            {
                name: "thushararamadas",
                comment: data,
                profile_img: require("../../../assets/nikhilp.jpg"),
                date: "now",
            },
        ]);
        // dispatch({
        //     type: "ADD_COMMENT",
        //     action: post.comments([
        //         {
        //             name: "thushararamadas",
        //             comment: data,
        //             profile_img: require("../../../assets/nikhilp.jpg"),
        //             date: "now",
        //         },
        //     ]),
        // });
    };
    const clear = () => {
        setData("");
    };
    return (
        <>
            {postActive && (
                <>
                    <MainContainer>
                        <Close
                            onClick={() => {
                                dispatch({
                                    type: "ACTIVE_POST",
                                    postActive: false,
                                });
                            }}
                        >
                            {" "}
                            <img
                                src={
                                    require("../../../assets/close.svg").default
                                }
                                alt="Close"
                            />
                        </Close>
                        <PostContainer>
                            <Left>
                                <img src={clickedpost.image} alt="Image" />
                            </Left>
                            <Right>
                                <TopProfile>
                                    <ProfileImg>
                                        <img
                                            src={require("../../../assets/mypro.jpg")}
                                            alt="Image"
                                        />
                                    </ProfileImg>
                                    <Name>
                                        thushararamadas
                                        <Data>Kannur</Data>
                                    </Name>
                                </TopProfile>
                                <TopDiv>
                                    <CaptionDiv>
                                        <ProfileImg>
                                            <img
                                                src={require("../../../assets/mypro.jpg")}
                                                alt="Image"
                                            />
                                        </ProfileImg>
                                        <Name>
                                            thushararamadas
                                            <Data>24w</Data>
                                        </Name>
                                        <Caption>🧑‍🎄..</Caption>
                                    </CaptionDiv>
                                    {comments.map((item) => (
                                        <CommentsDiv>
                                            <ProfileImg>
                                                <img
                                                    src={item.profile_img}
                                                    alt="Image"
                                                />
                                            </ProfileImg>
                                            <Name>
                                                {item.name}
                                                <Data>{item.date}</Data>
                                            </Name>
                                            <Caption>{item.comment}</Caption>
                                        </CommentsDiv>
                                    ))}
                                </TopDiv>

                                <AddComment>
                                    <EmojiDiv>
                                        <Emoji
                                            onClick={() => {
                                                setEmoji(!isEmoji);
                                            }}
                                        >
                                            <img
                                                src={require("../../../assets/smile.png")}
                                                alt="Emoji"
                                            />
                                            {isEmoji ? <EmojiPicker /> : ""}
                                        </Emoji>
                                        <input
                                            type="text"
                                            placeholder="Add a comment..."
                                            onChange={(e) => {
                                                setData(e.target.value);
                                            }}
                                        />
                                    </EmojiDiv>
                                    <PostClick
                                        onClick={() => {
                                            addNewComment();
                                        }}
                                    >
                                        Post
                                    </PostClick>
                                </AddComment>
                            </Right>
                        </PostContainer>
                    </MainContainer>
                </>
            )}
        </>
    );
}

export default MyPostHighliteModal;
const MainContainer = styled.div`
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
`;
const PostContainer = styled.div`
    background-color: #fff;
    width: 80%;
    height: 710px;
    margin: 20px auto;
    border-radius: 5px;
    display: flex;
`;
const Left = styled.div`
    width: 68.5%;
    img {
        display: block;
        width: 100%;
    }
`;
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TopProfile = styled.div`
    display: flex;
    border-bottom: 1px solid #efefef;
    padding: 20px;
`;
const ProfileImg = styled.div`
    width: 35px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
        border-radius: 50%;
    }
`;
const Name = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-right: 5px;
`;
const Data = styled.p`
    font-size: 12px;
`;
const CaptionDiv = styled.div`
    display: flex;
    padding: 20px;
`;
const Caption = styled.p``;
const CommentsDiv = styled.div`
    display: flex;
    padding: 20px;
`;
const AddComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 1px solid #efefef;
    input {
        outline: none;
        border: none;
        ::placeholder {
            font-size: 15px;
        }
    }
`;
const Emoji = styled.div`
    width: 25px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
    }
`;
const TopDiv = styled.div`
    border-bottom: 1px solid #efefef;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const EmojiDiv = styled.div`
    display: flex;
`;
const PostClick = styled.div`
    cursor: pointer;
`;
const Close = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    width: 25px;
    filter: invert(1);
    img {
        display: block;
        width: 100%;
    }
`;
