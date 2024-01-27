/*const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

console.log(loginButton);

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

console.log(signupButton);

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});
*/

// document.getElementsByClassName

let loginButton = document.getElementById('login-btn');
let signupButton = document.getElementById('signup-btn');

loginButton.addEventListener('click', function(){
console.log('Logged In');})

signupButton.addEventListener('click', function(){
console.log('Signed Up');})