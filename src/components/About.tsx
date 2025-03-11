import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2 md:pl-4">
            <img
              src="../../public/images/ach (7).png"
              alt="Renjith Thomas"
              className="rounded-2xl shadow-2xl w-full max-w-[22.3rem] mx-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 text-white p-6 md:pr-8 relative -left-0 md:-left-24">
            <h2 className="text-5xl font-castoro bg-clip-text text-transparent bg-gradient-to-b from-white to-black mb-6">About Me</h2>
            <p className="text-gray-300 font-montaga text-justify mb-6 ">
            I am an academic and researcher specializing in Computer Vision, with a PhD in the field. With extensive experience in teaching, research, and mentoring, I am passionate about guiding students, supervising research projects, and contributing to curriculum development. My expertise spans machine learning, deep learning, natural language processing, and computer vision, with multiple publications in international journals and conferences.<br />
              <br />
              Beyond academia, I am actively involved in AI-driven innovations, securing patents and research grants, including funding for student projects and AI-based surveillance solutions. I have earned recognition in global AI hackathons, serve as a reviewer for IEEE and other esteemed conferences, and have contributed to the advancement of AI applications in healthcare, smart cities, and security.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Mail size={20} />
                Contact
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="../../public/pdfs/CV Renjith Thomas.pdf"
                download="CV of Renjith Thomas"
                className="flex items-center gap-2 border border-red-600 text-white px-6 py-3 rounded-full hover:bg-red-600/10 transition-colors"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
