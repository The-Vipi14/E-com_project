const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.close-icon');

// const loginButton = document.querySelector('.login-popup-btn');
// loginButton.addEventListener('click',()=>{
//     wrapper.classList.add('active-login-popup');
// })

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


// iconClose.addEventListener('click',()=>{
//     alert("go back")
// });

function loginUser(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then((response) => {
        if (!response.ok) {
            return response.json().then(err => { throw err });
        }
        return response.json();
    })
    .then(data => {
        if (data.token) {
            // localStorage.setItem('currentUserEmail', email);
            // localStorage.setItem('currentUserPassword', password);
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        }
    })
    .catch(error => alert(error.error || 'Login failed'));
}



function signupUser(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'User registered') {
            // alert('Signup successful! Please login.');
            window.location.href = 'home.html';
        } else {
            alert('Signup failed.');
        }
    })
    .catch(error => console.log('Error:', error));
}
