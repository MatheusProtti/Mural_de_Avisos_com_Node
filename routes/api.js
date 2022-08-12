const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../model/posts')//acho q o erro ta aqui

router.get("/all", (req, res) => {
    
    res.json(posts.getAll())

})

router.post("/new", bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");

})

router.delete("/delete/:id", (req, res) => {
    let id = req.params.id;

    posts.deletePost(id)

    res.send("Post deletado");
})

module.exports = router;