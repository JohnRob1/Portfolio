import './App.css';
import Home from "./Home.js";
import Sections from "./Sections.js";

function App() {
  return (
    <div className="App">
        <header>
            <section>
                <Home />
                <Sections/>
            </section>
        </header>
    </div>
  );
}

export default App;