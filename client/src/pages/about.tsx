import { motion } from "framer-motion";
import { chefs } from "@/lib/data";

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GustoKart began with a simple mission: to bring authentic, high-quality flavors to your dining table. 
            We believe that food is not just sustenance, but an emotion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-primary/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Tradition of Excellence</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, GustoKart started as a small family kitchen. Today, we are proud to serve thousands of happy customers with the same love and dedication.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our chefs meticulously select every ingredient, ensuring that only the freshest produce and finest spices make it into your meal. We don't just cook food; we craft experiences.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary/30 p-6 rounded-xl">
                <h4 className="font-bold text-primary text-2xl mb-1">15+</h4>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-xl">
                <h4 className="font-bold text-primary text-2xl mb-1">50k+</h4>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chefs Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Meet Our Chefs</h2>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {chefs.map((chef) => (
              <motion.div 
                key={chef.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-border"
              >
                <div className="h-80 overflow-hidden">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary">{chef.name}</h3>
                  <p className="text-accent text-sm font-bold uppercase tracking-wider mb-4">{chef.role}</p>
                  <p className="text-gray-500 text-sm italic">{chef.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
