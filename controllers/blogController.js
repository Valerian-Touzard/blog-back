import mongoose from "mongoose";
const Blog = require('../models/blog')

// fetch list of blogs
const fetchAllBlog = async(req,res) => {
    let blogList;
    try {
        blogList = await Blog.find();
    } catch (error) {
        console.error(error);
    }

    if(!blogList){
        return res.status(404).json({message: 'No Blogs Found'})
    }

    return res.status(200).json({blogList})
}
// add a new blog
// delete a blog
// update a blog 