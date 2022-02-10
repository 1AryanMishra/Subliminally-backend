import express from "express";

//Controller For All Posts
import { GetAllPosts, GetPost } from './GetAllPosts.js';



const Home = express.Router();



//Setting Up Route and Controller for Fetching All Posts and Single Post based
//on Search query
Home.get('/', GetAllPosts);




export default Home;