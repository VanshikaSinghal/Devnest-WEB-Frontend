const initialState = { name: "", email: "" }

const userDataReducer = (state = initialState, action) => {
    console.log(state, action);
    if (action.type === "EMAIL_CHANGED")
        return { ...state, email: action.email };
    if (action.type === 'NAME_CHANGED')
        return { ...state, name: action.name };
    return state;
}

export default userDataReducer;
