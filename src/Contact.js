export default function loadContact(){
    const content = document.getElementById("content");
    const headline = document.getElementById("headline");
    

    headline.innerText = "Contact Us";
    
    const paragraph = document.createElement("p");

    paragraph.innerText = "Come Visit Us at Arvin's Bites \n\nMitropoliei 5, Sibiu Old Town, Romania \nMon-Sun, 11:00 AM - 9:00 PM \nPhone: +40 264 555 555 \nEmail: info@arvinsbites.ro \n\nSee you soon!";
    
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    content.appendChild(paragraph);
}