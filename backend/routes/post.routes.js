const express = require("express");
const { setPosts, getPosts, editPosts, deletePosts, likePosts, dislikePosts } = require("../controllers/post.controller");
const router = express.Router();


//CRUD_____________________________________________________

//CREATE (PUT)
router.post("/", setPosts);
//READ (GET)
router.get("/", getPosts);
//UPDATE (POST)
router.put("/:id", editPosts);
//DELETE (DELETE)
router.delete("/:id", deletePosts);

//_____________________________________________________

//PATCH
router.patch("/like-post/:id", likePosts)
router.patch("/dislike-post/:id", dislikePosts)

//_____________________________________________________

module.exports = router;