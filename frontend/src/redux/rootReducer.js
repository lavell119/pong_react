//initialState///
const initState = {
    

}

///rootReducer///
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "CHANGE_CARD_DISPLAY":
            return {
                ...state,
                displayCard: action.payload
            }
        case "SUMMON_CARD":
            return {
                ...state,
                monsters: [...state.monsters, action.payload]
            }
        default: 
            return state
    } 
}
    
    

export default rootReducer