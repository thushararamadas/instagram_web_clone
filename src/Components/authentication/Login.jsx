import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../contexts/Store";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [passWord, setPassword] = useState("");
    const { user_data, dispatch } = useContext(Context);
    const navigate = useNavigate();
    // const [searchParams] = useSearchParams();
    // const nextpath = searchParams.get("next") ? searchParams.get("next") : "/";
    const handleClick = () => {
        axios
            .post(`https://traveller.talrop.works/api/v1/auth/token/`, {
                username: email,
                password: passWord,
            })
            .then((response) => {
                const access_token = response.data.access;
                dispatch({
                    type: "USER_LOGIN",
                    user_data: {
                        is_verified: true,
                        access_token: access_token,
                    },
                });
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <MainContainer>
                <Container>
                    <Top>
                        <img
                            src={
                                require("../../assets/instagram-wordmark.svg")
                                    .default
                            }
                            alt=""
                        />
                    </Top>
                    <Bottom>
                        <input
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={passWord}
                            type="password"
                        />
                        {/* <p>Show</p> */}
                        <Button onClick={handleClick}>Log in</Button>
                        <HR>
                            <hr /> <p>OR</p>
                            <hr />
                        </HR>
                        <FaceBook>Login with Facebook</FaceBook>
                    </Bottom>
                </Container>
            </MainContainer>
        </>
    );
}

export default Login;
const MainContainer = styled.div`
    background-color: #ffff;
    height: 100vh;
    width: 100%;
`;
const Container = styled.div`
    height: 400px;
    width: 20%;
    border: 1px solid #dbdbdb;
    margin: 60px auto;
    padding: 30px;
    align-items: center;
`;
const Top = styled.div`
    width: 200px;
    margin: 24px auto;
    img {
        display: block;
        width: 100%;
    }
`;
const Bottom = styled.div`
    position: relative;

    input {
        width: 75%;
        padding: 12px 20px;
        background-color: #fafafa;
        border: 1px solid #dbdbdb;
        margin: 10px 20px 5px 20px;
        ::placeholder {
            font-size: 12px;
        }
    }
`;
const HR = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
    hr {
        width: 40%;
        height: 0px;
    }
    p {
        font-size: 12px;
        cursor: pointer;
    }
`;
const Button = styled.button`
    background: rgb(76 181 249);
    border: none;
    width: 88%;
    margin: 10px 20px 5px 20px;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
`;
const FaceBook = styled.div`
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    color: blue;
`;
