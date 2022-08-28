import { DO_LOGIN } from './ActionType';

const loginDetails = {
    username : '',
    password : ''
}

export function userReducer(initState=loginDetails,action){
    switch (action.type){
        case DO_LOGIN : return {
            ...initState,
            username : action.cred.username,
            password : action.cred.password
        }            
        default : return {
           ...initState
        }
    }
}