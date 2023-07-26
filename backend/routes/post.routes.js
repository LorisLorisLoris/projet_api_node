const express = require("express");
const { setPosts, getPosts, editPosts, deletePosts } = require("../controllers/post.controller");
const router = express.Router();


//CRUD_____________________________________________________

//GET
router.get("/", getPosts);
//POST
router.post("/", setPosts);
//PUT
router.put("/:id", editPosts);

//DELETE
router.delete("/:id", deletePosts);

//_____________________________________________________

//PATCH
router.patch("/like-post/:id", (req, res)=>{
    res.json({
        message : "Post liké : id " + req.params.id 
    })
})

router.patch("/dislike-post/:id", (req, res)=>{
    res.json({
        message : "Post disliké : id " + req.params.id 
    })
})

//_____________________________________________________

module.exports = router;