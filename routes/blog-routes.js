import express from "express";

const blogRouter = express.Router();

const {
  fetchAllBlog,
  addNewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

blogRouter.get("/", fetchAllBlog);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

module.exports = blogRouter;