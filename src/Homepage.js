export default function loadHomepage(){
    const content = document.getElementById("content");
    const headline = document.getElementById("headline");
    

    headline.innerText = "Arvin's Bites";
    
    const paragraph = document.createElement("p");

    paragraph.innerText = "Discover Arvin's Bites - Where Taste Meets Compassion. We prove that plant-based goodness can be sinfully delicious! Our focus is on crafting mouthwatering dishes that tickle your taste buds and leave you craving more, all while staying true to our commitment to vegan ethics. Explore our Menu and savor a delightful assortment of vegan soups, main courses, and delectable desserts, prepared with love and care. Looking to plan your visit? Contact us now to make a reservation and secure a spot at our cozy restaurant in the heart of Sibiu's old town. We can't wait to welcome you to Arvin's Bites!";
    
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    content.appendChild(paragraph);
}