//importerer my fetch fra min helper.js
import { myFetch } from "./helper.js";

//laver en async function
const Auth = async () => {
    //henter username feltets value ind
    const username = document.getElementById('username').value;
    //henter password feltets value ind
    const password = document.getElementById('password').value;

    //FormData er en function (interface)
    const formData = new FormData();
    //appender key (username) og value (variablen username)
    formData.append('username', username);
    //appender key (password) og value (variablen password)
    formData.append('password', password);
    //sætter variablen options
    const options = {
        //at være method : 'POST' lige som vi gjorde i postman
        method: 'POST',
        //sætter body til at være variablen formData
        body: formData
    }
    //sætter variablen data til at vente på svar fra myFetch 
    //(altså vi henter data fra heinz' api og gemmer det som JSON)
    const data = await myFetch('https://api.mediehuset.net/token', options);
    //setItem sætter en key (token) med en value (data som en string) i sessionStorage
    sessionStorage.setItem('token', JSON.stringify(data));
}

//henter min button ind for at kunne tilføje en eventlistener (click) på den
document.querySelector('#loginbtn').addEventListener('click', () => {
    //kalder min Auth function
    Auth();
});
//laver min loginData og henter (token) fra sessionStorage og laver den om til et object
const loginData = JSON.parse(sessionStorage.getItem('token'));
//hvis loginData (token) og loginData.access_token (password) er true
if(loginData && loginData.access_token) {
    console.log('Du er logget ind');
} else{
    console.log('Du skal logge ind');
};