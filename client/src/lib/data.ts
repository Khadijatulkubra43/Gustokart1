import heroImage from "@assets/generated_images/gustokart_hero_food_spread.png";
import biryaniImage from "@assets/generated_images/chicken_biryani_dish.png";
import karahiImage from "@assets/generated_images/chicken_karahi_dish.png";
// import pastaImage from "@assets/generated_images/gourmet_pasta_dish.png";
// import bbqImage from "@assets/generated_images/bbq_platter.png";
import chefImage from "@assets/generated_images/professional_chef_portrait.png";
import haleem from "../../public/Haleem.png"
import korma from "../../public/korma.png"
import nihari from "../../public/nihari.png"

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
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken and caramelized onions.",
    price: Rs: 1595,
    image: biryaniImage,
    category: "Rice",
    time: "45 mins",
    calories: "650 kcal",
    rating: 4.9,
    ingredients: [
     { name: "Basmati Rice", price: 320 },
  { name: "Chicken", price: 450 },
  { name: "Oil / Ghee", price: 160 },
  { name: "Onions", price: 90 },
  { name: "Tomatoes", price: 70 },
  { name: "Yogurt", price: 85 },
  { name: "Ginger Garlic Paste", price: 65 },
  { name: "Salt", price: 10 },
  { name: "Cumin Seeds", price: 30 },
  { name: "Cloves", price: 25 },
  { name: "Black Peppercorns", price: 25 },
  { name: "Green Cardamom", price: 45 },
  { name: "Black Cardamom", price: 35 },
  { name: "Bay Leaves", price: 20 },
  { name: "Cinnamon Sticks", price: 30 },
  { name: "Red Chili Powder", price: 25 },
  { name: "Turmeric Powder", price: 20 },
  { name: "Ground Coriander", price: 30 },
  { name: "Ground Cumin", price: 30 },
  { name: "Garam Masala", price: 45 },
  { name: "Green Chilies", price: 20 },
  { name: "Fresh Coriander (Cilantro)", price: 25 },
  { name: "Mint Leaves", price: 25 },
  { name: "Fried Onions (Birista)", price: 60 },
  { name: "Dried Prunes (Aloo Bukhara)", price: 45 },
  { name: "Lemon Juice / Slices", price: 20 },
  { name: "Food Coloring / Kewra Essence", price: 30 },
  { name: "Potatoes (Optional)", price: 40 }
    ],
    steps: [
      "Wash and soak basmati rice for 30 minutes",
      "Boil water with salt and whole spices, then cook rice until 70% done and drain",
      "Heat oil in a pan, fry onions until golden brown",
      "Add ginger- garlic paste and sauté",
      "Add tomatoes and cook until soft",
      "Mix in yogurt and spices(red chili, turmeric, coriander, cumin, garam masala)",
      "Add chicken or beef and cook until tender",
      "Add green chilies and adjust salt",
      "In a heavy - bottomed pot, layer partially cooked rice over meat curry",
      "Sprinkle fried onions, mint, and coriander leaves",
      "Add dried prunes and potatoes if using",
      "Optionally add yellow food coloring and kewra / biryani essence",
      "Cover tightly and cook on low heat(dum) until rice and meat are fully cooked",
      "Garnish with lemon slices, extra fried onions, and fresh herbs",
      "Serve hot with raita or salad"
    ]
  },
  {
    id: "2",
    name: "Chicken Karahi",
    description: "Spicy and tangy chicken cooked in a wok with fresh tomatoes and ginger.",
    price: Rs: 1320,
    image: karahiImage,
    category: "Curry",
    time: "30 mins",
    calories: "550 kcal",
    rating: 4.8,
    ingredients: [
    { name: "Chicken", price: 480 },
  { name: "Tomatoes", price: 180 },
  { name: "Oil / Ghee", price: 190 },
  { name: "Ginger Garlic Paste", price: 90 },
  { name: "Green Chillies", price: 45 },
  { name: "Salt", price: 10 },
  { name: "Red Chilli Powder", price: 45 },
  { name: "Black Pepper", price: 40 },
  { name: "Cumin", price: 30 },
  { name: "Coriander Powder", price: 35 },
  { name: "Garam Masala", price: 55 },
  { name: "Fresh Coriander", price: 35 },
  { name: "Ginger (Julienne)", price: 30 },
  { name: "Lemon (Optional)", price: 20 },
  { name: "National Karahi Masala Mix (Optional)", price: 35 }
    ],
    steps: [
      "Heat oil or ghee in a karahi or pan",
      "Fry onions until soft (if using)",
      "Add ginger-garlic paste and sauté",
      "Add chicken and cook until lightly browned",
      "Add tomatoes and green chilies",
      "Mix in salt and spices (red chili, black pepper, cumin, coriander, garam masala)",
      "Add optional National Karahi Masala Mix if using",
      "Cook until chicken is fully cooked and oil separates",
      "Garnish with fresh coriander, ginger julienne, and lemon slices",
      "Serve hot with naan, roti, or rice",
    ]
  },
  {
    id: "3",
    name: "Nihari",
    description: "A rich, slow-cooked Pakistani beef stew infused with aromatic spices.",
    price: RS: 2145,
    image: nihari,
    category: "Nihari",
    time: "25 mins",
    calories: "700 kcal",
    rating: 4.7,
    ingredients: [
       { name: "Beef Shank (Nihari Cut)", price: 820 },
  { name: "Marrow Bones", price: 260 },
  { name: "Oil / Ghee", price: 240 },
  { name: "Onions (Optional)", price: 90 },
  { name: "Ginger Garlic Paste", price: 110 },
  { name: "Wheat Flour (Atta) for Thickening", price: 40 },
  { name: "Salt", price: 15 },
  { name: "Red Chilli Powder", price: 55 },
  { name: "Turmeric", price: 35 },
  { name: "Coriander Powder", price: 55 },
  { name: "Fennel (Saunf)", price: 40 },
  { name: "Cloves", price: 35 },
  { name: "Cinnamon", price: 35 },
  { name: "Black Cardamom", price: 55 },
  { name: "Green Cardamom", price: 55 },
  { name: "Bay Leaf", price: 30 },
  { name: "Black Pepper", price: 55 },
  { name: "Nutmeg + Mace (Jaifal + Javitri)", price: 75 },
  { name: "Ginger (Julienne)", price: 45 },
  { name: "Fresh Coriander", price: 45 },
  { name: "Green Chillies", price: 45 },
  { name: "Lemon", price: 35 },

  { name: "Nihari Masala (Ready-Made, Optional)", price: 60 }
    ],
    steps: [
      "Heat oil or ghee in a heavy-bottomed pot",
      "Fry onions if using",
      "Add ginger-garlic paste and sauté",
      "Add beef shank and marrow bones",
      "Mix in salt and all the spices",
      "Add wheat flour (atta) for thickening",
      "Pour in water and bring to a boil",
      "Simmer on low heat for several hours until meat is tender",
      "Add optional ready-made Nihari masala if desired",
      "Garnish with ginger julienne, fresh coriander, lemon slices, and green chilies",
      "Serve hot with naan or paratha",
    ]
  },
  {
    id: "4",
    name: "Korma",
    description: "A creamy, mildly spiced South Asian curry made with meat , yogurt, and aromatic spices.",
    price: Rs:1430,
    image: korma,
    category: "korma",
    time: "40 mins",
    calories: "800 kcal",
    rating: 4.9,
    ingredients: [
     { name: "Chicken or Beef", price: 500 },
  { name: "Oil / Ghee", price: 170 },
  { name: "Onions (Fried, Crushed)", price: 120 },
  { name: "Yogurt", price: 90 },
  { name: "Ginger Garlic Paste", price: 80 },
  { name: "Almonds / Cashews Paste (Optional)", price: 110 },
  { name: "Kewra Water (Optional)", price: 20 },
  { name: "Salt", price: 10 },
  { name: "Red Chilli Powder", price: 40 },
  { name: "Turmeric", price: 25 },
  { name: "Coriander Powder", price: 40 },
  { name: "Garam Masala", price: 50 },
  { name: "Black Cardamom", price: 30 },
  { name: "Green Cardamom", price: 30 },
  { name: "Cloves", price: 25 },
  { name: "Cinnamon", price: 25 },
  { name: "Bay Leaf", price: 20 },
  { name: "Black Pepper", price: 25 },
  { name: "Nutmeg + Mace (Jaifal + Javitri)", price: 20 }
    ],
    steps: [
      "Heat oil or ghee in a pan",
      "Fry onions until golden brown",
      "Add ginger-garlic paste and sauté",
      "Add chicken or beef and cook until lightly browned",
      "Add yogurt and mix well",
      "Add salt and spices (red chili, turmeric, coriander, garam masala, cardamoms, cloves, cinnamon, bay leaf, black pepper, nutmeg + mace)",
      "Add optional kewra water and almond/cashew paste for richness",
      "Simmer on low heat until meat is tender and gravy is thick",
      "Garnish with fresh coriander (optional)",
      "Serve hot with naan, roti, or rice",
    ]
  },
  {
    id: "5",
    name: "Haleem",
    description: "A thick, savory porridge of meat, lentils, and wheat, slow-cooked with spices for a rich, hearty flavor.",
    price: Rs:1870,
    image: haleem,
    category: "haleem",
    time: "40 mins",
    calories: "800 kcal",
    rating: 4.9,
    ingredients: [
    { name: "Beef / Chicken", price: 620 },
  { name: "Wheat Grains (Cracked Wheat / Dalia)", price: 180 },
  { name: "Barley", price: 140 },
  { name: "Mixed Lentils (Chana, Masoor, Moong, Mash)", price: 220 },
  { name: "Oats (Optional)", price: 90 },
  { name: "Oil / Ghee", price: 230 },
  { name: "Fried Onions", price: 160 },
  { name: "Ginger Garlic Paste", price: 95 },
  { name: "Salt", price: 15 },
  { name: "Red Chilli Powder", price: 55 },
  { name: "Turmeric", price: 35 },
  { name: "Coriander Powder", price: 55 },
  { name: "Garam Masala", price: 65 },
  { name: "Cumin", price: 35 },
  { name: "Nihari / Haleem Masala (Optional)", price: 70 },
  { name: "Ginger (Julienne, Garnish)", price: 40 },
  { name: "Fresh Coriander (Garnish)", price: 45 },
  { name: "Green Chillies (Garnish)", price: 45 },
  { name: "Lemon (Garnish)", price: 35 },
  { name: "Chaat Masala (Optional, Garnish)", price: 40 }
    ],
    steps: [
      "Heat oil or ghee in a large pot",
      "Fry onions until golden brown",
      "Add ginger-garlic paste and sauté",
      "Add chicken or beef and cook until lightly browned",
      "Add all lentils, wheat, barley, and oats (if using)",
      "Mix in salt and all spices (red chili, turmeric, coriander, garam masala, cumin)",
      "Add water and simmer on low heat until meat and grains are fully cooked and blended",
      "Add optional  Haleem masala if desired",
      "Blend or mash mixture to desired consistency",
      "Garnish with fried onions, ginger julienne, fresh coriander, lemon, green chilies, and optional chaat masala",
      "Serve hot with naan, roti, or rice",
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
