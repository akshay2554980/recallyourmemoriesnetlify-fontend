import axios from "axios";


const API = axios.create({baseURL: "https://recallyourmemories-akshay01.herokuapp.com/"});

// This method is used for middleware in backend and it will execute before
// every request method. It will send a token back to the backend so that it
// can verify we are logged in as we are checking  for authorization it is
// necessary that user should be authorized before it can perform any action.
// It sends the same token which was created when user logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")){// checking if user the has the token
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;// it contains the credentials to authenticate a user with the server
        // sending the token as a bearer string. Bearer string is a cryptic string which is send to server in response to login request
    }
    return req; // sending the req so that we can make the actual req which are written below
});

// after the execution of the interceptor function these reqs will be executed
export const fetchPosts = () => API.get("/posts");

export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);
