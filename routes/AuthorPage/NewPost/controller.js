import mongoose from 'mongoose';

//Importing Models
import { Blog, BlogsSnippet } from '../../../models/Posts.js';


export default async (req, res) => {
    const snip = req.body.content.slice(0, 2);
    const BlogSnip = await BlogsSnippet.create({
        title : req.body.title,
        snippet : snip,
    })
    const MoreBlogData  = await Blog.create({
        snip : BlogSnip._id,
        content : req.body.content
    })

    BlogSnip.more = MoreBlogData._id;
    BlogSnip.save();

    const titleStringg = `${req.body.title}`;
    var titleString = '';
    for(let i = 0; i<titleStringg.length; i++){
        if(titleStringg[i] === ' '){
            titleString = titleString + '+';
        }
        else{
            titleString = titleString + titleStringg[i];
        }
    }
    let link = `http://localhost:5000/?blog=${titleString}`;
    res.status(201).json({
        posted : true,
        blogLink : link
    })
}