import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Publications", href: "#publications" },
    { title: "Achievements", href: "#achievements" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-red-500"></a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex font-montaga space-x-8">
            {menuItems.map((item) => (
              <div className="relative group" key={item.title}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  {item.title}
                </a>
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff3000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-red-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden font-montaga bg-black/95 border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
