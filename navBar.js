
const navBar = [
    {name: 'Home', href: 'index.html'},
    {name: 'Characters', href: 'page1.html'},
    {name: 'Movie Scripts', href: 'page2.html'},
    {name: 'Behind the data', href: 'page3.html'},
]

const nav = document.createElement('nav');
const ul = document.createElement('ul');

navBar.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
  
    a.href = link.href;
    a.textContent = link.name;
    li.appendChild(a);
    ul.appendChild(li);
  });

nav.appendChild(ul);

const header = document.querySelector('header');
const logo = header.querySelector('.logo');
header.insertBefore(nav, logo.nextSibling);