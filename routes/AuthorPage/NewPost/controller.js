import mongoose from 'mongoose';

//Importing Models
import { Blog, BlogsSnippet } from '../../../models/Posts.js';


export default async (req, res) => {

    var snip;
    if(req.body.content.length >= 3){
        snip = req.body.content.slice(0, 2);
    }
    else{
        snip = req.body.content;
    }
    
    const BlogSnip = await BlogsSnippet.create({
        title : req.body.title,
        snippet : snip,
    })
    const MoreBlogData  = await Blog.create({
        snip : BlogSnip._id,
        title : req.body.title,
        content : req.body.content
    })

    BlogSnip.more = MoreBlogData._id;
    BlogSnip.save();

    let link = `https://subliminally.netlify.app/blog/${req.body.title}`;
    //let link = `https://localhost:3000/blog/${req.body.title}`;

    res.status(201).json({
        posted : true,
        blogLink : link
    })
}