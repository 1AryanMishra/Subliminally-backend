import express from "express";

//Importing Controller
import Controller from './controller.js';




const updatePost = express.Router();




//Setting Up Route and Controller
updatePost.post('/', Controller);




export default updatePost;