import { motion } from 'framer-motion';

const skills = [
  { name: "React", level: 80 },
  { name: "Python", level: 95 },
  { name: "JavaScript", level: 92 },
  { name: "ML", level: 98 },
  { name: "Data Science", level: 97 },
  { name: "HTML/CSS", level: 95 }
];

const CircularProgress = ({ skill }: { skill: typeof skills[0] }) => {
  const radius = 55; // Increase radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-38 h-38" // Adjust size of container
    >
      <svg width="120" height="120" className="transform -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="currentColor"
          strokeWidth="6" // Reduced stroke width
          fill="transparent"
          className="text-gray-800"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="currentColor"
          strokeWidth="6" // Reduced stroke width
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-red-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white">{skill.level}%</span>
        <span className="text-sm text-gray-400 mt-1">{skill.name}</span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center">
              <CircularProgress skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
