const incNumber = () => {
    return {
        type: "INC_NUMBER",
    };
};

const decNumber = () => {
    return {
        type: "DEC_NUMBER",
    }
}

const nameChanged = (name) => {
    return {

        name: name,
        type: "NAME_CHANGED"
    }
}



const emailChanged = (email) => {
    console.log(email);

    return {
        email: email,
        type: "EMAIL_CHANGED"
    }
}
export { incNumber, decNumber, nameChanged, emailChanged };