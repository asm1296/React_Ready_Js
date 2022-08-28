import React,{ useState, useMemo } from 'react';

const FuncStateComp = () =>{
    const [count, setCount] = useState(0);
    const [myObj, setMyObj] = useState({firstName:'Akshay', lastName:'Mane', age:25});
    const incrementByFive = () =>{
        /* for(let i=0;i<5;i++){
            setCount(count + 1); 
            In this case setCount is called 5 times, but it is not invoked every time to 
            avoid continous re-rendering, all setCount called at same time, taking reference of 
            stale count value
        } */
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount + 1);
            // in this case we refer to previous count value, even though all setcount called at
            // same time, they refer to changes using previous state.
        }
    }
    // consider this as time consuming function, state change cause re-render every element 
    //and cause to run this func. Eventually resulting in slow component even though we didn't change
    // myObj.age
    // const isEven=()=>{
    //     let i = 0;
    //     while(i<2000000000){
    //         i++
    //     }
    //     return (myObj.age % 2 === 0)
    // }
    //using useMemo, we memoize value returned by callback func and call only when myObj state is 
    // changed. so during re-rendering  it doesn't cause performance issue when we change other state
    const isEven = useMemo(()=>{
        let i = 0;
        while(i<2000000000){
            i++
        }
        return (myObj.age % 2 === 0)
    },[myObj])

    const changeObj = () =>{
        // Just like below, array also needs to manually merge using spread operator and update
        setMyObj(prevObj=>{
            return {...myObj, age:prevObj.age + 1}
        })
    }
    return(
        <div>
            <h3>Count - {count}</h3>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
            <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button onClick={incrementByFive}>Increment by 5</button>
            {/* <h3>{JSON.stringify(myObj)} {isEven() ? 'Even':"odd"}</h3> */}
            <h3>{JSON.stringify(myObj)} {isEven ? 'Even':"odd"}</h3>
            <button onClick={changeObj}>Change myObj</button>
        </div>
    )
}

export default FuncStateComp;