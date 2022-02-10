import express from "express";

//Importing NewPost Route
import NewPost from './NewPost/NewPost.js';

//Importing UpdatePost Route
import UpdatePost from './UpdatePost/UpdatePost.js';





const route = express.Router()

//Setting Route for Creating Post
route.use('/newBlog', NewPost);


//Setting Route for Updating Post
route.use('/updateBlog', UpdatePost);


export default route;