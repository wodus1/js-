const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting=document.querySelector("#greeting");

const hidden_classname="hidden";
const username_Key="username";
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(hidden_classname);
    console.log(username);
    localStorage.setItem(username_Key,username);
    paintGreeting(username);
}
function paintGreeting(username){
    greeting.innerText="반갑습니다. "+ username +"님";
    greeting.classList.remove(hidden_classname);
}

const savedUsername = localStorage.getItem(username_Key);

if(savedUsername===null){
     loginForm.classList.remove(hidden_classname);
     loginForm.addEventListener("submit", onLoginSubmit);
 }else{
     paintGreeting(savedUsername);
 }