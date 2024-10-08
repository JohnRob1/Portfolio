import './App.css';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home.js';
import About from './components/About.js';
import Creations from './components/Creations.js';
import Experiences from './components/Experiences.js';

function App() {
    return (
        <div className="App">
            <header>
                <CustomCursor />
                <section>
                    <div className="content">
                        <About />
                        <Experiences />
                        <Creations />
                    </div>
                    <Home />
                </section>
            </header>
        </div>
    );
}

export default App;
