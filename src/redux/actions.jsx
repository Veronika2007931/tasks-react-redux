export const register = (name, email, password)=> {
return{
    type: 'auth/redgister',
    payload: {
        name,
        email,
        password
    }
}
}