import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [, setLocation] = useLocation();

  const deliveryFee = 5.00;
  const finalTotal = cartTotal > 0 ? cartTotal + deliveryFee : 0;

  if (items.length === 0) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any delicious meals yet.</p>
        <Button onClick={() => setLocation("/")} size="lg" className="bg-accent hover:bg-accent/90 text-white">
          Browse Menu
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.recipe.image} alt={item.recipe.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-1">{item.recipe.name}</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    {item.selectedIngredients.length > 0 ? (
                      <span className="flex flex-wrap gap-1 justify-center md:justify-start">
                        {item.selectedIngredients.map(i => (
                          <span key={i.name} className="bg-secondary/30 px-2 py-0.5 rounded text-xs">{i.name}</span>
                        ))}
                      </span>
                    ) : (
                      <span>Standard Recipe</span>
                    )}
                  </div>
                  <div className="font-bold text-accent text-lg">
                    ${((item.recipe.price + item.selectedIngredients.reduce((s, i) => s + i.price, 0)) * item.quantity).toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-white rounded-md transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-primary">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-white rounded-md transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border sticky top-28">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t border-dashed border-gray-200 my-4" />
                <div className="flex justify-between text-xl font-bold text-primary">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                onClick={() => setLocation("/checkout")}
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-xl"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
