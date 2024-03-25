import mongoose from "mongoose";
const Blog = require("../models/blog");

// fetch list of blogs
const fetchAllBlog = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.error(error);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};
// add a new blog

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreateBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreateBlog.save();
  } catch (error) {
    console.error(error);
  }

  try {
    const session = mongoose.startSession();
    (await session).startTransaction();
    await newlyCreateBlog.save(session);
    (await session).commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }

  return res.status(200).json({ newlyCreateBlog });
};
// delete a blog
// update a blog
