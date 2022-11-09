import axios from "axios";
import Router  from "next/router";

const API_URL = "https://blogs-backend.onrender.com/api/posts";

const createBlog = async(token:string,blog,user_id:string)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    console.log(blog);
    return axios
    .post(API_URL, blog, config)
    .then((res) => {
      console.log(res.data);
      Router.push("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });

}

const fetchBlog = async(id:string)=>{
    return axios.get(API_URL + `/${id}`);
}

const fetchAllPublicBlogs = async()=>{
    return axios.get(API_URL);
}

const fetchAllBlogsOfUser = async(token:string,user_id:string)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    return axios.get(`${API_URL}/myBlogs`,config);
}

const updateBlog = async(token:string,blogId:string,blogData)=>{
    console.log({token,blogId,blogData});
    
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    return  axios.patch(`${API_URL}/${blogId}`,blogData,config);
}

const deleteBlog = async(token:string,blogId:string)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    return axios.delete( `${API_URL}/${blogId}`,config);
}

const blogService = {
    createBlog,fetchBlog,fetchAllBlogsOfUser,fetchAllPublicBlogs,updateBlog,deleteBlog
}

export default blogService;