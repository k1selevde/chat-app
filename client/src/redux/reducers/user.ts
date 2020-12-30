const initialState = {
    data: null,
    token: window.localStorage.token,
    isAuth: Boolean(window.localStorage.token)
}


type InitialStateType = typeof initialState;

export default (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: action.payload,
                isAuth: true,
                token: window.localStorage.token
            }
        default:
            return state
    }
}