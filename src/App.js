import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import ProjectsFirst from './components/ProjectsFirst';
import ProjectsSecond from './components/ProjectsSecond';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <ProjectsFirst />
        <ProjectsSecond />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;