module.exports = {

    posts: [
        {
            id: "Testes",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id:generateID(),title,description});
    },

    // newPost(title, description){        
    //     this.posts.push({
    //         id: generateID(),
    //         title,
    //         description,
    //     })
    // },

    deletePost(id){
        const index = this.posts.findIndex((post) => post.id == id);

        this.posts.splice(index, 1)
    }

}

function generateID(){
    return Math.random().toString(36).substr(2, 9)
}
