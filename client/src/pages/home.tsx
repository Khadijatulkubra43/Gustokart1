import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Clock, Flame, CheckCircle, Truck, Shield, Leaf, Mail, Clock as ClockIcon, ChefHat, Award, Users, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recipes, heroImage } from "@/lib/data";
import { useState } from "react";

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
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thanks for subscribing! We'll notify you when we launch.");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Delicious Food Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Flame className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Coming Soon to Your City</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
              Gourmet Meals
              <span className="text-accent block">Delivered Fresh</span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-10 max-w-xl leading-relaxed">
              Experience restaurant-quality meals crafted by master chefs and delivered to your door in minutes. Your culinary journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none rounded-full px-10 h-14 text-lg shadow-lg shadow-accent/30">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-10 h-14 text-lg">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Video
              </Button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start"
            >
              {["No Minimum Order", "Free Delivery", "30-Minute Guarantee"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* About GustoKart Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800"
                  alt="About GustoKart"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-gray-500">Happy Customers</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2 mb-6">
                Welcome to <span className="text-accent">GustoKart</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At GustoKart, we believe everyone deserves access to exceptional food. We're on a mission to bridge the gap between gourmet dining and home cooking by delivering chef-crafted meals made with passion.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: ChefHat, text: "Expert chefs with 10+ years experience" },
                  { icon: Leaf, text: "100% organic and locally sourced ingredients" },
                  { icon: Truck, text: "Eco-friendly packaging and delivery" },
                  { icon: Shield, text: "Quality guaranteed or your money back" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button className="rounded-full px-8 h-12">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Get gourmet meals in three easy steps. No cooking skills required!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-border/50" />
            
            {[
              {
                step: "01",
                icon: "📱",
                title: "Browse & Order",
                desc: "Choose from our curated menu of chef-designed recipes. Filter by diet, cuisine, or cooking time."
              },
              {
                step: "02",
                icon: "👨‍🍳",
                title: "We Prepare Fresh",
                desc: "Our master chefs cook your meal using fresh ingredients. Each dish is crafted with precision and care."
              },
              {
                step: "03",
                icon: "🚚",
                title: "Fast Delivery",
                desc: "Get your hot, fresh meal delivered in 30 minutes or less. Ready to eat when it arrives."
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl shadow-sm text-center border border-border/50"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="text-5xl mb-6 mt-4">{step.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">Signature Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A preview of our chef's special creations. New recipes added weekly!
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {recipes.slice(0, 4).map((recipe) => (
              <motion.div key={recipe.id} variants={item}>
                <Link href={`/recipe/${recipe.id}`}>
                  <a className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-border/50 hover:-translate-y-2">
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
                      {recipe.isPopular && (
                        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          Popular
                        </div>
                      )}
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
          
          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8 h-12">
              View Full Menu
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ingredient Quality Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold text-sm uppercase tracking-widest">Our Promise</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
                Farm to <span className="text-accent">Table</span> Quality
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                We partner with local farmers and suppliers who share our commitment to sustainability and quality. Every ingredient is carefully selected and inspected.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { percent: "100%", label: "Organic Produce" },
                  { percent: "0%", label: "Artificial Additives" },
                  { percent: "24h", label: "From Farm to Kitchen" },
                  { percent: "50+", label: "Local Partners" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <p className="text-3xl font-bold mb-2">{stat.percent}</p>
                    <p className="text-gray-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "https://images.unsplash.com/photo-1540420828642-fca2c5c18abb?auto=format&fit=crop&w=400",
                "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w-400",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400",
                "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=400"
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className={`aspect-square rounded-2xl overflow-hidden ${idx === 0 ? 'mt-8' : idx === 3 ? '-mt-8' : ''}`}
                >
                  <img 
                    src={src} 
                    alt="Ingredients" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon & Email Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 p-12 rounded-3xl border border-accent/20"
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <ClockIcon className="w-4 h-4" />
                <span className="font-bold text-sm">COMING SOON</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Launching in Your City Soon!
              </h2>
              
              <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                Be the first to experience GustoKart in your area. Sign up for early access and exclusive launch offers.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-full border-border bg-white"
                      required
                    />
                  </div>
                  <Button type="submit" className="rounded-full h-12 px-8 whitespace-nowrap">
                    <Mail className="mr-2 w-4 h-4" />
                    Notify Me
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  By subscribing, you agree to our Privacy Policy. We'll send you updates about our launch.
                </p>
              </form>

              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {[
                  { value: "10,000+", label: "Waitlist Members" },
                  { value: "5", label: "Cities Launching" },
                  { value: "$50", label: "Launch Credit" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-3xl font-bold text-primary">{item.value}</p>
                    <p className="text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">GustoKart</h3>
              <p className="text-gray-300 mb-6">
                Bringing gourmet dining to your doorstep. Fresh ingredients, master chefs, unforgettable flavors.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "How It Works", "Our Menu", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">hello@gustokart.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">123 Gourmet Street, Food City</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe for recipes, tips, and exclusive offers.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white rounded-full"
                />
                <Button size="sm" type="submit" className="rounded-full bg-accent">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} GustoKart. All rights reserved.</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

// Add this import at the top if needed
import { PlayCircle } from "lucide-react";