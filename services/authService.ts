import axios from "axios"

const API_URL = "https://blogs-backend.onrender.com/api/users";
const register = async(userData :{name:string,email:string,password:string})=>{
    try{
        const response = await axios.post(API_URL + "/register",userData);
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }

        return response.data;
    }catch(e){
        console.log(e)
    }
    
}

const login = async(userData : {email:string,password:string})=>{
    console.log(userData)
    try{
        const response = await axios.post(API_URL + "/login",userData);
        
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }

        return response.data;

    }catch(e){
        console.log(e)
    }
    
}

export const logout = async()=>{
    localStorage.removeItem('user');
}


const authService  ={
    register,
    login,
    logout
}

export default  authService;