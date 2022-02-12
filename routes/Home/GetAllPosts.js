//Importing Models
import { BlogsSnippet } from '../../models/Posts.js';





export default async (req, res) => {
    try{
        const Blogs = await BlogsSnippet.find();
        console.log("Getting All Posts");
        return res.send(Blogs);
    }
    catch(err){
        return res.status(500).send(err);
    }
}