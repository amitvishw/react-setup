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
        case "SHIT":
            console.log("Oh! Shit")
            break
        case "MEH":
            console.log("Meh! Meh!")
            break
        default:
            console.log("Mom! pick me up", action.type)
    }
    return newState
}

const subReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case "SUB":
            newState.number -= action.delta
            break
        case "SHIT":
            console.log("Oh! Shit here we go again")
            break
        default:
            console.log("Dad! pick me up", action.type)
    }
    return newState
}

const reducer = combineReducers({addReducer, subReducer})

console.log(reducer)

const store = createStore(reducer)

console.log(store)

store.subscribe(() => {
    console.log("State changes:", JSON.stringify(store.getState()) )
})

store.dispatch({type: "I'm scared", delta : 10})
store.dispatch({type: "SHIT", delta : 10})
store.dispatch({type: "MEH", delta : 10})
store.dispatch({type: "SUB", delta : 10})


// Output:
// Mom! pick me up @@redux/INIT0.b.u.p.6.r
// Mom! pick me up @@redux/PROBE_UNKNOWN_ACTIONi.u.h.g.a
// Dad! pick me up @@redux/INIT0.b.u.p.6.r
// Dad! pick me up @@redux/PROBE_UNKNOWN_ACTIONn.j.e.o.v
// [Function: combination]
// Mom! pick me up @@redux/INIT0.b.u.p.6.r
// Dad! pick me up @@redux/INIT0.b.u.p.6.r
// {
//   dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer],
//   [Symbol(observable)]: [Function: observable]
// }
// Mom! pick me up I'm scared
// Dad! pick me up I'm scared
// State changes: {"addReducer":{"number":0},"subReducer":{"number":0}}
// Oh! Shit
// Oh! Shit here we go again
// State changes: {"addReducer":{"number":0},"subReducer":{"number":0}}
// Meh! Meh!
// Dad! pick me up MEH
// State changes: {"addReducer":{"number":0},"subReducer":{"number":0}}
// Mom! pick me up SUB
// State changes: {"addReducer":{"number":0},"subReducer":{"number":-10}}




// What happend ?
// The redux do not bind any action to a reducer insted is calls every reducer provided to the store
// Hance is ends up calling all the default or matched cases 
// Uses return in switch
// Remove default case
// Make sure actions are unique
// Unless one action has to update two or more diffrent states under diffrent reducers 