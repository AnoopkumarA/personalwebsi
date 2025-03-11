"use client";

import { motion } from 'framer-motion';
import { BookOpen, Award, FileText } from 'lucide-react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const journalPublications = [
  {
    quote: "Integrating GWTM and BAT algorithm for face recognition in low-resolution images",
    name: "Thomas, R., & Rangachar, M. J. S.",
    title: [
      "The Imaging Science Journal",
      "Year: 2016",
      "Volume 64(8), Pages 441-452"
    ].join('\n')
  },
  {
    quote: "Towards Proposing Gabor Ratio Measures and Fuzzy Logic Classifier for Face Recognition",
    name: "Thomas, R., & Rangachar, M. J. S.",
    title: [
      "IEEE Access",
      "Year: 2016",
      "Volume 11(11), Pages 7200-7211"
    ].join('\n')
  },
  {
    quote: "Fractional Rider and Multi-Kernel-Based Spherical SVM for Low-Resolution Face Recognition",
    name: "Thomas, R., & Rangachar, M. J. S",
    title: [
      "Multimedia Research",
      "Year: 2019",
      "Volume 2(2), Pages 35-43"
    ].join('\n')
  },
  {
    quote: "Hybrid Optimization Based DBN for Face Recognition Using Low-Resolution Images",
    name: "Thomas, R., & Rangachar, M. J. S",
    title: [
      "Multimedia Research",
      "Year: 2018",
      "Volume 1(1), Pages 33-43"
    ].join('\n')
  }
];

const conferencePublications = [
  {
    quote: "Automated Mark Entry in Educational Institutions Using Multiple CNNs: A Case Study on Recognizing Handwritten Fractional Marks",
    name: "Sabu, D., Jose, A., Philip, J., Pranav, P., Thomas, R., & Mathew, J.",
    title: [
      "International Conference on Computational Intelligence and Network Systems (CINS)",
      "Year: 2024",
      "Pages: 1-8"
    ].join('\n')
  },
  {
    quote: "Simple Action Model: Enabling LLM to Sequential Function Calling Tool Chain",
    name: "R. S. Sen, M. Amalkrishna, R. Prithviraj, S. P. Jose, N. Joseph, & R. Thomas",
    title: [
      "International Conference on Advancement in Renewable Energy and Intelligent Systems (AREIS)",
      "Year: 2024",
      "Thrissur, India"
    ].join('\n')
  },
  {
    quote: "Automated Detection of Traffic Rule Violation using Deep Learning Techniques",
    name: "R. Thomas, A. F, A. S. John, & S. K. S",
    title: [
      " IEEE Recent Advances in Intelligent Computational Systems (RAICS)",
      "Year: 2024",
      "Kothamangalam, Kerala, India"
    ].join('\n')
  },
  {
    quote: "Face Recognition from Image Patches Using an Ensemble of CNN-Local Mesh Pattern Networks",
    name: "Thomas, R.",
    title: [
      "6th International Conference for Convergence in Technology (I2CT)",
      "Year: 2021",
      "Page: 1-5"
    ].join('\n')
  },
  {
    quote: "GWTM and Crow Search Algorithm for Face Recognition in Low-Resolution Images",
    name: "Thomas, R., & Rangachar, M. J. S.",
    title: [
      "IEEE International Conference on Advances in Computing, Communication Control and Networking (ICACCCN)",
      "Year: 2018",
      "Page: 963-970"
    ].join('\n')
  },
  {
    quote: "Genetic Algorithm Optimization and Multi-Kernel-Based Spherical SVM for Low-Resolution Face Recognition",
    name: "Thomas, R., & Rangachar, M. J. S.",
    title: [
      "Third International Conference on Contemporary Computing and Informatics (IC3I)",
      "Year: 2018"
    ].join('\n')
  }
];

const patents = [
  {
    quote: "Automated Mark Entry in Educational Institutions Using Multiple CNNs",
    name: "Panneer Selvam N, M. Sangeetha, P. Shanthi, Karthik N., G. Murugesan,Renjith Thomas, C. Partha, A. Vimala Juliet, V. R. Lakshmiprabha, K. E. Prakash, V. R.",
    title: [
      "Patent No: 2021101443",
      "Publication date: 28/04/2021",
      "Patent office : IP Australia"
    ].join('\n')
  },
  {
    quote: "AI Enabled Under Water Pollution Tracking Device",
    name: " Dr. Ajesh Fysal, Dr. Felix Mattathil Philip, Ms. Anupama Jims, Dr. Renjith Thomas",
    title: [
      "Patent No: : 6336195",
      "Publication date: : December 2023",
      "Patent office :UK Design Patent"
    ].join('\n')
  },
  {
    quote: "Smart HealthCare Monitoring Apparatus",
    name: "Asha Susan John, Amjith Noushad, Richu Jacob Johnson, Bibin Binu, Lijesh L,Renjith Thomas",
    title: [
      "Patent No:  424211-001",
      "Cbr Date: 22/07/2024 19:41:17",
      "Patent office : Certificate of Registration of Design, The Patent Office Government of India"
    ].join('\n')
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-3xl md:text-5xl font-castoro bg-clip-text text-transparent bg-gradient-to-b from-white to-black mb-4">
            PUBLICATIONS
          </h2>
          <p className="text-gray-400 font-montaga text-sm md:text-base">
            Research contributions and intellectual property
          </p>
        </motion.div>

        <div className="space-y-16 w-full max-w-6xl">
          <div>
            <div className="mb-10">
              <h3 className="text-[1.6rem] md:text-4xl font-castoro text-red-500 inline-block relative">
                JOURNALS
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
              </h3>
            </div>
            <InfiniteMovingCards items={journalPublications} direction="left" speed="slow" />
          </div>

          <div>
            <div className="mb-10">
              <h3 className="text-[1.6rem] md:text-4xl font-castoro text-red-500 inline-block relative">
                CONFERENCES
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
              </h3>
            </div>
            <InfiniteMovingCards items={conferencePublications} direction="right" speed="slow" />
          </div>
          <div className="space-y-16 w-full max-w-6xl">
          <div>
            <div className="mb-10">
              <h3 className="text-[1.6rem] md:text-4xl font-castoro text-red-500 inline-block relative">
                PATENTS
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
              </h3>
            </div>
            <InfiniteMovingCards items={journalPublications} direction="left" speed="slow" />
          </div>

          <div>
            <div className="mb-10">
              <h3 className="text-[1.6rem] md:text-4xl font-castoro text-red-500 inline-block relative">
                BOOKS
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
              </h3>
            </div>
            <InfiniteMovingCards items={conferencePublications} direction="right" speed="slow" />
          </div>

          </div>
          
        </div>
      </div>
    </section>
  );
} 