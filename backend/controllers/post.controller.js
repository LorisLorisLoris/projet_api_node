const PostModel = require("../models/post.model"); 

//CREATE
module.exports.setPosts = async (req, res) => {
    if(!req.body.message){
        res.status(400).json({message : "Merci d'ajouter un message"})
    }

    const post = await PostModel.create({
        message : req.body.message,
        author : req.body.author
    })
    res.status(200).json(post);
};

//READ
module.exports.getPosts = async (req, res) => {
    const post = await PostModel.find();
    res.status(200).json(post)
}

//UPDATE
module.exports.editPosts = async (req, res)=>{
    const post = await PostModel.findById(req.params.id); // recupere l'id
    if (!post){
        res.status(400).json({ message : "Ce post n'existe pas"})
    }
    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        { new: true}
    )
    res.status(200).json(updatePost);
}

//DELETE
module.exports.deletePosts = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
    if (!post){
        res.status(400).json({ message : "Ce post n'existe pas"})
    }
    await post.deleteOne();
    res.status(200).json("Message " + req.params.id + " supprimé");
}