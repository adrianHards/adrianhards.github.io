import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
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
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;