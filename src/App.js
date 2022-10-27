import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
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
        <Project />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />

      <div id="preload-gifs">
        <div class="bg-context-gif h-screen"></div>
        <div class="bg-reminder-gif"></div>
      </div>

    </div>
  );
}

export default App;