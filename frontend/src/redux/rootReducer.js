//initialState///
const initState = {
    test: 'jkbjkbkk'

}

///rootReducer///
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE_TEST":
            return {
                test: 'kkkk'
            }
        
        default: 
            return state
    } 
}
    
    

export default rootReducer