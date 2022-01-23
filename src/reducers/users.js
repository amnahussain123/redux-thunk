const initialState = {
    users:[],
    loading:true
}
export const adminLogin =(state ='', action)=>{
    switch(action.type){
        case 'LOGIN':
           return {response:action.payload
            }
        default:
            return state
    }
}
export const userList =(state = '', action)=>{
    switch(action.type){
        case 'GET_USERS':
           return {...state, users:action.payload, loader:false
            }
        default:
            return state
    }
}

