function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}


// laod users and display on the website
function loadNewUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => newLoadUsers(users));
}

function newLoadUsers(users) {
    const ul = document.getElementById('newUsers');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `User Name: ${user.name}   User Email: ${user.email}`;
        ul.appendChild(li);
    }
}