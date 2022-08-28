import React from 'react';
import loginComp from './LoginComp.module.css';
import { loginActionCreater } from '../ApplicationStore/ActionCreater';
import { connect } from 'react-redux';
let timer;
class LoginComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username : '',
            password : '',
            multiplier: 0
        }
    }
    
    componentDidMount(){
        
        for(let i = 1; i <= 10; i++){
            function run(){
                this.setState({
                    multiplier: i
                })
            }
            timer = setTimeout(run.bind(this),(i * 1000));
        } 
    }

    componentWillUnmount(){
        clearTimeout(timer);
    }
    inputHandler =e=>{
        this.setState({
            [e.target.name] : e.target.value
        },()=>(console.log(this.state)))
    }

    render(){
        const { username, password} = this.state;
        const { loginActionCreater } = this.props;
        return(
            <>
                <div style={{width:`${this.state.multiplier * 10}%`, height: '15px', backgroundColor:'green', position:'relative', left:'0px'}}></div>
                <div className={loginComp.Container}>
                    <h1 style={{color:"rgba(8, 201, 201, 0.911)"}}> Login </h1>
                    <label className={loginComp.itemLabel}>User Name : </label>
                    <input className={loginComp.itemInput} type="text" name="username" onChange={(e)=>this.inputHandler(e)}></input>
                    <label className={loginComp.itemLabel}> Password : </label>
                    <input className={loginComp.itemInput} type="password" name="password" onChange={(e)=>this.inputHandler(e)}></input>
                    <button className={loginComp.buttonBlock} onClick={loginActionCreater(username,password)}> Login </button>
                </div>
            </>
        );
    }
}

export default connect(null,{loginActionCreater})(LoginComp);