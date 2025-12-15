import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { recipes, Ingredient } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Clock, Flame, Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function RecipeDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();
  
  const recipe = recipes.find((r) => r.id === id);
  
  // State for selected ingredients (default all selected or none? Let's say none for extras)
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);

  if (!recipe) return <NotFound />;

  const toggleIngredient = (ingredient: Ingredient) => {
    if (selectedIngredients.find(i => i.name === ingredient.name)) {
      setSelectedIngredients(prev => prev.filter(i => i.name !== ingredient.name));
    } else {
      setSelectedIngredients(prev => [...prev, ingredient]);
    }
  };

  const totalPrice = recipe.price + selectedIngredients.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-secondary/50"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-primary shadow-lg">
              {recipe.category}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                <Clock className="w-4 h-4" /> {recipe.time}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                <Flame className="w-4 h-4" /> {recipe.calories}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-accent">
                <Star className="w-4 h-4 fill-accent" /> {recipe.rating}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {recipe.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {recipe.description}
            </p>

            {/* Preparation Steps */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4 font-serif">Preparation</h3>
              <ul className="space-y-2 list-disc pl-5 text-gray-600">
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Extras / Ingredients */}
            <div className="mb-8 bg-secondary/20 p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-primary mb-4 font-serif">Customize Your Order</h3>
              <div className="space-y-3">
                {recipe.ingredients.map((ing) => (
                  <div key={ing.name} className="flex items-center justify-between p-3 bg-white rounded-xl border border-transparent hover:border-accent/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id={ing.name} 
                        checked={!!selectedIngredients.find(i => i.name === ing.name)}
                        onCheckedChange={() => toggleIngredient(ing)}
                        className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <label
                        htmlFor={ing.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {ing.name}
                      </label>
                    </div>
                    <span className="text-sm font-bold text-primary">+${ing.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-auto pt-6 border-t border-border flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Price</p>
                <p className="text-3xl font-bold text-primary">${totalPrice.toFixed(2)}</p>
              </div>
              <Button 
                size="lg" 
                className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 rounded-xl text-lg"
                onClick={() => addToCart(recipe, selectedIngredients)}
              >
                <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
