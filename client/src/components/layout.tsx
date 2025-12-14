import { Link, useLocation } from "wouter";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  Phone,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/chefs", label: "Our Chefs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>123 Gourmet Street</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-accent font-semibold">
              Free delivery on orders over $25
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo with Image */}
            <Link href="/">
              <a className="flex items-center gap-3 group">
                {/* Logo container - constrains the image */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border-2 border-emerald-400/30 group-hover:border-emerald-500 transition-colors bg-white">
                  <img
                    src={logo}
                    alt="GustoKart Logo"
                    className="max-w-[80%] max-h-[80%] object-contain" // Constrains size
                  />
                </div>

                {/* Text - now visible */}
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold text-emerald-800 tracking-tight whitespace-nowrap">
                    GustoKart
                  </span>
                  {/* <span className="text-xs text-emerald-600 font-bold uppercase tracking-widest">Gourmet Delivery</span> */}
                </div>
              </a>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      location === link.href
                        ? "text-accent font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {location === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </a>
                </Link>
              ))}
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-48 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                />
              </div>

              {/* Cart with Counter */}
              <Link href="/cart">
                <a className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group">
                  <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-accent transition-colors" />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </a>
              </Link>

              {/* User Profile */}
              <Link href="/auth">
                <a className="p-2 rounded-full hover:bg-gray-100 transition-colors group">
                  <User className="w-6 h-6 text-gray-700 group-hover:text-accent transition-colors" />
                </a>
              </Link>

              {/* Order Button */}
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 font-medium shadow-lg shadow-accent/30 hover:shadow-xl transition-all">
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-0 z-50 bg-white pt-24 px-6 lg:hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            {/* Search Bar (Mobile) */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 mb-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-medium py-3 px-4 rounded-lg transition-colors ${
                      location === link.href
                        ? "bg-accent/10 text-accent border-l-4 border-accent"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Link href="/cart">
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 flex-1"
                >
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6 text-gray-700" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">Cart</span>
                </a>
              </Link>
              <Link href="/auth">
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 flex-1"
                >
                  <User className="w-6 h-6 text-gray-700" />
                  <span className="font-medium">Account</span>
                </a>
              </Link>
            </div>

            {/* Mobile Order Button */}
            <Button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-6 text-lg font-semibold shadow-lg"
            >
              Order Now
            </Button>

            {/* Contact Info (Mobile) */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">123 Gourmet Street</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-grow pt-0">{children}</main>

      {/* Footer - Updated */}
      <footer className="bg-gradient-to-b from-emerald-50 to-white pt-16 pb-8 border-t border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400/30">
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=100&q=80"
                    alt="GustoKart Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-800">
                    GustoKart
                  </h3>
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest">
                    Gourmet Delivery
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Delivering restaurant-quality meals to your doorstep. Fresh
                ingredients, master chefs, unforgettable flavors.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-full transition-colors text-emerald-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-full transition-colors text-emerald-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-full transition-colors text-emerald-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-800">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Home",
                  "Menu",
                  "About Us",
                  "Our Chefs",
                  "Contact",
                  "Careers",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-800">Legal</h4>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Refund Policy",
                  "Delivery Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-800">
                Stay Updated
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe for recipes, tips, and exclusive offers.
              </p>
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white border border-emerald-200 rounded-full px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400"
                />
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
                >
                  Join
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-emerald-200 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} GustoKart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
