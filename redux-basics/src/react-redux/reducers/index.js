import {combineReducers} from "redux"

const clickReducer = (state = {}, action) => {
    console.log("clickReducer:action", action )
    switch(action.type) {
        case "CLICK":
            console.log("clickReducer CLICK case")
            return {
                clickCount : action.clickCount,
                text : action.text
            }
        default:
            console.log("clickReducer default case")
            return {}
    }
}

//no action is bind the action is passed to every single Reducer in the app thats
const otherReducer = (state = {}, action) => {
    switch(action.type) {
        case "CLICK":
            console.log("otherReducer CLICK case")
            return {}
        default:
            console.log("otherReducer default case")
            return {}
    }
}



const rootReducer = combineReducers({
    clickReducer,
    otherReducer
});

/**
 * // Reducers are the key in the store
 * store = {
 *  clickReducer : {
 *     clickCount : 12,
 *     text : "meh!"
 *  }
 * }
 */

export default rootReducer
