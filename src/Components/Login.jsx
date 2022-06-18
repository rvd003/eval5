import axios from "axios"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

import { LoginContext } from "../Context/LoginContext";


const userLogin=({email,password})=>{
return axios({
    url:"https://reqres.in/api/login",
    method:"POST",
    data:{
        email,
        password
    }
})
};

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [state,dispatch]=useContext(LoginContext)
    const navigate=useNavigate()
    

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        userLogin({email,password}).then((res)=>{
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:{
                    token:res.data.token
                }
            })
            navigate("/jewellery")
        })
    };
    
   
    return(
        <div className="Form" >
        <form onSubmit={handleFormSubmit}>
        <div className="f">
            <input className="inp"
            type="email"
            placeholder="email"
            onChange={(e)=>setEmail(e.target.value)}
            />

        </div>
        <div className="p">
            <input className="inp"
            type="password"
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}
            />

        </div>
   <div className="p">
       <input className="inpbu" type="submit" value="Submit"
       
      

       />
   </div>
        </form>
        </div>
    )

}
export default Login