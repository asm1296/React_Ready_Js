import React, {useState, useEffect, useContext, useCallback} from 'react';
import { nameContext } from '../App';
import ButtonCallback from './ButtonCallback';

const FuncEffectComp = () =>{
    const [count,setCount] = useState(0);
    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    const contextValue = useContext(nameContext);

    //When we move mouse - mouse pointer set is changing -> resulting in re-render of this comp.
    // but buttoncomp is also re-rendering without no reason. Reason behind is that when this comp
    // is re-render, it creates new setPropCount at new reference. Child Button comp is using react
    // memo, but it compares props on referential check. hence we need to use - useCallback
    // which will create new setPropCount at new reference when count is changed
    // const setPropCount = ()=>{
    //     setCount(prevCount=>prevCount+1);
    // }
    const setPropCount = useCallback(()=>{
        setCount(prevCount=>prevCount+1);
    },[count])

    const logMousePos=(e)=>{
        console.log('mouse log position');
        setX(e.clientX);
        setY(e.clientY);
    }

    // useEffect invokes function which is passed as 1st param to it after each render except 
    //in some condition.
    // creating componentDidMount with passing 2nd param of useEffect as empty array.
    useEffect(()=>{
        console.log('binding mouse event listner');
        window.addEventListener('mousemove', logMousePos)

        // useEffect cleanup function- which will work as component unmount,called once component
        // is unmounted
        return ()=>{
            console.log('unbinding mouse event listner')
            window.removeEventListener('mousemove',logMousePos);
        }
    },[])

    // Here it works as componentDidUpdate but only when count is changed, if we remove second parameter
    // then it will run on each render, second param is dependency
    useEffect(()=>{
        console.log('count updated');
    },[count])

    return(
        <div>
            <h2>Child Component</h2>
            Count - {count}
            {/* <button onClick={setPropCount}>Increment Count</button> */}
            <ButtonCallback setPropCount={setPropCount}></ButtonCallback>
            <br />
            <h3> X - {x} Y - {y}</h3>
            <h4>context example - {contextValue}</h4>
        </div>
    )

}

export default FuncEffectComp;