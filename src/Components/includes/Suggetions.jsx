import React from "react";
import styled from "styled-components";

function Suggetions() {
    const suggetios = [
        {
            profileimg: require("../../assets/6.jpg"),
            name: "goutham_cr",
            mutual: "Followed by nikil_p +12 more",
        },
        {
            profileimg: require("../../assets/7.jpg"),
            name: "albin_royson",
            mutual: "Followed by nikil_p +12 more",
        },
        {
            profileimg: require("../../assets/4.jpg"),
            name: "manikyannmnm",
            mutual: "Followed by harieradath +12 more",
        },
    ];
    return (
        <>
            <MainContaner>
                <SuggetionDiv>
                    <Text>Suggested for you</Text>
                    <Text>See All </Text>
                </SuggetionDiv>
                {suggetios.map((item) => (
                    <>
                        <Container>
                            <Left>
                                <ProfileImg>
                                    <img src={item.profileimg} alt="Image" />
                                </ProfileImg>
                                <NameDiv>
                                    <Username>{item.name}</Username>
                                    <Name>{item.mutual}</Name>
                                </NameDiv>
                            </Left>
                            <Right>Follow</Right>
                        </Container>
                    </>
                ))}
            </MainContaner>
        </>
    );
}

export default Suggetions;
const MainContaner = styled.div`
    padding: 0px 25px;
`;
const SuggetionDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Text = styled.div`
    font-size: 14px;
    color: #656565;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0px;
    }
`;
const ProfileImg = styled.div`
    width: 40px;
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
    font-size: 12px;
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
