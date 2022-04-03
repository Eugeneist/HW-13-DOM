"use strict"

let ul = document.createElement('ul');
ul.id = "albums";
document.body.append(ul);

fetch("https://jsonplaceholder.typicode.com/albums")            
.then((response) => response.json())
.then((data) => {
    data.forEach((value) => {
        let li = document.createElement('li');
        li.textContent = value.title;
        li.className = "album_title";
        ul.append(li);
    });
})
.catch((error) => console.error(error));