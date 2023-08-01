//initialState///
const initState = {
    popups: {
        profile_popup: false,
        cashier_popup: false
    }
}

///rootReducer///
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "OPEN_PROFILE_POPUP":
            return {
                ...state,
                profile_popup: true
            }
        case "CLOSE_PROFILE_POPUP":
            return {
                ...state,
                profile_popup: false
            }
        case "OPEN_CASHIER_POPUP":
            return {
                ...state,
                cashier_popup: true
            }
        case "CLOSE_CASHIER_POPUP":
            return {
                ...state,
                cashier_popup: false
            }
        
        default: 
            return state
    } 
}
    
    

export default rootReducer