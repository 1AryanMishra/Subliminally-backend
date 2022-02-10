import mongoose from 'mongoose';


const PostSchema = new mongoose.Schema({
    snip : mongoose.SchemaTypes.ObjectId,
    content : []
})


const PostsSnippetSchema = new mongoose.Schema({
    title : String,
    snippet : [],
    createdAt : {
        immutable : true,
        type : Date,
        default : Date()
    },
    updatedAt : {
        type : Date,
        default : Date()
    },
    more : mongoose.SchemaTypes.ObjectId
})


export const BlogsSnippet = mongoose.model('BlogsSnippet', PostsSnippetSchema);

export const Blog = mongoose.model('Blogs', PostSchema);