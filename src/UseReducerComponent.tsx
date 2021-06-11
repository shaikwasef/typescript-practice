import { useReducer } from "react";

const initialState = {
    counter : 100 ,
}

type ACTIONTYPES = {type : "increment" ; payload : number ;}
| {type : "decrement" ; payload : number } ;


function counterReducer(state : typeof initialState , action : ACTIONTYPES) {
    switch(action.type) {
        case "increment" : 
            return {
                ...state ,
                counter : state.counter + action.payload ,
            }
        case "decrement" :
            return {
                ...state ,
                counter : state.counter - action.payload,
            };
        default :
           throw new Error("bad action");
    }
}

export default function UseReducerComponent() {
    const [state , dispatch] = useReducer(counterReducer,initialState);

    return (
        <div>
            <div>
                {state.counter}
            </div>
            <button onClick = {() => {
                dispatch({
                    type : "increment",
                    payload : 100
                })
            }}>
                +
            </button>
            <button onClick = {() => {
                dispatch({
                    type : "decrement",
                    payload : 100
                })
            }}>
                -
            </button>

        </div>
    )
}