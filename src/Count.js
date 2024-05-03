import React, { act, useReducer, useState } from 'react'


function reducer(state,action){

    // switch(action.type){
    //   case 'increment':
    //      return {count:state.count+1 }
    //   case 'decrement':
    //      return {count:state.count-1}
    //   default :
    //   return state;      
    // }

    if(action.type=='increment'){
      return {count:state.count+1,count1:state.count1+1 }
    }
    if(action.type=='decrement'){
      return {count:state.count-1,count1:state.count1-1 }
    }
    if(action.type=='reset'){
      return {count:state.count=0,count1:state.count1=5}
    }
    if(action.type=='increment5'){
      return {count:state.count+5,count1:state.count1+5}
    }
    if(action.type=='decrement5'){
      return {count:state.count-5,count1:state.count1-1}
    }
 
}


const Count = () => {

 
  const[state,dispatch]=useReducer(reducer,{count:0,count1:5})


    // const[count,setCount]=useState(0);
    function Incement(){
       dispatch({type:"increment"});
    }
    function Decrement(){
    //     setCount(prv=>prv-1)
    // }
       dispatch({type:'decrement'})
    }
    
    function Reset(){
      dispatch({type:'reset'})
    }
   function Increse5(){
    dispatch({type:'increment5'})
   }
   function Decrese5(){
    dispatch({type:'decrement5'
    })
   }

  return (
    <div style={{ textAlign:"center"}}>
      <h1>UseReducer Hook : Count : {state.count}</h1>
      <h1>UseReducer Hook : Count : {state.count1}</h1>
      <button 
       onClick={Incement}>Increment</button>
      
      <button onClick={Decrement}>Decrement</button>
        <div>
        <button onClick={Increse5}>Increse By 5</button>
        <button onClick={Decrese5}>Decrese By 5</button>
      </div>
      <div> <button onClick={Reset}>Reset</button>
   </div>
    </div>

  )
}

export default Count;
