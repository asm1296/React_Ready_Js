import { DO_LOGIN } from './ActionType';

export function loginActionCreater(username,password){
    return {
        type : DO_LOGIN,
        cred : {
        username : username,
        password : password
        }
    }
}