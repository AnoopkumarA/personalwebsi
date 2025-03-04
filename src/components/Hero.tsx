import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { LinkedinIcon, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-black" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 space-y-8 px-4"
      >
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-1xl md:text-7xl font-cinzel font-light  bg-clip-text text-transparent bg-gradient-to-b from-white to-black  text-center"
        >
          This Is
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-5xl md:text-7xl font-cinzel font-medium  bg-clip-text text-transparent bg-gradient-to-b from-white to-black  text-center"
        >
          Renjith Thomas
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl text-red-500 mb-8"
        >
          <TypeAnimation
            sequence={[
              'AI Researcher',
              2000,
              'Associate Proffessor',
              2000,
              'Innovator',
              2000,
              'Mentor',
              2000,
              'Conference Reviewer',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          
          
          <div className="flex gap-6 items-center">
            {[
              
              { icon: <LinkedinIcon size={28} />, href: "https://www.linkedin.com/in/dr-renjith-thomas-a17bb610a/" },
              { icon: <Instagram size={28} />, href: "https://www.instagram.com/ren_think_big/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}