import express from "express";

//Importing newPost Controller
import Controller from './controller.js';



const newPost = express.Router();



//Setting Up Route and Controller
newPost.post('/', Controller);





export default newPost;