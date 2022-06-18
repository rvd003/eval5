import React , { useReducer} from "react";


export const LoginContext=React.createContext();
const logReducer=(state,action)=>{
    switch (action.type){
        case "LOGIN_SUCCESS":{
            return{
                ...state,
                isAuth:true

            };
        }
        case "LOGOUT_SUCCESS":{
            return{
                ...state,
                isAuth:false

            };
        }
        default :{
            return state
        }
        
    }
};


export default function LoginContextProviderWrapper({children}){
const [state,dispatch]=useReducer(logReducer,{isAuth:false});
return(
    <LoginContext.Provider value={[state,dispatch]}>
        {children}
    </LoginContext.Provider>
)
}




