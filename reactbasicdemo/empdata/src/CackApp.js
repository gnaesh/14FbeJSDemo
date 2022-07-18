const redux = require("redux");
const reduxLogger =require ("redux-logger");
const { act } = require("react-dom/test-utils");
const createStore =redux.createStore;
const combineReducer= redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger=reduxLogger.createLogger();

//------------- define action name -----------
const BUY_CAKE=" BUY_CAKE";
const BUY_ICECREM ="BUY_ICECREM ";
const BAKE_CAKE = "BAKE_CAKE"
const BAKE_ICECREAM = "BAKE_ICECREAM"

//------------ INISTIAL STATE ------------
const initialState={
    noOfCakes:20,
    noOfIcecrem:50
}

//----------------- action creatro -----------------
function buycake(){
    return{
        type:BUY_CAKE,
        payload:"cake was purchased"
    }
}
function buyIceCream(){
    return{
        type:BUY_ICECREM,
        payload:"icerem was purchased"
    }
}

//----------- crete reduce ------------------
const cakeReuce =(state=initialState, action)=>
{
switch(action.type)
{
    case BUY_CAKE:
        return{...state,noOfCakes:state.noOfCakes-1}
default:return state;
    }
}

const iceCreamReduce =(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_ICECREM:
            return{...state,noOfIcecrem:state.noOfIcecrem-1
            }
            default:return state;

    }
}
//----------------- compibine reducer ---------------
const rootReducer=combineReducer({cake:cakeReuce,iceCreamReduce});
//---------------crete store -----------
const store = createStore(rootReducer, applyMiddleware(logger));
//------------- dispatch action -----------
console.log("inistial State :"+store.getState());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
