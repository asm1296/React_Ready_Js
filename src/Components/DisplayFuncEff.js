import React, {useState, useEffect} from 'react';
import LoginComp from './LoginComp';

const FuncEffectComp = React.lazy(()=>import("./FuncEffectComp"));

// We have two child components - LoginComp, FuncEffectComp. FuncEffectComp opens when we click on
// Add child button. We need to load our screen faster with logincomp, but we need to wait for whole
// bundle with files+dependencies of LoginComp and FuncEffectComp to download. To load faster, we
// will lazy load FuncEffectComp as it is not initially required. This will create two bundle each for 
// LoginComp and FuncEffectComp. Browser will download bundle for LoginComp and screen will load in 
// less time. But when we click on Add child, browser will start downloading 2nd bundle for FuncEffectComp
// But it will take time to load FuncEffectComp. In this scenario, suspense helps to show fallback UI



const DisplayFuncEff=()=>{
    const [display, setDisplay] = useState(false);

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts',{
           method:'GET'
       })
       .then((response)=>{
           response.json().then(res=>console.log("result",res))
       }).catch(err=>{
           console.log(err);
       })
    },[])

    return (     
        <React.Suspense fallback={<div>Loading...</div>}>
            <h1>Parent Component</h1>
            <button onClick={()=>setDisplay(!display)}>show Child</button>
            <LoginComp />
            {display && <FuncEffectComp />} 
        </React.Suspense>
    )
}

export default DisplayFuncEff;