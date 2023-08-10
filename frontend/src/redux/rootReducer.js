//initialState///
const initState = {
    user: null,
    popups: {
        profile_popup: false,
        cashier_popup: false
    },
    cashier_selected: ['selected', null, null, null, null],
    cashier_popup_component: 'deposit'
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
        case "CASHIER_ACCOUNT":
            return {
                ...state,
                cashier_popup_component: 'account',
                cashier_selected: [null, ,null, 'selected', null, null]
            }

        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        
        default: 
            return state
    } 
}
    
    

export default rootReducer