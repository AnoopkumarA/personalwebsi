import { BackgroundBeamsDemo } from './components/HeroBackground';
import Navbar from './components/Navbar';
import About from './components/About';
import { WorkExperience } from './components/WorkExperiences';
import { Education } from './components/Education';
import { Publications } from './components/Publications';
import { Achievements } from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      
      <Navbar />
      <BackgroundBeamsDemo />
      <About />
      <WorkExperience />
      <Education />
      <Publications />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;