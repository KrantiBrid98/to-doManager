const INITIAL_STATE = {
    userName: null,
    userId: null,
    isSignedIn: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN': return {
            ...state, userName: action.payload.userName, userId: action.payload.userId, isSignedIn: true
        }
        case 'SIGN_OUT': return {
            ...state, isSignedIn: false
        }

        default: return state;
    }
}