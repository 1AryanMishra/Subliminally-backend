import express from "express";

//Controller For All Posts
import GetAllPosts from './GetAllPosts.js';

//Controller For Single Posts
import SinglePost from "./SinglePost.js";


const Home = express.Router();



//Setting Up Route and Controller for Fetching All Posts
Home.get('/', GetAllPosts);


//Setting Up Route and Controller for Fetching Single Post
Home.get('/blog/:title', SinglePost);


export default Home;