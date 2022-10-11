import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
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
        <ProjectOne />
        <ProjectTwo />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;