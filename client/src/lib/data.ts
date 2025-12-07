import heroImage from "@assets/generated_images/gustokart_hero_food_spread.png";
import biryaniImage from "@assets/generated_images/chicken_biryani_dish.png";
import karahiImage from "@assets/generated_images/chicken_karahi_dish.png";
import pastaImage from "@assets/generated_images/gourmet_pasta_dish.png";
import bbqImage from "@assets/generated_images/bbq_platter.png";
import chefImage from "@assets/generated_images/professional_chef_portrait.png";

export interface Ingredient {
  name: string;
  price: number;
  selected?: boolean;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  time: string;
  calories: string;
  rating: number;
  ingredients: Ingredient[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Royal Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken and caramelized onions.",
    price: 12.99,
    image: biryaniImage,
    category: "Rice",
    time: "45 mins",
    calories: "650 kcal",
    rating: 4.9,
    ingredients: [
      { name: "Extra Raita", price: 1.5 },
      { name: "Double Chicken", price: 4.0 },
      { name: "Fried Onions", price: 0.5 },
    ],
    steps: [
      "Marinate chicken with yogurt and spices.",
      "Par-boil basmati rice with whole spices.",
      "Layer chicken and rice in a pot.",
      "Dum cook on low heat for 20 minutes."
    ]
  },
  {
    id: "2",
    name: "Lahori Chicken Karahi",
    description: "Spicy and tangy chicken cooked in a wok with fresh tomatoes and ginger.",
    price: 14.99,
    image: karahiImage,
    category: "Curry",
    time: "30 mins",
    calories: "550 kcal",
    rating: 4.8,
    ingredients: [
      { name: "Butter Naan", price: 2.0 },
      { name: "Extra Gravy", price: 1.5 },
      { name: "Green Chilies", price: 0.0 },
    ],
    steps: [
      "Stir fry chicken in oil until golden.",
      "Add tomatoes, ginger, and garlic.",
      "Cook on high heat until oil separates.",
      "Garnish with coriander and ginger."
    ]
  },
  {
    id: "3",
    name: "Creamy Alfredo Pasta",
    description: "Fettuccine pasta tossed in a rich parmesan and cream sauce.",
    price: 11.99,
    image: pastaImage,
    category: "Pasta",
    time: "25 mins",
    calories: "700 kcal",
    rating: 4.7,
    ingredients: [
      { name: "Grilled Chicken", price: 3.0 },
      { name: "Mushrooms", price: 1.5 },
      { name: "Extra Cheese", price: 2.0 },
    ],
    steps: [
      "Boil pasta until al dente.",
      "Prepare sauce with butter, cream, and parmesan.",
      "Toss pasta in sauce.",
      "Top with parsley and black pepper."
    ]
  },
  {
    id: "4",
    name: "Smoky BBQ Platter",
    description: "Assortment of grilled kebabs and tikkas served with mint chutney.",
    price: 19.99,
    image: bbqImage,
    category: "Grill",
    time: "40 mins",
    calories: "800 kcal",
    rating: 4.9,
    ingredients: [
      { name: "Extra Skewer", price: 4.0 },
      { name: "Hummus", price: 2.5 },
      { name: "Pita Bread", price: 1.5 },
    ],
    steps: [
      "Marinate meat overnight.",
      "Skewer and grill over charcoal.",
      "Baste with butter regularly.",
      "Serve hot with chutneys."
    ]
  }
];

export const chefs = [
  {
    id: "1",
    name: "Chef Antonio",
    role: "Head Chef",
    image: chefImage,
    bio: "Expert in fusion cuisine with over 15 years of experience."
  }
];

export { heroImage };
