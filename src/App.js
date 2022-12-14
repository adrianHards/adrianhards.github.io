import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll'

const App = () => {

  return (
    <div className="App" class="ml-[12%] mr-[12%] lg:ml-[15%] lg:mr-[15%]">
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

    </div>
  );
}

export default App;