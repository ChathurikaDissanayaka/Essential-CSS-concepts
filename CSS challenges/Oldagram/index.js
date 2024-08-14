import { posts } from "./posts.js";

let mainEl = document.querySelector("main")

function generatePosts(){
    posts.forEach(function(post){
            mainEl.innerHTML += `<section class="post">
                    <div class="container">
                        <div class="user">
                            <img class="sp" src="${post.avatar}" alt="avatar image of ${post.name}">
                            <div class="user-details">
                                <p class="username size-12">${post.name}</p>
                                <p class="location">${post.location}</p>
                            </div>
                        </div>
                        <img class="portrait" src="${post.post}" alt="post of ${post.name}">
                        <div class="icons">
                            <img src="images/icon-heart.png" alt="">
                            <img src="images/icon-comment.png" alt="">
                            <img src="images/icon-dm.png" alt="">
                        </div>
                        <p class="likes size-12">${post.likes} likes</p>
                        <p class="caption size-12"><span class="name size-12">${post.username}</span> ${post.comment}</p>
                    </div>
                </section>`
    })

    const portraitImages = document.querySelectorAll(".portrait")
    portraitImages.forEach((image, index) => {
        image.addEventListener('dblclick', function() {
            if(!posts[index].liked){
                posts[index].likes++
                posts[index].liked = true
                updateLikes();
            }
        });
    });
}

generatePosts()

function updateLikes() {
const likeElements = document.querySelectorAll(".likes")
likeElements.forEach((likeElement, index) => {
    likeElement.textContent = `${posts[index].likes} likes`
});
}