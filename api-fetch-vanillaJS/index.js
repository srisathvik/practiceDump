// var search = "";
function displayUsers(users){
    // console.log(users);
    postsView.innerHTML = "";
    albumsView.innerHTML = "";
    usersView.innerHTML = "";
    unOrderedList.innerHTML = "";
    display.innerHTML = "";
    unOrderedList.setAttribute("class", "users");

    
    
//    console.log(users);
    users.map(user =>{
        var newLI = document.createElement("li");
        var name = document.createElement("h3");
        name.setAttribute("class","name");

        var userName = document.createElement("p");
        var phone = document.createElement("p");
        var email = document.createElement("p");
        var address = document.createElement("p");
        var website = document.createElement("a");


        name.innerText = `${user.name}: `;
        newLI.appendChild(name);

        userName.innerHTML = `<strong>username:&nbsp;&nbsp;&nbsp;</strong>${user.username}.`
        newLI.appendChild(userName);

        phone.innerHTML = `<strong>Phone:&nbsp;&nbsp;&nbsp;</strong>${user.phone}.`
        newLI.appendChild(phone);

        email.innerHTML = `<strong>Email:&nbsp;&nbsp;&nbsp;</strong>${user.email}.`
        newLI.appendChild(email);

        address.innerHTML = `<strong>address:&nbsp;&nbsp;&nbsp;</strong>${user.address.suite},&nbsp${user.address.street},&nbsp${user.address.city},&nbsp${user.address.zipcode}.`
        newLI.appendChild(address);

        website.setAttribute("href", user.website);
        website.innerText  = "website";
        newLI.appendChild(website);

        unOrderedList.appendChild(newLI);
        // console.log(orderedList);


        
    })
    usersView.appendChild(unOrderedList);
    display.appendChild(usersView);
    // console.log("users: ", usersView);

}

function filterData(event){
    const searchTerm = event.target.value;
    var listItem = unOrderedList.getElementsByTagName("li");
    console.log("filter Data ran");
    for(var i = 0; i < listItem.length; i++){
        var name = listItem[i].getElementsByTagName("h3");
        // console.log(listItem[i], name[0].innerText);
        listItem[i].style.display = 'revert';

    if (! name[0].innerText.toLowerCase().includes(searchTerm.toLowerCase()) ) {
        // console.log(name[0]);
      listItem[i].style.display = 'none';
    }
    }
    // listItem.forEach((item =>{
    //     // item.style.display = 'revert';

    //     // if (!item.innerText.toLowerCase().includes(searchTerm)) {
    //     //     item.style.display = 'none';
    //     // }
        
    // }))
}


function displayPosts(posts){
    display.innerHTML = "";
    usersView.innerHTML = "";
    albumsView.innerHTML = "";
    postsView.innerHTML = "";
    unOrderedList.innerHTML = "";

    // var unOrderedList = document.createElement("ul");
    unOrderedList.setAttribute("class", "list");
    posts.map(post => {
        // console.log(post);
        var newLI = document.createElement("li");
        // newLI.setAttribute("id", post.id);

        var title = document.createElement("h3");
        // title.setAttribute("id", post.id);
        
        var content = document.createElement("p");
        // content.setAttribute("id", post.id);
        
        title.innerHTML = `${post.title} :   `;


        newLI.appendChild(title);
        

        content.innerHTML = post.body;
        newLI.append(content);
        var comment = document.createElement("button")
        comment.setAttribute("id", post.id);
        comment.innerHTML = "view Comments";
        // console.log(comment);
        newLI.appendChild(comment);

        unOrderedList.appendChild(newLI);
        
    })
    postsView.appendChild(unOrderedList);
    display.appendChild(postsView);

}
function displayAlbums(albums){
    display.innerHTML = "";
    postsView.innerHTML = "";
    usersView.innerHTML = "";
    albumsView.innerHTML = "";
    unOrderedList.innerHTML = "";
    unOrderedList.setAttribute("class", "album");

    albums.map(album => {
        var newLI = document.createElement("li");
        var title = document.createElement("h3");
        title.setAttribute("class", "album-title")
        title.setAttribute("id", album.id);
        title.innerHTML = album.title;
        newLI.appendChild(title);
        unOrderedList.appendChild(newLI);
        
    })
    albumsView.appendChild(unOrderedList);
    display.appendChild(albumsView);
}

function displayPhotos(photos, title){
    albumsView.innerHTML = "";
    albumsView.appendChild(title)
    var container = document.createElement("div");
    container.setAttribute("class", "images");
    photos.map(photo => {
        var image = document.createElement("img");
        image.src = photo.url;
        container.appendChild(image);
        albumsView.appendChild(container);  
        // console.log(photo);
    })
}

function getName(email){
    // console.log(email);
    users.forEach(user => {
        // console.log(user, email);
        if(user.email == email){
            // console.log("user matched: ", user, email);
            return user.name
        }
        else{
            return "unknown user"
        }
    });
}

function displayComments(comments){
    console.log(comments);
    // console.log(posts);
    postsView.innerHTML = "";
    
    unOrderedList.innerHTML = "";
    
    // var newLI = document.createElement("li");
    var post = document.createElement("div");
    post.setAttribute("class", "post-comments");
    var title = document.createElement("h3");
    var content = document.createElement("p");
        
    title.innerHTML = `${posts[comments[0].postId - 1].title} :   `;
    content.innerHTML = `${posts[comments[0].postId - 1].body}`;
   
    post.appendChild(title);
    post.append(content);
    // console.log(newLI);
    // unOrderedList.appendChild(newLI);

    comments.map(comment =>{
        console.log(comment.email)
        var commentItem = document.createElement("li");
        var name = document.createElement("h4");
        name.innerText =comment.name;
        var commentData = document.createElement("p");
        commentData.innerText = comment.body;
        commentItem.appendChild(name);
        commentItem.appendChild(commentData);
        unOrderedList.appendChild(commentItem);
    })
    postsView.appendChild(post);
    postsView.appendChild(unOrderedList);

}

// function handleSearchIput(event){
//     search = event.target.value;
//     console.log(search);
// }

// fetch  users list
async function handleUsersClick(e){
    // console.log("Handle users click triggered which display users");

    // console.log(e);
    if(!users){
        // console.log("fetching users")
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    }
    displayUsers(users);
}


async function handlePostsClick(){
    // console.log("Handle posts click triggered which display posts");
    if(!posts){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
    }
    // console.log(posts);
    displayPosts(posts);
}

async function handleAlbumsClick(){
    // console.log("Handle albums click triggered which display albums");
    if(!albums){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    albums = await response.json();
    }
    displayAlbums(albums);
    // console.log("albums:    ", albums);
}

async function handlePhotosClick(event){
    // console.log(e);
    //user data will not be fetched if get users is not clicked before
    //  e.stopPropogation();
    // console.log("Handle photos click triggered which display photos", e.target.id, e.currentTarget);
    var id = event.target.id;
    // console.log("id:    ", id)
    if(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    const photos = await response.json(); 
    const title = document.getElementById(`${id}`)
    displayPhotos(photos, title);
    // console.log(`userID: ${id}, photos: ${photos}`);
    }
}

async function handleCommentsClick(event){
    // console.log(`event target : ${event.target} event currentTarget: ${event.currentTarget}`)
    var id = event.target.id;
    if(id){
        console.log("should display post and comments", id);
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        const comments = await response.json();
        console.log(users);
        if (!users){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            users = await response.json();
            console.log(users)  
        }
        displayComments(comments);
        // console.log(comments);
    
    }
    
}





var users;
var posts;
var albums;
var photos
var unOrderedList = document.createElement("ul");
let timeOut = null;

var orderedList = document.createElement("ol");
orderedList.setAttribute("class", "list");

const display = document.querySelector(".data");
const usersView = document.querySelector(".users");
const albumsView = document.querySelector(".albums");
const postsView = document.querySelector(".posts");
const usersButton = document.querySelector(".users-button");
const postsButton = document.querySelector(".posts-button");
const albumsButton = document.querySelector(".albums-button");
const searchInput = document.querySelector("[data-search]");


albumsButton.addEventListener("click", handleAlbumsClick);
postsButton.addEventListener("click", handlePostsClick);
usersButton.addEventListener("click", handleUsersClick);
albumsView.addEventListener("click", (event)=>{ handlePhotosClick(event) });
postsView.addEventListener("click", (event)=> handleCommentsClick(event));
searchInput.addEventListener("keyup", (event) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{filterData(event)}, 1000);
});


window.addEventListener(
    "hashchange",
    () => {
      console.log("The hash has changed!");
    },
    false,
  );