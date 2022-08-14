const initialState = {
    loggedIn: false,
    token:''
    



}

const Authreducer = (state = initialState, action) => {
    console.log("from action",action.payload)
    switch (action.type) {
        case 'login':
            return {
                ...state,
                loggedIn: true,
                token: action.payload,
                
                
            }
        case 'logout':
            return {
                ...state,
                loggedIn: false,
                token: '',
            }
        default:
            return state
    }
}
export default Authreducer