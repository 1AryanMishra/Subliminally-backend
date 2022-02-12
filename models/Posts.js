import mongoose from 'mongoose';


const PostSchema = new mongoose.Schema({
    snip : mongoose.SchemaTypes.ObjectId,
    title : String,
    content : [],
    interactions : {
        likes : {
            type : String,
            default : 0
        },
        dislikes : {
            type : String,
            default : 0
        }
    },
})


const PostsSnippetSchema = new mongoose.Schema({
    title : String,
    snippet : [],
    interactions : {
        likes : {
            type : String,
            default : 0
        },
        dislikes : {
            type : String,
            default : 0
        }
    },
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