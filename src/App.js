
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'; 
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div >
      <header>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> </a>
        <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
      </header>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
