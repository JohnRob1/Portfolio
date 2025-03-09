import './App.css';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home.js';
import About from './components/About.js';
import Content from './components/Content';

function App() {
    return (
        <div className="App">
            <header>
                <CustomCursor />
                <section>
                    <div className="content">
                        <About />
                        <Content />
                    </div>
                    <Home />
                </section>
            </header>
        </div>
    );
}

export default App;
