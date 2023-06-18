import React from "react";
import styled from "styled-components";

function MoreModal({ setModal, isModal }) {
    return (
        setModal && (
            <>
                <Maincontainer>
                    <IconsDiv>
                        <ScreenName>Settings</ScreenName>
                    </IconsDiv>
                </Maincontainer>
            </>
        )
    );
}

export default MoreModal;
const Maincontainer = styled.div`
    position: absolute;
    bottom: 60px;
    left: 30px;
    z-index: 1;
    height: 50px;
    width: 15%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const IconsDiv = styled.div`
    text-decoration: none;
    padding: 20px 30px;
    width: 35%;
    margin: 0 auto;
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
const ScreenName = styled.p`
    color: #000;
`;
