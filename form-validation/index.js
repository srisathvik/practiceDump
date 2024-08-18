let userName = document.getElementById('name');
let password = document.getElementById('password');
let form = document.getElementById('form');
let errormessages = document.getElementById('error');
// console.log('hi');
form.addEventListener("submit", (e)=>{
    // e.preventDefault();
    let messages=[];
    if(userName.value === "" || userName.value == null){
        messages.push('Name is required');
    }
    if(password.value.length < 8){
        messages.push('password must be 8 characters');
    }
    if(messages.length > 0){
        e.preventDefault();
        errormessages.innerText = messages.join('\n ');
    }
    console.log(errormessages.innerText);
})