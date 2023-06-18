import React from "react";
import styled from "styled-components";
import Suggetions from "./Suggetions";
import { Link } from "react-router-dom";

function AccountDetails() {
    return (
        <>
            <Container to="profile">
                <Left>
                    <ProfileImg>
                        <img
                            src={require("../../assets/mypro.jpg")}
                            alt="Image"
                        />
                    </ProfileImg>
                    <NameDiv>
                        <Username>thushararamadas</Username>
                        <Name>Thushara Ramadas</Name>
                    </NameDiv>
                </Left>
                <Right>Switch</Right>
            </Container>
            <Suggetions />
        </>
    );
}

export default AccountDetails;
const Container = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
`;
const ProfileImg = styled.div`
    width: 55px;
    margin-right: 10px;
    img {
        border-radius: 50%;
        display: block;
        width: 100%;
    }
`;
const Username = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 500;
`;
const Name = styled.div`
    color: #656565;
    font-size: 14px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    color: #1aa0f7;
    font-size: 14px;
`;
const NameDiv = styled.div``;
