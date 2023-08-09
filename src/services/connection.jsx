const products = [
  {
    "id": 1,
    "name": "Margherita",
    "description": ["tomato sauce", "mozzarella cheese", "fresh basil"],
    "category": "pizza",
    "price": 10.99,
    "url": "/assets/pizzas/margherita.png",
    "discount": 0,
  },
  {
    "id": 2,
    "name": "Pepperoni",
    "description": ["tomato sauce", "mozzarella cheese", "pepperoni"],
    "category": "pizza",
    "price": 12.99,
    "url": "/assets/pizzas/pepperoni.png",
    "discount": 20
  },
  {
    "id": 3,
    "name": "Vegetarian",
    "description": ["tomato sauce", "mozzarella cheese", "mushrooms", "bell peppers", "onions", "black olives"],
    "category": "pizza",
    "price": 9.99,
    "url": "/assets/pizzas/vegetarian.png",
    "discount": 0,
  },
  {
    "id": 4,
    "name": "Hawaiian",
    "description": ["tomato sauce", "mozzarella cheese", "ham", "pineapple"],
    "category": "pizza",
    "price": 11.99,
    "url": "/assets/pizzas/hawaiana.png",
    "discount": 0,
  },
  {
    "id": 5,
    "name": "Meat Lovers",
    "description": ["tomato sauce", "mozzarella cheese", "pepperoni", "sausage", "bacon", "ham"],
    "category": "pizza",
    "price": 13.99,
    "url": "/assets/pizzas/meat_lovers.png",
    "discount": 0,
  },
  {
    "id": 6,
    "name": "BBQ Chicken",
    "description": ["BBQ sauce", "mozzarella cheese", "grilled chicken", "red onions", "cilantro"],
    "category": "pizza",
    "price": 11.99,
    "url": "/assets/pizzas/bbq_chiken.png",
    "discount": 0,
  },
  {
    "id": 7,
    "name": "Mushroom",
    "description": ["tomato sauce", "mozzarella cheese", "mushrooms", "garlic", "oregano"],
    "category": "pizza",
    "price": 9.99,
    "url": "/assets/pizzas/mushroom.png",
    "discount": 0,
  },
  {
    "id": 8,
    "name": "Supreme",
    "description": ["tomato sauce", "mozzarella cheese", "pepperoni", "sausage", "bell peppers", "onions", "black olives", "mushrooms"],
    "category": "pizza",
    "price": 14.99,
    "url": "/assets/pizzas/supreme.png",
    "discount": 0,
  },
  {
    "id": 9,
    "name": "Spinach and Feta",
    "description": ["tomato sauce", "mozzarella cheese", "spinach", "feta cheese", "black olives", "garlic"],
    "category": "pizza",
    "price": 11.99,
    "url": "/assets/pizzas/spinach_feta.png",
    "discount": 0,
  },
  {
    "id": 10,
    "name": "Bruschetta",
    "description": "Toasted bread topped with fresh tomatoes, garlic, and basil.",
    "category": "starters",
    "price": 6.99,
    "url": "/assets/starters/bruchetta.png",
    "discount": 0,
  },
  {
    "id": 11,
    "name": "Mozzarella Sticks",
    "description": "Breaded and deep-fried mozzarella sticks served with marinara sauce.",
    "category": "starters",
    "price": 7.99,
    "url": "/assets/starters/moozarella_sticks.png",
    "discount": 0,
  },
  {
    "id": 12,
    "name": "Chicken Wings",
    "description": "Crispy chicken wings tossed in a choice of sauce (BBQ, buffalo, teriyaki, or honey mustard).",
    "category": "starters",
    "price": 9.99,
    "url": "/assets/starters/chicken_wings.png",
    "discount": 0,
  },
  {
    "id": 13,
    "name": "Spinach and Artichoke Dip",
    "description": "Creamy spinach and artichoke dip served with tortilla chips.",
    "category": "starters",
    "price": 8.99,
    "url": "/assets/starters/dip.png",
    "discount": 0,
  },
  {
    "id": 14,
    "name": "Nachos",
    "description": "Tortilla chips topped with melted cheese, salsa, guacamole, and sour cream.",
    "category": "starters",
    "price": 10.99,
    "url": "/assets/starters/nachos.png",
    "discount": 0,
  },
  {
    "id": 15,
    "name": "Hummus",
    "description": "Creamy chickpea dip seasoned with garlic, lemon juice, and olive oil.",
    "category": "starters",
    "price": 6.99,
    "url": "/assets/starters/hummus.png",
    "discount": 0,
  },
  {
    "id": 16,
    "name": "Chocolate Cake",
    "description": "Rich and decadent chocolate cake served with a scoop of vanilla ice cream.",
    "category": "desserts",
    "price": 7.99,
    "url": "/assets/desserts/chocolate_cake.png",
    "discount": 10,
  },
  {
    "id": 17,
    "name": "Cheesecake",
    "description": "Creamy and smooth cheesecake with a graham cracker crust, topped with strawberry sauce.",
    "category": "desserts",
    "price": 6.99,
    "url": "/assets/desserts/cheesecake.png",
    "discount": 10
  },
  {
    "id": 18,
    "name": "Apple Pie",
    "description": "Traditional apple pie with a flaky crust and warm spiced apple filling.",
    "category": "desserts",
    "price": 8.99,
    "url": "/assets/desserts/apple_pie.jpg",
    "discount": 0,
  },
  {
    "id": 19,
    "name": "Brownie Sundae",
    "description": "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
    "category": "desserts",
    "price": 9.99,
    "url": "/assets/desserts/brownie.png",
    "discount": 0,
  },
  {
    "id": 20,
    "name": "Tiramisu",
    "description": "Classic Italian dessert with layers of ladyfingers soaked in coffee and mascarpone cream.",
    "category": "desserts",
    "price": 8.99,
    "url": "/assets/desserts/tiramisu.png",
    "discount": 0,
  },
  {
    "id": 21,
    "name": "Fruit Tart",
    "description": "Buttery tart shell filled with vanilla pastry cream and topped with fresh seasonal fruits.",
    "category": "desserts",
    "price": 7.99,
    "url": "/assets/desserts/fruit_tart.png",
    "discount": 0,
  },
  {
    "id": 22,
    "name": "Key Lime Pie",
    "description": "Refreshing pie made with tangy key lime juice and a graham cracker crust.",
    "category": "desserts",
    "price": 8.99,
    "url": "/assets/desserts/lime_pie.jpg",
    "discount": 0,
  },
  {
    "id": 23,
    "name": "Panna Cotta",
    "description": "Silky Italian dessert made with sweetened cream and topped with fruit compote.",
    "category": "desserts",
    "price": 7.99,
    "url": "/assets/desserts/panna_cotta.png",
    "discount": 0,
  },
  {
    "id": 24,
    "name": "Creme Brulee",
    "description": "Classic French dessert with a rich custard base and a caramelized sugar topping.",
    "category": "desserts",
    "price": 8.99,
    "url": "/assets/desserts/creme.png",
    "discount": 0,
  },
  {
    "id": 25,
    "name": "Ice Cream Sundae",
    "description": "Scoop of vanilla ice cream topped with various sauces, nuts, whipped cream, and a cherry.",
    "category": "desserts",
    "price": 6.99,
    "url": "/assets/desserts/ice_cream.jpg",
    "discount": 0,
  }
];

function getData () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(products);      
        }, 2000);
    });
}

export function getDataProduct (id_URL) {
  return new Promise ((resolve, reject) => {
    const product = products.find((item) => item.id === parseInt(id_URL));  
    setTimeout ( () => {
        resolve(product);
      }, 2000);
  });
}

export function getDataCategory (id_category) {
  return new Promise ((resolve, reject) => {
    const new_products = products.filter((item) => {
      return item.category.toLocaleLowerCase() === id_category.toLocaleLowerCase();
    });  
    setTimeout (() => {
        resolve(new_products);
      }, 2000);
  });
}

export default getData;