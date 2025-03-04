import { motion } from 'framer-motion';
import { PinContainer } from '../components/ui/3d-pin';

const projects = [
  {
    title: "EchoChat: An AI Chatbot",
    category: "Artificial Intelligence, NLP, RAG",
    description: "An AI-powered chatbot that uses NLP and RAG to provide context-aware, and personalized conversations based on the trained PDF data. Built as a part of Pathway AI Bootcamp hosted by G Tech Mulearn.",
    link: "https://github.com/chriz-ty/EchoChat-An_AI_ChatBot",
    image: "chatbot.png"
  },
  {
    title: "Multilingual Translator",
    category: "AI, NLP",
    description: "Real-time language translation across multiple languages.",
    link: "#",
    image: "https://aijourn.com/wp-content/uploads/2024/06/1673551479964-780x470.jpg"
  },
  {
    title: "ChromaRide3D",
    category: "OpenCv.js, Three.js",
    description: "Contributed in building a 3D color-themed environment synced with user's attire. Built as a part of a Makeathon project hosted by TinkerHub.",
    link: "https://chroma-ride3d.vercel.app/", 
    image: "https://eastgate-software.com/wp-content/uploads/2023/08/computer-vision.png"
  },
  {
    title: "ASME SJCET Website",
    category: "Web Development",
    description: "Contributed on building the official website for ASME SJCET chapter.",
    link: "https://asme-sjcet.vercel.app/",
    image: "https://media.konfhub.com/a45099f9-c959-46d6-bdf2-2a86f4db675d/thumbnail/poster_thumbnail.png"
  },
  {
    title: "NASA Hackathon Project",
    category: "ReactJs, Three.js",
    description: "A hackathon project hosted as a part of Space Apps Challenge in collaboration with NASA's research team.",
    link: "https://github.com/chriz-ty/NASA-Hackathon-SolarSystem",
    image: "https://cdn.mos.cms.futurecdn.net/uVwrSjfVvkGwk9y6zNJMob.jpg"
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-gray-400">Recent projects I've worked on</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16">
          {projects.map((project, index) => (
            <PinContainer
              key={index}
              title={project.title}
              href={project.link}
              containerClassName="relative group/pin z-50 cursor-pointer"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="font-bold text-base text-slate-100">{project.title}</h3>
                <p className="text-slate-500">{project.category}</p>
                <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                <img src={project.image} alt="image" />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
