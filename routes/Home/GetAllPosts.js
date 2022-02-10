import mongoose from 'mongoose';

//Importing Models
import { BlogsSnippet } from '../../models/Posts.js';





export const GetAllPosts = async (req, res) => {
    if(req.query.blog){
        
        try{
            const BlogSnip = await BlogsSnippet.find({ title : req.query.blog});
            return res.send(BlogSnip);
        }
        catch{
            return res.status(404).json({
                msg : 'Blog Does Not Exists.'
            })
        }
    }
    try{
        const Blogs = await BlogsSnippet.find();
        return res.send(Blogs);
    }
    catch(err){
        return res.status(500).send(err);
    }
}


export const GetPost = async (req, res) => {
    
}