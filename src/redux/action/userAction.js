import { type } from "@testing-library/user-event/dist/type"
export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS'
export const doLogin = (data) =>{
    return {
        type: 'FETCH_USER_LOGIN_SUCCESS',
        payload: data 
    }
}