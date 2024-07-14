function displayUsers(users){
    unOrderedList.setAttribute("class", "users");

    
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


        
    })
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
    if(!users){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    }
    displayUsers(users);
})();




var users;
var unOrderedList = document.createElement("ul");
let timeOut = null;


const display = document.querySelector(".data");
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("keyup", (event) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{filterData(event)}, 1000);
});

