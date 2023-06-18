import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import styled from "styled-components";

function Posts() {
    const [isLiked, setLiked] = useState(false);
    const [isEmoji, setEmoji] = useState(false);
    return (
        <>
            <MainContainer>
                <PostContainer>
                    <TopContainer>
                        <ProfilePhotoContainer>
                            <ProfilePhoto>
                                <img
                                    src={require("../../assets/chi.jpg")}
                                    alt="Image"
                                />
                            </ProfilePhoto>
                            <NameContainer>
                                <Name>kschitra</Name>
                                <Place>Chennai,India</Place>
                            </NameContainer>
                        </ProfilePhotoContainer>
                    </TopContainer>
                    <MiddleContainer>
                        <img
                            src={require("../../assets/chitra.jpg")}
                            alt="Image"
                        />
                    </MiddleContainer>
                    <BottomContainer>
                        <LeftBootom>
                            <Like
                                onClick={() => {
                                    setLiked(!isLiked);
                                }}
                            >
                                {isLiked ? (
                                    <img
                                        src={require("../../assets/love.png")}
                                        alt="Like"
                                    />
                                ) : (
                                    <Save>
                                        <img
                                            src={require("../../assets/liked.png")}
                                            alt="Liked"
                                        />
                                    </Save>
                                )}

                                {/* <Save
                                    className={isLiked ? "active" : ""}
                                ></Save> */}
                            </Like>
                            <Like>
                                <img
                                    src={require("../../assets/comment.png")}
                                    alt="Comment"
                                />
                            </Like>
                            <Like>
                                <img
                                    src={require("../../assets/send.png")}
                                    alt="Share"
                                />
                            </Like>
                        </LeftBootom>
                        <Like>
                            <img
                                src={require("../../assets/ribbon.png")}
                                alt="Save"
                            />
                        </Like>
                    </BottomContainer>
                    <CommentContainer>
                        <Likes>29 likes</Likes>
                        <FirstComment>
                            <span>kschitra</span> awosome day.... #day#love##
                        </FirstComment>
                        <ViewAll>View all 11,954 comments</ViewAll>
                        <AddComment>
                            <input type="text" placeholder="Add a comment..." />
                            <Emoji
                                onClick={() => {
                                    setEmoji(!isEmoji);
                                }}
                            >
                                <img
                                    src={require("../../assets/smile.png")}
                                    alt="Emoji"
                                />
                                {isEmoji ? <EmojiPicker /> : ""}
                            </Emoji>
                        </AddComment>
                    </CommentContainer>
                </PostContainer>
            </MainContainer>
        </>
    );
}

export default Posts;
const MainContainer = styled.div`
    /* margin: 20px auto; */
    /* width: 90%; */
    /* background-color: aliceblue; */
`;
const PostContainer = styled.div`
    margin: 0 auto;
    width: 55%;
`;
const TopContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const ProfilePhotoContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProfilePhoto = styled.div`
    width: 40px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
        border-radius: 50%;
    }
`;

const NameContainer = styled.div``;
const Name = styled.p``;
const Place = styled.p``;
const MiddleContainer = styled.div`
    width: 450px;
    img {
        display: flex;
        width: 100%;
        border-radius: 3px;
    }
`;
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 5px;
`;
const LeftBootom = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: space-between;
`;
const Like = styled.div`
    width: 25px;
    /* display: block; */
    img {
        display: block;
        width: 100%;
        cursor: pointer;
    }
`;
const Comment = styled.div``;
const Share = styled.div``;
const Save = styled.div`
    width: 25px;
    img {
        display: block;
        width: 100%;
    }
`;
const CommentContainer = styled.div``;
const Likes = styled.p``;
const FirstComment = styled.p`
    span {
        font-size: 14px;
        font-weight: 500;
    }
`;
const ViewAll = styled.p`
    margin-top: 10px;
    color: #989898;
    font-size: 14px;
`;
const AddComment = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    border-bottom: 1px solid #989898;
    padding-bottom: 25px;
    input {
        outline: none;
        border: none;
        ::placeholder {
            font-size: 15px;
        }
    }
`;
const Emoji = styled.div`
    width: 15px;
    img {
        display: block;
        width: 100%;
    }
`;
