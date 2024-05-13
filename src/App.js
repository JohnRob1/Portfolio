import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Creations from './components/Creations.js';
import Experiences from './components/Experiences.js';

function App() {
  return (
    <div className="App">
        <header>
            <section>
                <div className="content">
                    <About />
                </div> 
                <Home />
            </section>
        </header>
    </div>
  );
}

export default App;
