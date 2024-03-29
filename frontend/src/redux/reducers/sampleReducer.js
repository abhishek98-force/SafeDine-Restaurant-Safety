import * as actions from "../actions/actionTypes"

const initialState ={};
const sampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_CURRENT_WEATHER_DATA: {
            return ({
                ...(action?.payload ?? {})
            })
        }
        default:
            return state
    }
}

export default sampleReducer