import { motion } from 'framer-motion';
import { Brain, Palette, Database, Layout } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Development",
    description: "Building intelligent systems using machine learning and deep learning technologies."
  },
  {
    icon: <Layout className="w-12 h-12" />,
    title: "Frontend Development",
    description: "Creating responsive and interactive web applications with modern frameworks."
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Data Science",
    description: "Analyzing data and creating insights using statistical methods and visualization."
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Web Design",
    description: "Crafting visually engaging and user-friendly designs that provide seamless user experiences across all devices."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400">Specialized solutions tailored to your needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 p-6 rounded-xl text-white hover:bg-red-900/20 transition-colors"
            >
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
