import React, { createContext, useReducer, useState } from "react";
import Reducer from "./Reducer";
const post = [
    {
        id: 1,
        image: require("../../assets/post4.jpeg"),
        like: require("../../assets/liked.png"),
        cmnt: require("../../assets/chatt.png"),
        comments: [
            {
                id: 1,
                name: "Nikhil_p",
                comment: "I love you...",
                profile_img: require("../../assets/nikhilp.jpg"),
                date: "24w",
            },
            {
                id: 2,
                name: "junior_moosa",
                comment: "Heppi❤️",
                profile_img: require("../../assets/moosa.jpg"),
                date: "24w",
            },
            {
                id: 3,
                name: "Nikhil_p",
                comment: "I love you...",
                profile_img: require("../../assets/nikhilp.jpg"),
                date: "24w",
            },
            {
                id: 4,
                name: "Nikhil_p",
                comment: "I love you...",
                profile_img: require("../../assets/nikhilp.jpg"),
                date: "24w",
            },
            {
                id: 5,
                name: "Nikhil_p",
                comment: "I love you...",
                profile_img: require("../../assets/nikhilp.jpg"),
                date: "24w",
            },
            {
                id: 6,
                name: "junior_moosa",
                comment: "Heppi❤️",
                profile_img: require("../../assets/moosa.jpg"),
                date: "24w",
            },
            {
                id: 7,
                name: "junior_moosa",
                comment: "Heppi❤️",
                profile_img: require("../../assets/moosa.jpg"),
                date: "24w",
            },
        ],
    },
    {
        id: 2,
        image: require("../../assets/post2.jpeg"),
        like: require("../../assets/liked.png"),
        cmnt: require("../../assets/chatt.png"),
        comments: [
            {
                id: 1,
                name: "Nikhil_p",
                comment: "powliii",
                profile_img: require("../../assets/nikhilp.jpg"),
                date: "24w",
            },
            {
                id: 2,
                name: "junior_moosa",
                comment: "❤️",
                profile_img: require("../../assets/moosa.jpg"),
                date: "24w",
            },
        ],
    },
];
export const initialstate = {
    isStoryModal: false,
    clickedStori: 1,
    postActive: false,
    clickedpost: 0,
    post: post,
    user_data: {
        is_verified: false,
        access_token: "",
    },
};
const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialstate);
    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {children}
        </Context.Provider>
    );
};
export const Context = createContext(initialstate);
export default Store;
