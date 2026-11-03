
const $ = (id) => document.getElementById(id);

let restaurants = [
 {id:1,name:"Domino's Pizza",type:"Veg",time:"30-40 min",rating:"4.5",image:"dominos-style",desc:"Freshly baked pizzas and sides"},
 {id:2,name:"Burger House",type:"Non-Veg",time:"25-35 min",rating:"4.6",image:"burger-house",desc:"Burgers, fries and more"},
 {id:3,name:"Biryani House",type:"Both",time:"30-45 min",rating:"4.7",image:"biryani-house",desc:"Aromatic dum biryani"},
 {id:4,name:"Spice Junction",type:"Both",time:"30-40 min",rating:"4.6",image:"spice-junction",desc:"Indian favourites and starters"},
 {id:5,name:"South Cafe",type:"Veg",time:"20-30 min",rating:"4.4",image:"south-cafe",desc:"South Indian breakfast classics"},
 {id:6,name:"Sweet Treats",type:"Veg",time:"20-30 min",rating:"4.8",image:"sweet-treats",desc:"Desserts made with love"},
 {id:7,name:"Noodle Box",type:"Both",time:"25-35 min",rating:"4.3",image:"noodle-box",desc:"Noodles and Chinese delights"},
 {id:8,name:"Cafe Brew",type:"Veg",time:"20-30 min",rating:"4.5",image:"cafe-brew",desc:"Coffee, coolers and snacks"}
];
const defaultRestaurants = restaurants.map(r => ({...r}));
const savedRestaurants = JSON.parse(localStorage.getItem("foodieAdminRestaurants") || "[]");
restaurants = [...restaurants, ...savedRestaurants];

// Each item: name | price | diet | emoji | restaurant ID | description
const foodData = {
"Starters": [
["Veg Manchurian",149,"Veg","🥘",4],
["Chicken Manchurian",189,"Non-Veg","🍗",7],
["Samosa",50,"Veg","🥟",4],
["Spring Rolls",120,"Veg","🥢",7],
["Paneer 65",169,"Veg","🧀",4],
["Chicken Wings",219,"Non-Veg","🍗",2],
["Paneer Tikka",179,"Veg","🧀",4],
["Gobi Manchurian",139,"Veg","🥦",7],
["Crispy Corn",129,"Veg","🌽",4],
["Hara Bhara Kebab",149,"Veg","🥬",5],
["Chilli Paneer",189,"Veg","🌶️",4],
["Mushroom 65",169,"Veg","🍄",7],
["Chicken 65",199,"Non-Veg","🍗",2],
["Chicken Lollipop",219,"Non-Veg","🍗",2],
["Chilli Chicken",199,"Non-Veg","🌶️",7],
["Fish Fingers",209,"Non-Veg","🐟",3],
["Prawn Fry",249,"Non-Veg","🍤",3],
["Egg Pakoda",99,"Non-Veg","🥚",5],
["Veg Cutlet",89,"Veg","🥗",5],
["Cheese Balls",149,"Veg","🧀",6]
],

"Pizza": [
["Margherita Pizza",199,"Veg","🍕",1],
["Pepperoni Pizza",249,"Non-Veg","🍕",1],
["Farmhouse Pizza",279,"Veg","🍕",1],
["Paneer Tikka Pizza",289,"Veg","🍕",1],
["Veggie Supreme Pizza",299,"Veg","🍕",1],
["Corn Cheese Pizza",229,"Veg","🍕",1],
["Mushroom Pizza",259,"Veg","🍕",1],
["Onion Capsicum Pizza",219,"Veg","🍕",1],
["Double Cheese Pizza",269,"Veg","🍕",1],
["Mexican Pizza",299,"Veg","🍕",1],
["BBQ Chicken Pizza",329,"Non-Veg","🍕",1],
["Chicken Tikka Pizza",319,"Non-Veg","🍕",1],
["Peri Peri Chicken Pizza",339,"Non-Veg","🍕",1],
["Chicken Sausage Pizza",299,"Non-Veg","🍕",1],
["Chicken Supreme Pizza",359,"Non-Veg","🍕",1],
["Keema Pizza",349,"Non-Veg","🍕",1],
["Pesto Veg Pizza",289,"Veg","🍕",1],
["Tomato Basil Pizza",239,"Veg","🍕",1],
["Paneer Makhani Pizza",309,"Veg","🍕",1],
["Garlic Cheese Pizza",249,"Veg","🍕",1]
],

"Main Course": [
["Paneer Butter Masala",229,"Veg","🍛",4],
["Veg Biryani",179,"Veg","🍚",3],
["Chicken Biryani",229,"Non-Veg","🍗",3],
["Masala Dosa",99,"Veg","🥞",5],
["Idli Sambar",79,"Veg","🍲",5],
["Chicken Noodles",189,"Non-Veg","🍜",7],
["Veg Noodles",149,"Veg","🍜",7],
["Paneer Fried Rice",169,"Veg","🍚",7],
["Mushroom Biryani",199,"Veg","🍛",3],
["Kaju Biryani",219,"Veg","🍛",3],
["Veg Pulao",149,"Veg","🍚",5],
["Dal Tadka",139,"Veg","🥘",4],
["Palak Paneer",209,"Veg","🥬",4],
["Chicken Dum Biryani",249,"Non-Veg","🍗",3],
["Mutton Biryani",299,"Non-Veg","🍖",3],
["Egg Biryani",169,"Non-Veg","🥚",3],
["Chicken Fried Rice",189,"Non-Veg","🍚",7],
["Prawn Biryani",279,"Non-Veg","🍤",3],
["Butter Chicken",249,"Non-Veg","🍗",4],
["Fish Curry Rice",229,"Non-Veg","🐟",3]
],

"Burgers": [
["Classic Burger",159,"Non-Veg","🍔",2],
["Veg Burger",109,"Veg","🍔",2],
["Cheese Burger",139,"Veg","🍔",2],
["Paneer Burger",149,"Veg","🍔",2],
["Aloo Tikki Burger",99,"Veg","🍔",2],
["Mushroom Burger",149,"Veg","🍔",2],
["Double Cheese Burger",179,"Veg","🍔",2],
["Corn Burger",119,"Veg","🍔",2],
["Spicy Veg Burger",129,"Veg","🍔",2],
["Peri Peri Veg Burger",139,"Veg","🍔",2],
["Chicken Burger",169,"Non-Veg","🍔",2],
["Chicken Cheese Burger",189,"Non-Veg","🍔",2],
["Crispy Chicken Burger",179,"Non-Veg","🍔",2],
["Grilled Chicken Burger",189,"Non-Veg","🍔",2],
["BBQ Chicken Burger",199,"Non-Veg","🍔",2],
["Double Chicken Burger",229,"Non-Veg","🍔",2],
["Spicy Chicken Burger",189,"Non-Veg","🍔",2],
["Fish Burger",189,"Non-Veg","🍔",2],
["Chicken Tikka Burger",199,"Non-Veg","🍔",2],
["Chicken Supreme Burger",229,"Non-Veg","🍔",2]
],

"Sides": [
["French Fries",99,"Veg","🍟",2],
["Grilled Sandwich",129,"Veg","🥪",8],
["Potato Wedges",109,"Veg","🥔",2],
["Peri Peri Fries",119,"Veg","🍟",2],
["Cheese Fries",139,"Veg","🍟",2],
["Garlic Bread",119,"Veg","🥖",1],
["Cheese Garlic Bread",149,"Veg","🥖",1],
["Onion Rings",99,"Veg","🧅",2],
["Veg Nuggets",119,"Veg","🥗",2],
["Cheese Sandwich",119,"Veg","🥪",8],
["Coleslaw",79,"Veg","🥗",8],
["Chicken Nuggets",159,"Non-Veg","🍗",2],
["Chicken Popcorn",169,"Non-Veg","🍿",2],
["Chicken Strips",179,"Non-Veg","🍗",2],
["Chicken Sausage",139,"Non-Veg","🌭",2],
["Egg Sandwich",99,"Non-Veg","🥪",8],
["Chicken Sandwich",159,"Non-Veg","🥪",8],
["Prawn Crackers",129,"Non-Veg","🍤",7],
["Chicken Tenders",189,"Non-Veg","🍗",2],
["Masala Papad",59,"Veg","🥙",4]
],

"Desserts": [
["Chocolate Ice Cream",99,"Veg","🍨",6],
["Vanilla Ice Cream",89,"Veg","🍨",6],
["Gulab Jamun",79,"Veg","🍩",6],
["Chocolate Brownie",119,"Veg","🍫",6],
["Strawberry Ice Cream",99,"Veg","🍓",6],
["Butterscotch Ice Cream",99,"Veg","🍨",6],
["Red Velvet Cake",149,"Veg","🍰",6],
["Black Forest Cake",139,"Veg","🍰",6],
["Cheesecake",169,"Veg","🍰",6],
["Chocolate Mousse",119,"Veg","🍮",6],
["Rasgulla",69,"Veg","🍡",6],
["Rasmalai",99,"Veg","🍮",6],
["Caramel Pudding",99,"Veg","🍮",6],
["Donut",79,"Veg","🍩",6],
["Cupcake",69,"Veg","🧁",6],
["Kulfi",69,"Veg","🍦",6],
["Brownie Sundae",159,"Veg","🍨",6],
["Mango Ice Cream",99,"Veg","🥭",6],
["Pineapple Pastry",89,"Veg","🍰",6],
["Fruit Salad",99,"Veg","🍓",6]
],

"Beverages": [
["Cold Coffee",109,"Veg","☕",8],
["Fresh Lime Soda",69,"Veg","🥤",8],
["Mango Juice",79,"Veg","🥭",8],
["Orange Juice",79,"Veg","🍊",8],
["Apple Juice",89,"Veg","🍎",8],
["Lemon Mint Cooler",79,"Veg","🍋",8],
["Chocolate Milkshake",129,"Veg","🥤",8],
["Vanilla Milkshake",119,"Veg","🥤",8],
["Strawberry Milkshake",129,"Veg","🍓",8],
["Mango Lassi",89,"Veg","🥭",5],
["Sweet Lassi",69,"Veg","🥛",5],
["Buttermilk",39,"Veg","🥛",5],
["Iced Tea",79,"Veg","🧋",8],
["Green Tea",49,"Veg","🍵",8],
["Hot Coffee",59,"Veg","☕",8],
["Hot Chocolate",99,"Veg","☕",8],
["Coconut Water",59,"Veg","🥥",5],
["Rose Milk",69,"Veg","🥛",5],
["Blue Lagoon",109,"Veg","🥤",8],
["Water Bottle",20,"Veg","💧",8]
]
};

// Convert all categories into the original menu format.
let nextId = 1;

let menu = Object.entries(foodData).flatMap(([category, items]) =>
    items.map(([name, price, diet, emoji, restaurant]) => ({
        id: nextId++,
        name,
        image: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        price,
        category,
        diet,
        desc: `${name} - Fresh and delicious`,
        restaurant,
        emoji
    }))
);
const defaultMenu = menu.map(m => ({...m}));
const savedMenu = JSON.parse(localStorage.getItem("foodieAdminMenu") || "[]");
menu = [...menu, ...savedMenu];

let role = "user";
let diet = "Veg";
let currentRestaurant = 1;
let currentCategory = "All";
let cart = JSON.parse(localStorage.getItem("foodieCart") || "[]");
let orders = JSON.parse(localStorage.getItem("foodieOrders") || "[]");

function img(file) {
    const item = menu.find(m => m.image === file);
    const restaurantEmojis = {"dominos-style":"🍕","burger-house":"🍔","biryani-house":"🍛","spice-junction":"🥘","south-cafe":"🥞","sweet-treats":"🍰","noodle-box":"🍜","cafe-brew":"☕"};
    const emoji = item?.emoji || restaurantEmojis[file] || "🍽️";
    const label = item?.name || restaurants.find(r => r.image === file)?.name || "Foodie Go";
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="320">
        <rect width="100%" height="100%" rx="20" fill="#fff0e5"/>
        <circle cx="250" cy="135" r="100" fill="#ffffff"/>
        <text x="250" y="175" text-anchor="middle" font-size="105">${emoji}</text>
        <text x="250" y="285" text-anchor="middle" font-family="Arial" font-size="22" fill="#493024">${label}</text>
        </svg>`
    )}`;
}

function toast(msg) {
    $("toast").textContent = msg;
    $("toast").classList.add("show");
    setTimeout(() => $("toast").classList.remove("show"), 2200);
}

function showView(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
    const target = $(view + "View");
    if (target) target.classList.remove("hidden");

    document.querySelectorAll("[data-view]").forEach(b =>
        b.classList.toggle("active", b.dataset.view === view)
    );

    window.scrollTo({top:0, behavior:"smooth"});

    if (view === "cart") renderCart();
    if (view === "track") renderTracking();
    if (view === "admin") renderAdmin();
}

let authMode = "login";

function login() {
    const email = $("email").value.trim().toLowerCase();
    const pass = $("password").value;

    if (authMode === "signup") {
        if (role !== "user") return toast("Admin accounts cannot be created here.");
        if (!email || pass.length < 4) return toast("Enter an email and a password with at least 4 characters.");
        const users = JSON.parse(localStorage.getItem("foodieUsers") || "[]");
        if (users.some(u => u.email === email)) return toast("Email already registered. Please login.");
        users.push({ email, password: pass, role: "user" });
        localStorage.setItem("foodieUsers", JSON.stringify(users));
        localStorage.setItem("foodieUser", JSON.stringify({ email, role: "user" }));
        enterApp("user", email);
        toast("Account created successfully!");
        return;
    }

    if (role === "admin" && email === "admin@foodiego.com" && pass === "admin123") {
        localStorage.setItem("foodieUser", JSON.stringify({ email, role: "admin" }));
        enterApp("admin", "Admin");
        return;
    }

    const users = JSON.parse(localStorage.getItem("foodieUsers") || "[]");
    const validDemo = email === "user@foodiego.com" && pass === "1234";
    const found = users.find(u => u.email === email && u.password === pass);
    if (role === "user" && (validDemo || found)) {
        localStorage.setItem("foodieUser", JSON.stringify({ email, role: "user" }));
        enterApp("user", email);
        return;
    }
    toast("Login details don't match. Check the demo details or sign up.");
}

function enterApp(userRole, label) {
    $("authScreen").classList.add("hidden");
    $("app").classList.remove("hidden");
    $("welcomeUser").textContent = userRole === "admin" ? "Admin" : `Hello, ${label.split("@")[0]}!`;
    if (userRole === "admin") showView("admin");
    else { renderHome(); showView("home"); }
}

function setAuthMode(mode) {
    authMode = mode;
    $("loginForm").querySelector('button[type="submit"]').textContent = mode === "signup" ? "Create Account →" : "Login →";
    $("signupToggle").textContent = mode === "signup" ? "Already have an account? Login" : "New here? Create an account";
    $("loginHint").textContent = role === "admin" ? "Demo: admin@foodiego.com / admin123" :
        (mode === "signup" ? "Create a user account with your email and password." : "Demo: user@foodiego.com / 1234");
}
function renderHome() {
    $("categoryGrid").innerHTML = [
        ["🍕","Pizza"],["🍔","Burgers"],["🥘","Starters"],
        ["🍛","Main Course"],["🍰","Desserts"],["🥤","Beverages"],
        ["🍟","Sides"]
    ].map(c =>
        `<button class="category-card" data-category="${c[1]}"><span>${c[0]}</span>${c[1]}</button>`
    ).join("");

    $("featuredRestaurants").innerHTML =
        restaurants.slice(0,4).map(restaurantCard).join("");
}

function restaurantCard(r) {
    return `<article class="restaurant-card" data-restaurant="${r.id}">
        <img src="${img(r.image)}" alt="${r.name}">
        <div class="restaurant-info">
            <h3>${r.name}</h3>
            <p>${r.desc}</p>
            <div class="rating">★ ${r.rating} · ${r.time}</div>
        </div>
    </article>`;
}

function renderRestaurants() {
    const query = ($("restaurantSearch")?.value || "").toLowerCase();

    const list = restaurants.filter(r =>
        (r.type === "Both" || r.type === diet) &&
        r.name.toLowerCase().includes(query)
    );

    $("allRestaurants").innerHTML =
        list.map(restaurantCard).join("") ||
        "<p>No restaurants found for this filter.</p>";
}

function openRestaurant(id) {
    currentRestaurant = Number(id);
    currentCategory = "All";

    const r = restaurants.find(x => x.id === currentRestaurant);

    $("restaurantBanner").innerHTML = `
        <img src="${img(r.image)}" alt="${r.name}">
        <div>
            <h2>${r.name}</h2>
            <p>${r.desc}</p>
            <p>★ ${r.rating} · ${r.time} · Free delivery on selected orders</p>
        </div>`;

    const cats = ["All", ...Object.keys(foodData)];

    $("menuCategories").innerHTML = cats.map(c =>
        `<button class="${c==="All"?"active":""}" data-menucat="${c}">${c}</button>`
    ).join("");

    renderMenu();
    showView("menu");
}

function renderMenu() {
    const items = menu.filter(m =>
        m.restaurant === currentRestaurant &&
        m.diet === diet &&
        (currentCategory === "All" || m.category === currentCategory)
    );

    $("menuItems").innerHTML = items.map(m => `
        <article class="menu-item">
            <img src="${img(m.image)}" alt="${m.name}">
            <div class="details">
                <h3>${m.name}</h3>
                <p>${m.desc}</p>
                <strong>₹${m.price}</strong>
            </div>
            <button class="add-btn" data-add="${m.id}">ADD +</button>
        </article>
    `).join("") || "<p>No items in this category for this food preference.</p>";
}

function saveCart() {
    localStorage.setItem("foodieCart", JSON.stringify(cart));
    $("cartCount").textContent = cart.reduce((s,x) => s+x.qty, 0);
}

function addToCart(id) {
    const item = menu.find(m => m.id === Number(id));
    if (!item) return;

    const found = cart.find(x => x.id === item.id);

    if (found) found.qty++;
    else cart.push({...item, qty:1});

    saveCart();
    toast(item.name + " added to cart!");
}

function changeQty(id, delta) {
    const row = cart.find(x => x.id === Number(id));
    if (!row) return;

    row.qty += delta;

    if (row.qty <= 0) {
        cart = cart.filter(x => x.id !== row.id);
    }

    saveCart();
    renderCart();
}

function total() {
    return cart.reduce((s,x) => s + x.price*x.qty, 0);
}

function renderCart() {
    if (!cart.length) {
        $("cartItems").innerHTML = `
            <h3>Your cart is waiting for something delicious.</h3>
            <button class="primary" data-view="restaurants">Explore restaurants</button>`;
        $("billBox").innerHTML = "";
        return;
    }

    $("cartItems").innerHTML = cart.map(x => `
        <div class="cart-row">
            <img src="${img(x.image)}" alt="${x.name}">
            <div class="details">
                <h3>${x.name}</h3>
                <b>₹${x.price*x.qty}</b>
            </div>
            <div class="qty">
                <button data-qty="${x.id}" data-delta="-1">−</button>
                ${x.qty}
                <button data-qty="${x.id}" data-delta="1">+</button>
            </div>
            <button class="remove" data-remove="${x.id}">✕</button>
        </div>
    `).join("");

    const delivery = total() >= 399 ? 0 : 30;

    $("billBox").innerHTML = `
        <h2>Bill details</h2>
        <div class="bill-line"><span>Item total</span><b>₹${total()}</b></div>
        <div class="bill-line"><span>Delivery fee</span><b>₹${delivery}</b></div>
        <div class="bill-line"><span>Platform fee</span><b>₹5</b></div>
        <div class="bill-line bill-total">
            <span>To pay</span><b>₹${total()+delivery+5}</b>
        </div>
        <button class="primary full" data-view="payment">Proceed to Pay →</button>`;
}

function placeOrder() {
    if (!cart.length) {
        toast("Your cart is empty.");
        return;
    }

    const id = "FG" + Date.now().toString().slice(-6);

    const order = {
        id,
        items: cart,
        total: total() + (total() >= 399 ? 0 : 30) + 5,
        address: $("address").value,
        payment: document.querySelector('input[name="pay"]:checked').value,
        status: "Preparing",
        time: new Date().toLocaleString()
    };

    orders.unshift(order);
    localStorage.setItem("foodieOrders", JSON.stringify(orders));

    cart = [];
    saveCart();

    $("orderNumber").textContent = "Order ID: #" + id;
    $("trackAddress").textContent = order.address || "Address not entered";

    showView("success");
}

function renderTracking() {
    const latest = orders[0];

    if (!latest) {
        $("trackingCard").querySelector("h3").textContent = "No active order yet";
        $("trackAddress").textContent = "Place a demo order to see tracking here.";
        return;
    }

    $("trackingCard").querySelector("h3").textContent =
        "🚴 Your order is being prepared!";

    $("trackAddress").textContent =
        "Order #" + latest.id + " · " + latest.address;
}

function saveAdminData() {
    localStorage.setItem("foodieAdminRestaurants", JSON.stringify(restaurants.filter(r => !defaultRestaurants.some(d => d.id === r.id))));
    localStorage.setItem("foodieAdminMenu", JSON.stringify(menu.filter(m => !defaultMenu.some(d => d.id === m.id))));
}

function renderAdmin() {
    $("adminOrders").textContent = orders.length;
    $("adminRestaurantCount").textContent = restaurants.length;
    $("adminMenuCount").textContent = menu.length;
    $("adminRevenue").textContent = "₹" + orders.reduce((sum, o) => sum + Number(o.total || 0), 0);
    $("adminOrderList").innerHTML = orders.length
        ? orders.map(o => `
            <div class="admin-order-row">
              <div class="admin-order-main"><b>#${o.id}</b><p>${o.time} · ${o.payment}</p><small>${(o.items || []).map(i => `${i.name} × ${i.qty}`).join(", ")}</small><small class="admin-address">📍 ${o.address || "No address provided"}</small></div>
              <strong>₹${o.total}</strong>
              <select class="order-status" data-order-status="${o.id}">
                ${["Placed","Preparing","Out for delivery","Delivered","Cancelled"].map(s => `<option ${o.status===s?"selected":""}>${s}</option>`).join("")}
              </select>
            </div>
        `).join("")
        : '<p class="empty-admin">No orders yet. Place a demo order to see it here.</p>';

    $("adminRestaurantList").innerHTML = restaurants.map(r => `
      <div class="admin-manage-row"><div><b>${r.name}</b><p>${r.type} · ${r.time} · ${r.desc}</p></div>
      ${defaultRestaurants.some(d=>d.id===r.id) ? '<span class="admin-note">Default</span>' : `<button class="admin-delete" data-delete-restaurant="${r.id}">Remove</button>`}</div>
    `).join("");
    $("adminMenuRestaurant").innerHTML = restaurants.map(r => `<option value="${r.id}">${r.name}</option>`).join("");
    $("adminMenuList").innerHTML = menu.map(m => `
      <div class="admin-manage-row"><div><b>${m.emoji || "🍽️"} ${m.name}</b><p>${restaurants.find(r=>r.id===m.restaurant)?.name || "Restaurant"} · ${m.category} · ${m.diet}</p></div><strong>₹${m.price}</strong>
      ${defaultMenu.some(d=>d.id===m.id) ? '<span class="admin-note">Default</span>' : `<button class="admin-delete" data-delete-menu="${m.id}">Remove</button>`}</div>
    `).join("");
}

// Admin dashboard actions
document.querySelectorAll("[data-admin-tab]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll("[data-admin-tab]").forEach(b => b.classList.toggle("active", b === button));
        document.querySelectorAll(".admin-section").forEach(panel => panel.classList.add("hidden"));
        $("admin" + button.dataset.adminTab[0].toUpperCase() + button.dataset.adminTab.slice(1) + "Panel").classList.remove("hidden");
    });
});

$("restaurantAdminForm").addEventListener("submit", e => {
    e.preventDefault();
    const nextId = Math.max(0, ...restaurants.map(r => Number(r.id))) + 1;
    restaurants.push({
        id: nextId, name: $("adminRestaurantName").value.trim(),
        type: $("adminRestaurantType").value, desc: $("adminRestaurantDesc").value.trim(),
        time: $("adminRestaurantTime").value.trim(), rating: "New", image: "new-restaurant"
    });
    saveAdminData();
    e.target.reset();
    $("adminRestaurantTime").value = "25-35 min";
    renderAdmin(); renderRestaurants(); renderHome();
    toast("Restaurant added successfully!");
});

$("menuAdminForm").addEventListener("submit", e => {
    e.preventDefault();
    const nextId = Math.max(0, ...menu.map(m => Number(m.id))) + 1;
    const name = $("adminMenuName").value.trim();
    menu.push({
        id: nextId, name, image: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        price: Number($("adminMenuPrice").value), category: $("adminMenuCategory").value,
        diet: $("adminMenuDiet").value, desc: $("adminMenuDescription").value.trim() || `${name} - Fresh and delicious`,
        restaurant: Number($("adminMenuRestaurant").value), emoji: "🍽️"
    });
    saveAdminData();
    e.target.reset();
    renderAdmin(); renderMenu();
    toast("Menu item added successfully!");
});

document.addEventListener("change", e => {
    const status = e.target.closest("[data-order-status]");
    if (status) {
        const order = orders.find(o => o.id === status.dataset.orderStatus);
        if (order) {
            order.status = status.value;
            localStorage.setItem("foodieOrders", JSON.stringify(orders));
            renderAdmin();
            toast("Order status updated!");
        }
    }
});

document.addEventListener("click", e => {
    const removeRestaurant = e.target.closest("[data-delete-restaurant]");
    if (removeRestaurant) {
        const id = Number(removeRestaurant.dataset.deleteRestaurant);
        restaurants = restaurants.filter(r => r.id !== id);
        menu = menu.filter(m => m.restaurant !== id);
        saveAdminData();
        renderAdmin(); renderRestaurants(); renderHome();
        toast("Restaurant removed.");
        return;
    }
    const removeMenu = e.target.closest("[data-delete-menu]");
    if (removeMenu) {
        const id = Number(removeMenu.dataset.deleteMenu);
        menu = menu.filter(m => m.id !== id);
        saveAdminData();
        renderAdmin(); renderMenu();
        toast("Menu item removed.");
    }
});

// Main click events
document.addEventListener("click", e => {
    const v = e.target.closest("[data-view]");
    if (v) {
        showView(v.dataset.view);
        return;
    }

    const r = e.target.closest("[data-restaurant]");
    if (r) {
        openRestaurant(r.dataset.restaurant);
        return;
    }

    const a = e.target.closest("[data-add]");
    if (a) {
        addToCart(a.dataset.add);
        return;
    }

    const q = e.target.closest("[data-qty]");
    if (q) {
        changeQty(q.dataset.qty, Number(q.dataset.delta));
        return;
    }

    const rm = e.target.closest("[data-remove]");
    if (rm) {
        cart = cart.filter(x => x.id !== Number(rm.dataset.remove));
        saveCart();
        renderCart();
        return;
    }

    const cat = e.target.closest("[data-menucat]");
    if (cat) {
        currentCategory = cat.dataset.menucat;

        document.querySelectorAll("[data-menucat]").forEach(b =>
            b.classList.toggle("active", b === cat)
        );

        renderMenu();
        return;
    }

    const dietBtn = e.target.closest("[data-diet]");
    if (dietBtn) {
        diet = dietBtn.dataset.diet;

        document.querySelectorAll("[data-diet]").forEach(b =>
            b.classList.toggle("active", b.dataset.diet === diet)
        );

        renderRestaurants();
        renderMenu();
        return;
    }

    const category = e.target.closest("[data-category]");
    if (category) {
        currentCategory = category.dataset.category;
        showView("restaurants");
        renderRestaurants();
        return;
    }
});

// Login role selection
document.querySelectorAll("[data-role]").forEach(b =>
    b.addEventListener("click", () => {
        role = b.dataset.role;

        document.querySelectorAll("[data-role]").forEach(x =>
            x.classList.toggle("active", x === b)
        );

        setAuthMode("login");
        $("signupToggle").classList.toggle("hidden", role === "admin");
    })
);

$("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    login();
});
$("signupToggle").addEventListener("click", () => setAuthMode(authMode === "login" ? "signup" : "login"));

$("cartOpen").addEventListener("click", () => showView("cart"));

$("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("foodieUser");
    $("app").classList.add("hidden");
    $("authScreen").classList.remove("hidden");
    $("email").value = "";
    $("password").value = "";
    setAuthMode("login");
});

$("confirmPayment").addEventListener("click", placeOrder);
$("restaurantSearch").addEventListener("input", renderRestaurants);

renderHome();
renderRestaurants();
saveCart();
$("signupToggle").classList.toggle("hidden", role === "admin");

setTimeout(() => $("loader").classList.add("hidden"), 950);
