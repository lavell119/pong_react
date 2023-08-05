//initialState///
const initState = {
    popups: {
        profile_popup: false,
        cashier_popup: false
    },
    cashier_selected: ['selected', null, null, null, null],
    cashier_popup_component: 'empty'
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

        case "CASHIER_DEPOSIT":
            return {
                ...state,
                cashier_popup_component: 'deposit',
                cashier_selected: ['selected', null, null, null, null]
            }
        case "CASHIER_DEPOSIT2":
            return {
                ...state,
                cashier_popup_component: 'deposit2',

            }
        case "CASHIER_PAYOUT":
            return {
                ...state,
                cashier_popup_component: 'payout',
                cashier_selected: [null, 'selected', null, null, null]
                }
        
        
        default: 
            return state
    } 
}
    
    

export default rootReducer