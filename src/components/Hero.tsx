import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { LinkedinIcon, Instagram } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOrcid, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Add the icons to the library
library.add(faOrcid, faGoogleScholar);

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
              { 
                icon: <FontAwesomeIcon 
                  icon={faOrcid} 
                  className="w-7 h-7 hover:text-red-500 transition-colors" 
                />, 
                href: "https://orcid.org/0000-0002-1038-9596" 
              },
              { 
                icon: <FontAwesomeIcon 
                  icon={faGoogleScholar} 
                  className="w-7 h-7 hover:text-red-500 transition-colors" 
                />, 
                href: "https://scholar.google.com/citations?user=TkGUNxEAAAAJ&hl=en" 
              },
              { 
                icon: <img 
                  src="data:image/png;base64,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" 
                  alt="ImageKit" 
                  className="w-32 h-auto filter brightness-75 hover:text-red-500 transition-colors"
                />,
                href: "https://www.webofscience.com/wos/author/rid/AAW-2156-2021" 
              },
              { 
                icon: <img 
                  src="https://media-hosting.imagekit.io//13daa38784aa459e/download-removebg-preview.png?Expires=1836134716&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q0yAMj05l44ty9ENwALxlhKwNb~ZTgV53Jq~dofGxyfhZ-iRX92nxr-fumzjImTxhAoPe7JOFD~fz~Mp5HW7ELLhuh~2fGkGZy6TOg28lLx4SBE05gly14fth7IFixF~AfTCB7qT7FM70ur-9q3iK~u7HfMdp7r~wPtsQt8CVnZbfwq1ms2AoNpvMdqYrQMlarngAyluayeQbYzR7ySBiT-WTGah4aVTXelxROJTm5efyyVY98Lvd0sEWnUzPdcaH3cAX0isx69nOJpOgkT5I-pjWLVvUyS8gyAzdJ3~5HvBx1ILpd5XbpMk2ELzAkKYRB8ggEqRqqx9Bb7cfXV~AA__" 
                  alt="ImageKit" 
                  className="w-7 h-7 filter brightness-75 hover:text-red-500 transition-colors"
                />,
                href: "https://www.scopus.com/authid/detail.uri?authorId=57192674628" 
              },
              
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