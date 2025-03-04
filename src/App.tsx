import { BackgroundBeamsDemo } from './components/HeroBackground';
import Navbar from './components/Navbar';
import About from './components/About';
import { WorkExperience } from './components/WorkExperiences';
import { Education } from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      
      <Navbar />
      <BackgroundBeamsDemo />
      <About />
      <WorkExperience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;