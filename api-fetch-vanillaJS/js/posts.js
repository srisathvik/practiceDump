function displayPosts(posts){

    unOrderedList.setAttribute("class", "list");
    posts.map(post => {
        var newLI = document.createElement("li");
        var title = document.createElement("h3");
        var content = document.createElement("p");
        title.innerHTML = `${post.title} :   `;


        newLI.appendChild(title);
        

        content.innerHTML = post.body;
        newLI.append(content);
        var comment = document.createElement("button")
        comment.setAttribute("id", post.id);
        comment.innerHTML = "view Comments";
        newLI.appendChild(comment);

        unOrderedList.appendChild(newLI);
        
    })
    // postsView.appendChild(unOrderedList);
    display.appendChild(unOrderedList);

}

function filterData(event){
    const searchTerm = event.target.value;
    var listItem = unOrderedList.getElementsByTagName("li");
    console.log("filter Data ran");
    for(var i = 0; i < listItem.length; i++){
        var name = listItem[i].getElementsByTagName("h3");
        listItem[i].style.display = 'revert';
        if (! name[0].innerText.toLowerCase().includes(searchTerm.toLowerCase()) ) {
        listItem[i].style.display = 'none';
        }
    }
}
(async function handleUsersClick(e){
    if(!posts){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
    }
    displayPosts(posts);
})();




var posts;
var unOrderedList = document.createElement("ul");
let timeOut = null;

const display = document.querySelector(".data");
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("keyup", (event) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{filterData(event)}, 1000);
});
