const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// types
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAME = 'BUY_ICECREAME'

// actions
function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

function buyIceCream(){
    return {
        type : BUY_ICECREAME
    }
}

//state
const cakeState = {
    numOfCake : 10,
}

const iceCreamState = {
    numOfIceCream : 20
}

// Reducers
const cakeReducer = (state=cakeState, action) => {
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,
                numOfCake : state.numOfCake -1
            }
        default :
            return state
    }
}

const iceCreamReducer = (state=iceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAME :
            return {
                ...state,
                numOfIceCream : state.numOfIceCream -1
            }
        default :
            return state
    }
}

//store
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {} )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

