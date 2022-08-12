document.addEventListener('DOMContentLoaded', () =>{
    updatePosts()
})

function updatePosts(){
    fetch("http://localhost:3000/api/all")
        .then(res => res.json())
        .then(posts => {
            let postElements = '';
            posts.forEach((post) => {
                let postElement = `
                <div id="${post.id}" class="card">
                    <div class="card-header">
                        <h3 class="card-title">${post.title}</h3>
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h4>${post.description}</h4>
                            <input class="button" id="btnDel" type="button" value="X" onclick="deletePost('${post.id}')"> 
                        </div>
                    </div>
                </div>
                `
                postElements += postElement;
            });
            
            document.getElementById("posts").innerHTML = postElements;      
    })
}

function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = {
        title: title,
        description: description
    };

    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => {
        updatePosts()
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    });
}

function deletePost(id) {
    const options = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/api/delete/${id}`, options);
  
    updatePosts();
  }