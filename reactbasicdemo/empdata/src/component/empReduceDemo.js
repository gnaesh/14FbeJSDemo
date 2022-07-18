const redux=require("redux");
const reduxLogger=require("redux-logger");;
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;
const  logger=reduxLogger.createLogger();
const thunkMiddleware=require("redux-thunk").default;
const axios =require ("axios");

//-------------define action name--------------
const FETCH_EMP_REQUEST="FETCH_EMP_REQUEST";
const FETCH_EMP_SUCCESS="FETCH_EMP_SUCCESS";
const FETCH_EMP_FAILURE="FETCH_EMP_FAILUR";

//-------------initial state------------------
const initialState=
{
    loading:false,
    emps:[],
    error:""
}
//-----------------action creators-----------
function fetchEmpRequest(isLoaded)
{
    return{
            type:FETCH_EMP_REQUEST,
            payload:isLoaded
    }
}
function fetchEmpSuccess(emps)
{
    return{
            type:FETCH_EMP_SUCCESS,
            payload:emps
    }
}
function fetchEmpFailure(empEmpReadError)
{
    return{
            type:FETCH_EMP_FAILURE,
            payload:empEmpReadError
    }
}
//---------------create reducter-------------
const  empFetchReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
            case FETCH_EMP_REQUEST:
               return {...state,loading:action.payload}
            case FETCH_EMP_SUCCESS:
                return {...state,emps:action.payload}
            case FETCH_EMP_FAILURE:
                return {...state,error:action.payload}
            default: return state;
    }
}

//---------------------
function fetchEmp()
{
    return (dispatch) =>   {
                axios.get("http://localhost:3000/emps").
                then((empRes)=>{dispatch(fetchEmpSuccess(empRes.data))})
                .catch((empError)=>{dispatch(fetchEmpFailure(" Errpe while fetch emp"))})

    }
}
//------------------create store------------
const store=createStore(empFetchReducer,applyMiddleware(logger,thunkMiddleware));
//------------------dispatch actions------------
console.log(" INitial State  :"+store.getState());
store.dispatch(fetchEmp());