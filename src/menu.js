function menu() {
    let container = document.getElementById('content');

    container.innerHTML = '';
    
    let header = document.createElement('h1');
    header.textContent = "MENU*";
    container.appendChild(header);

    let headerDish = document.createElement('h4');
    headerDish.textContent = "Dish Of The Day";
    container.appendChild(headerDish);

    let dish = document.createElement('p');
    dish.textContent = "A very obliging Ameglian Major Cow and a somewhat less obliging vegetables in a green salad. Many cuts are available, including shoulder braised in white wine sauce, grain fed rump, casserole, liver and steaks. ";
    container.appendChild(dish);

    let headerDrinks = document.createElement('h4');
    headerDrinks.textContent = "Drinks";
    container.appendChild(headerDrinks);

    let drinks = document.createElement('p');
    drinks.textContent = "🍷 Insidious Wines \r\n🥃 Aldebaran liqueurs\n🍹 Pan Galactic Gargle Blasters\n🍾 Champagne\n 🥤 Mineral Water\n☕ Tea (unavailable)";
    container.appendChild(drinks);
    
    let cost = document.createElement('p');
    cost.textContent = "*All meals cost only 1 penny, as by the end of the universe, the compound interest over 170+ quintillion years will be sufficient to pay the extremely high bill.";
    cost.setAttribute("id", "cost");
    container.appendChild(cost);
    };
    
    export default menu;