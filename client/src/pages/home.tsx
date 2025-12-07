import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recipes, heroImage } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Delicious Food Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <span className="text-accent font-bold tracking-wider text-sm uppercase mb-4 block">Premium Food Delivery</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Taste the <span className="text-accent italic">Passion</span> <br />
              in Every Bite.
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Experience gourmet dining from the comfort of your home. Fresh ingredients, master chefs, and flavors that tell a story.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none rounded-full px-8 h-12 text-lg">
                View Menu
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8 h-12 text-lg">
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">Signature Dishes</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {recipes.map((recipe) => (
              <motion.div key={recipe.id} variants={item}>
                <Link href={`/recipe/${recipe.id}`}>
                  <a className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-border/50">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={recipe.image} 
                        alt={recipe.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        {recipe.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">{recipe.category}</span>
                        <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {recipe.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {recipe.name}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                        {recipe.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-primary">${recipe.price}</span>
                        <span className="text-sm font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Order Now <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: "Fresh Ingredients", desc: "We source only the finest, farm-fresh ingredients daily.", icon: "🌿" },
            { title: "Master Chefs", desc: "Our culinary team brings years of global experience.", icon: "👨‍🍳" },
            { title: "Fast Delivery", desc: "Hot and fresh food delivered to your door in minutes.", icon: "🚀" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-border/50"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
