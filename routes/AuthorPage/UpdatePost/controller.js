import mongoose from 'mongoose';

//Importing Models
import { Blog, BlogsSnippet } from '../../../models/Posts.js';


export default (req, res) => {
    var snip;

    if(req.body.content.length >= 3){
        snip = req.body.content.slice(0, 2);
    }
    else{
        snip = req.body.content;
    }
    //Blog Title
    const BlogTitle = {title : req.body.title};
    BlogsSnippet.updateOne(BlogTitle, {$set : {
        title : req.body.newTitle,
        snippet : snip,
        updatedAt : Date()
    }}, (err, blogSnipUpdateRes) => {
        if(err){
            console.log(`Error Occurred in Updating Post Snip! ${err}`);
        }
        else{
            console.log(`Post Snip Updated! ${blogSnipUpdateRes}`);
            console.log('Updating Blog More Data...');
            Blog.updateOne(BlogTitle, {$set : {
                title : req.body.newTitle,
                content : req.body.content
            }}, (err, blogUpdateRes) => {
                if(err){
                    return console.log(`Error Occurred in Updating Post More Content! ${err}`);
                }
                else{
                    console.log(`Post More Content Updated! ${blogUpdateRes}`);

                    let link = `https://subliminally.netlify.app/blog/${req.body.title}`;
                    //let link = `https://localhost:3000/blog/${req.body.title}`;
                    
                    return res.status(201).json({
                        updated : true,
                        blogLink : link
                    })
                }
            })
        }
    })
}