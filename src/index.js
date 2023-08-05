import './style.css';
import printMe from './test.js';
import loadHomepage from './Homepage';
import loadMenu from './Menu';
import loadContact from './Contact';

loadHomepage();

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", loadHomepage);

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", loadMenu);

const contactButton = document.getElementById("contact");
contactButton.addEventListener("click", loadContact);


printMe();