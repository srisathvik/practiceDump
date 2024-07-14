function displayAlbums(albums){
    unOrderedList.setAttribute("class", "album");

    albums.map(album => {
        var newLI = document.createElement("li");
        var title = document.createElement("h3");
        var anchor = document.createElement("a");

        title.setAttribute("class", "album-title");
        title.setAttribute("id", album.id);
        anchor.href = `${window.location.origin + window.location.pathname}?id=${album.id}`;
        anchor.innerHTML = album.title;
        title.appendChild(anchor);
        newLI.appendChild(title);
        unOrderedList.appendChild(newLI);
    })
    display.appendChild(unOrderedList);
}

function displayPhotos(photos){
    // albumsView.innerHTML = "";
    // albumsView.appendChild(title)
    // var container = document.createElement("div");
    // container.setAttribute("class", "images");
    // photos.map(photo => {
    //     var image = document.createElement("img");
    //     image.src = photo.url;
    //     container.appendChild(image);
    //     albumsView.appendChild(container);  
    //     // console.log(photo);
    // })
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
    if(! window.location.search){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albums = await response.json();
    displayAlbums(albums);
    }
    else{
        let id = window.location.search[4];
        // console.log(id[4]);
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        const photos = await response.json();
        // console.log(photo);
        displayPhotos(photos);
    }
    
})();




// var albums;
var unOrderedList = document.createElement("ul");
let timeOut = null;

const display = document.querySelector(".data");
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("keyup", (event) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{filterData(event)}, 1000);
});

