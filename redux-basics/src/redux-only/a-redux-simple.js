const { createStore } = require("redux")

initialState = {
    number : 0
}

//Takes current state and return next state then the next state is created/updated in the store
const reducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case "ADD":
            newState.number += action.delta
            break
        case "SUB":
            newState.number -= action.delta
            break
    }
    return newState
}

/**
 * To create store reducer is needed 
 * or 
 * Exception: Expected the reducer to be a function.
 */
const store = createStore(reducer)


/**
 * This is what store has
 * {
 *      dispatch: [Function: dispatch],
 *      subscribe: [Function: subscribe],
 *      getState: [Function: getState],
 *      replaceReducer: [Function: replaceReducer],
 *      [Symbol(observable)]: [Function: observable]
 * }    
 */

console.log(store)

//Anything changes in the store this function is called
store.subscribe(() => {
    console.log("State changes:", JSON.stringify(store.getState()) )
})

//Creating and action and dispatch it and now its redux job 
//to find the reducer call it with its state and the action object
//Object {type: "ADD", delta : 10} is recived by reducer in action param
store.dispatch({type: "ADD", delta : 10})
store.dispatch({type: "ADD", delta : 10})
store.dispatch({type: "SUB", delta : 5})
