//initialState///
const initState = {
    popups: {
        profile_popup: false
    }

}

///rootReducer///
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "OPEN_PROFILE_POPUP":
            return {
                profile_popup: true
            }
        case "CLOSE_PROFILE_POPUP":
            return {
                profile_popup: false
            }
        
        default: 
            return state
    } 
}
    
    

export default rootReducer