import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' id="home">
          <Navbar /> {/* Navbar component */}
          <Hero /> {/* Hero component */}
        </div>
        <About /> {/* About section */}
        <div id="education">
          <Tech /> {/* Education section (Tech component) */}
        </div>
        <div id="projects">
          <Works /> {/* Projects section */}
        </div>
        <div id="profession">
          <Experience /> {/* Profession section */}
        </div>
        <Feedbacks /> {/* Feedback section */}
        <div className='relative z-0'>
          <Contact /> {/* Contact section */}
          <StarsCanvas /> {/* Canvas component */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
