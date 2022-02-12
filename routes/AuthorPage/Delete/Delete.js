//Importing Models
import { BlogsSnippet, Blog } from '../../../models/Posts.js';


export default async(req, res) => {
    try{
        console.log(`Deleting Blog with title : ${req.params.title}`);
        const response = await BlogsSnippet.deleteOne({ title : req.params.title });
        const responsee = await Blog.deleteOne({ title : req.params.title });

        return res.status(200).send('Deleted');
    }
    catch(err){
        console.log(err);
        return res.status(404).send('Post Not Deleted!');
    }
}