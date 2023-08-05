export default function loadMenu(){
    const menu = [
        "Creamy Tomato Basil Soup (350g) €5.99 Ingredients: Ripe tomatoes, fresh basil leaves, coconut cream, vegetable broth.", 
        "Lentil Spinach Soup (320g) €6.49 Ingredients: Red lentils, spinach, carrots, onions, garlic, vegetable broth.", 
        "Beyond Burger Bliss (350g) €11.00 Ingredients: Beyond Meat patty, avocado, lettuce, tomato, vegan mayo, whole wheat bun.", 
        "Zesty Chickpea Shawarma (345g) €9.54 Ingredients: Spiced chickpeas, pickled veggies, tahini sauce, pita bread.", 
        "Garden Fresh Pizza (370g) €10.45 Ingredients: Homemade tomato sauce, vegan cheese, bell peppers, onions, olives, mushrooms.", 
        "Decadent Chocolate Mousse (150g) €4.99 Ingredients: Silken tofu, cocoa powder, maple syrup, vanilla extract.", 
        "Heavenly Vegan Cheesecake (180g) €5.49 Ingredients: Cashews, coconut cream, lemon zest, agave syrup, almond crust."
    ]
           
    const content = document.getElementById("content");

    const headline = document.getElementById("headline");
    headline.innerText = "Arvin's Menu";

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    for (let i = 0; i < menu.length; i++) {
        menuSection.innerText = menu[i];
        const clonedMenuSection = menuSection.cloneNode(true);
        content.appendChild(clonedMenuSection);
    }
}