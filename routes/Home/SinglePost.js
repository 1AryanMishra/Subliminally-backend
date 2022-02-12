//Importing Model
import { Blog } from "../../models/Posts.js";


export default async (req, res) => {

    console.log(`Getting Blog with title : ${req.params.title}`);
    try{
        const BlogData = await Blog.find({ title : req.params.title});
        console.log(BlogData)
        return res.send(BlogData);
    }
    catch{
        return res.status(404).json({
            msg : 'Blog Does Not Exists.',
            blog : false
        })
    }
}