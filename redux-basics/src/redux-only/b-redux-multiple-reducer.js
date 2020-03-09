const { createStore, combineReducers } = require("redux")

initialState = {
    number : 0
}

const addReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case "ADD":
            newState.number += action.delta
            break
    }
    return newState
}

const subReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case "SUB":
            newState.number -= action.delta
            break
    }
    return newState
}

//combineReducers returns a function
//The reducers passed to combineReducers will become the key in the store
//To prevent this use only single reducer but that is not a good idea to put 
//all actions in a single reducer
const reducer = combineReducers({addReducer, subReducer})

console.log(reducer)

const store = createStore(reducer)

console.log(store)

store.subscribe(() => {
    console.log("State changes:", JSON.stringify(store.getState()) )
})

store.dispatch({type: "ADD", delta : 10})
store.dispatch({type: "ADD", delta : 10})
store.dispatch({type: "SUB", delta : 5})

