import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
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
        <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default App;