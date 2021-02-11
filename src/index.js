
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import  './style.css';

let tabContainer = document.createElement('div');
tabContainer.style.display = 'flex';
tabContainer.style.justifyContent = 'flex-end';

let tabHome = document.createElement('div');
let tabMenu = document.createElement('div'); 
let tabContact = document.createElement('div')

tabHome.textContent = "Home";
tabMenu.textContent = "Menu";
tabContact.textContent = "Contact";

tabHome.setAttribute("class", "tabs");
tabMenu.setAttribute("class", "tabs");
tabContact.setAttribute("class", "tabs");

tabContainer.appendChild(tabHome);
tabContainer.appendChild(tabMenu);
tabContainer.appendChild(tabContact);

document.getElementById('navBar').appendChild(tabContainer);

tabHome.addEventListener('click', home);
tabMenu.addEventListener('click', menu);
tabContact.addEventListener('click', contact);

home();
