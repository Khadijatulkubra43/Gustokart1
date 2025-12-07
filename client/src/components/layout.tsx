import { Link, useLocation } from "wouter";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? "text-white" : "text-primary"}`}>
              GustoKart<span className="text-accent">.</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location === link.href
                      ? "text-accent"
                      : isScrolled
                      ? "text-gray-200"
                      : "text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/cart">
              <a className="relative p-2 rounded-full hover:bg-white/10 transition-colors group">
                <ShoppingCart className={`w-5 h-5 transition-colors ${isScrolled ? "text-white" : "text-primary"} group-hover:text-accent`} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </a>
            </Link>
            <Link href="/auth">
              <a className="p-2 rounded-full hover:bg-white/10 transition-colors group">
                <User className={`w-5 h-5 transition-colors ${isScrolled ? "text-white" : "text-primary"} group-hover:text-accent`} />
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-white" : "text-primary"} />
            ) : (
              <Menu className={isScrolled ? "text-white" : "text-primary"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="flex gap-6 mt-4">
                <Link href="/cart">
                  <a onClick={() => setIsMobileMenuOpen(false)} className="relative p-2">
                    <ShoppingCart className="w-8 h-8 text-white" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </a>
                </Link>
                <Link href="/auth">
                  <a onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <User className="w-8 h-8 text-white" />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">GustoKart<span className="text-accent">.</span></h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering gourmet experiences to your doorstep. Taste the passion in every bite.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/"><a className="hover:text-white">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white">About Us</a></Link></li>
              <li><Link href="/menu"><a className="hover:text-white">Menu</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">Subscribe for latest updates and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-none rounded px-3 py-2 text-sm w-full focus:ring-1 focus:ring-accent outline-none"
              />
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-white border-none">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} GustoKart. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
