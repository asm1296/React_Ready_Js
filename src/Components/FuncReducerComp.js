import React, {useReducer} from 'react';

let initialState = {
    firstCounter : 0,
    secondCounter : 10
}

let vehicleCounter = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'incrementFirst':
            return {...state, firstCounter:state.firstCounter + action.value}
        case 'decrementFirst':
            return {...state, firstCounter:state.firstCounter - action.value}
        case 'incrementSecond':
            return {...state, secondCounter:state.secondCounter + action.value}
        case 'decrementSecond':
            return {...state, secondCounter:state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

const FuncReducerComp = () =>{
   const [countObj,dispatch] =  useReducer(reducer, initialState);
   const [vehicleCountObj,dispatchVeh] =  useReducer(reducer, vehicleCounter);

   return(
       <div>
           <h3>first Count - {countObj.firstCounter}</h3>
           <h3>second Count - {countObj.secondCounter}</h3>
           <button onClick={()=>{dispatch({type:'incrementFirst', value:1})}}>Increment First</button>
           <button onClick={()=>{dispatch({type:'decrementFirst', value:1})}}>Decrement First</button>
           <button onClick={()=>{dispatch({type:'incrementSecond', value:1})}}>Increment Second</button>
           <button onClick={()=>{dispatch({type:'decrementSecond', value:1})}}>Decrement Second</button>
           <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
           <h3>Towards Ahemdabad Vehicle Count - {vehicleCountObj.firstCounter}</h3>
           <h3>Towards Mumbai Vehicle Count - {vehicleCountObj.secondCounter}</h3>
           <button onClick={()=>{dispatchVeh({type:'incrementFirst', value:1})}}>Increment Ahe</button>
           <button onClick={()=>{dispatchVeh({type:'decrementFirst', value:1})}}>Decrement Ahe</button>
           <button onClick={()=>{dispatchVeh({type:'incrementSecond', value:1})}}>Increment Mum</button>
           <button onClick={()=>{dispatchVeh({type:'decrementSecond', value:1})}}>Decrement Mum</button>
           <button onClick={()=>{dispatchVeh({type:'reset'})}}>Reset</button>
       </div>
   )
}

export default FuncReducerComp;