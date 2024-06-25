const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainEl = document.querySelector("main")
let portrait = document.querySelector("portrait")

function generatePosts(){
    for(let i=0; i < posts.length; i++){
        mainEl.innerHTML += `<section class="post">
                    <div class="container">
                        <div class="user">
                            <img class="sp" src="${posts[i].avatar}" alt="avatar image of ${posts[i].name}">
                            <div class="user-details">
                                <p class="username size-12">${posts[i].name}</p>
                                <p class="location">${posts[i].location}</p>
                            </div>
                        </div>
                        <img class="portrait" src="${posts[i].post}" alt="post of ${posts[i].name}">
                        <div class="icons">
                            <img src="images/icon-heart.png" alt="">
                            <img src="images/icon-comment.png" alt="">
                            <img src="images/icon-dm.png" alt="">
                        </div>
                        <p class="likes size-12">${posts[i].likes} likes</p>
                        <p class="caption size-12"><span class="name size-12">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </section>`
    }
}

generatePosts()
