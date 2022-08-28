import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Login = () =>{
    const [multiplier, setMultiplier] = useState(0);
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [userData, setUserData] = useState([]);

    const handleClick = async(e)=>{
        e.preventDefault();
        try{
            let data = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUserData(data.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        let timer
        for(let i = 1; i <= 10; i++){
            function run(){
                setMultiplier(prevState=> prevState + 1);
            }
            timer = setTimeout(run,(i * 1000));
        }
        return ()=>{
            clearTimeout(timer);
        }
    },[]);

    return (
        <div className='container'>
            {userData.length > 0 && <span>{userData[0].name}</span>}
            <div style={{width:`${multiplier * 10}%`, height: '15px', backgroundColor:'green'}}></div>
            <form>
                <input type={'text'} placeholder={'username'} value={user} onChange={(e)=>{setUser(e.target.value)}} />
                <input type={'password'} placeholder={'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button onClick={handleClick} disabled={(!user || !password)} style={{backgroundColor:'aquamarine', width:'15px', borderRadius:'1px'}}>Login</button>
            </form>
        </div>
    )
}

export default Login;