import { initialstate } from "./Store";

const Reducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            const user_data = { ...state.user_data, ...action.user_data };
            localStorage.setItem("user", JSON.stringify(user_data));
            console.log(user_data, "in reducer");
            return {
                ...state,
                user_data: action.user_data,
            };

        case "STORY_MODAL":
            return {
                ...state,
                isStoryModal: action.isStoryModal,
                clickedStori: action.clickedStori,
            };
        case "CHANGE_STORY":
            return {
                ...state,
                clickedStori: action.clickedStori + 1,
            };
        case "ACTIVE_POST":
            return {
                ...state,
                postActive: action.postActive,
                clickedpost: action.clickedpost,
            };
        case "ADD_COMMENT":
            return {
                ...state,
                post: action.post,
            };
        case "LOGOUT":
            localStorage.clear();
            return initialstate;

        default:
            return state;
    }
};

export default Reducer;
