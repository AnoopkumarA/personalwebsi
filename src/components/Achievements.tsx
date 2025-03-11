"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { HyperText } from './magicui/hyper-text';

const publicationStats = [
  { count: 5, label: "Journals" },
  { count: 7, label: "Conferences" },
  { count: 3, label: "Patents" },
  { count: 2, label: "Books" }
];

interface CounterProps {
  from: number;
  to: number;
}

function Counter({ from, to }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(count, to, {
      duration: 3,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, to, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

interface AchievementItem {
  title: string;
  description: string;
  image: string;
}

const achievementGallery: {
  leftColumn: AchievementItem[];
  middleColumn: AchievementItem[];
  rightColumn: AchievementItem[];
} = {
  leftColumn: [
    {
      title: "BITS PIlani, Dubai Campus",
      description: "Conference Paper Presentation",
      image: "/images/Achivement (1).jpeg"
    },
    {
      title: "APJAKTU_CERD_Financial Assistance to Student Projects 2024-25 ",
      description: "Awarded Amount 21,000",
      image: "/images/Achivement (3).jpeg"
    },
    {
      title: "Build With AI ",
      description: "5th Place in International Hackathon",
      image: "/images/ach (4).png"
    },
    {
      title: "Ente Keralam Showcase",
      description: "AI-based Surveillance System Demo",
      image: "/images/ach (2).png"
    }
  ],
  middleColumn: [
    
    {
      title: "NBA Accreditation",
      description: "Program Coordinator (2023-2026)",
      image: "/images/ach (10).png"
    },
    {
      title: "Build With AI",
      description: "5th Place in International Hackathon",
      image: "/images/ach (6).png"
    },
    {
      title: "Kerala Startup Mission",
      description: "₹2,00,000 Seed Funding",
      image: "/images/ach (1).png"
    },
   
    {
      title: "Kerala Startup Mission",
      description: "₹2,00,000 Seed Funding",
      image: "/images/ach (3).png"
    },
    
    
  ],
  rightColumn: [
    {
      title: "Kerala Startup Mission",
      description: "₹2,00,000 Seed Funding",
      image: "/images/ach (9).png"
    },
    {
      title: "Ente Keralam Showcase",
      description: "AI-based Surveillance System Demo",
      image: "/images/ach (5).png"
    },
    {
      title: "Kerala Startup Mission",
      description: "₹2,00,000 Seed Funding",
      image: "/images/ach (11).png"
    },
    {
      title: "Build With AI",
      description: "5th Place in International Hackathon",
      image: "/images/Achivement (2).jpeg"
    },
    {
      title: "Kerala Startup Mission",
      description: "₹2,00,000 Seed Funding",
      image: "/images/ach (7).png"
    }
    
  ]
};

export function Achievements() {
 
  const statsRef = useRef(null);
  const isInView = useInView(statsRef);

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-3xl md:text-5xl font-castoro bg-clip-text text-transparent bg-gradient-to-b from-white to-black mb-4">
            ACHIEVEMENTS
          </h2>
          <p className="text-gray-400 font-montaga mb-12 text-sm md:text-base">
            Notable accomplishments and professional milestones
          </p>

          <div ref={statsRef} className="flex flex-col md:flex-row justify-center md:gap-24 gap-8 mb-16">
            {publicationStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left"
              >
                <span className="text-3xl md:text-5xl font-castoro text-white">
                  <Counter key={`counter-${stat.label}-${isInView}`} from={0} to={stat.count} />
                </span>
                <HyperText className="text-base md:text-4xl font-castoro text-white">
                  {stat.label}
                </HyperText>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="w-full max-w-5xl px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Column - Two Equal Height Images */}
            <div className="md:col-span-4 space-y-4">
              {achievementGallery.leftColumn.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[3/4]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h4 className="text-white font-castoro text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Column - Equal Height Images */}
            <div className="md:col-span-5 space-y-4">
              {achievementGallery.middleColumn.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h4 className="text-white font-castoro text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Two Equal Height Images */}
            <div className="md:col-span-3 space-y-4">
              {achievementGallery.rightColumn.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[3/4]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h4 className="text-white font-castoro text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
} 