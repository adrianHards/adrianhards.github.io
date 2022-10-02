import './App.css';

import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
