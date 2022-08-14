const initialState = {
    loggedIn: false,
    



}

const Authreducer = (state = initialState, action) => {
    console.log("from action",action.payload)
    switch (action.type) {
        case 'login':
            return {
                ...state,
                loggedIn: true,
                
                
            }
        case 'logout':
            return {
                ...state,
                loggedIn: false,
            }
        default:
            return state
    }
}
export default Authreducer