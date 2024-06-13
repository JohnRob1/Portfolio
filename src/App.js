import './App.css';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home.js';
import About from './components/About.js';
import Creations from './components/Creations.js';
import Experiences from './components/Experiences.js';
import GradePredictor from './components/GradePredictor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
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
                } />
                <Route path='/grade-predictor' element={<GradePredictor />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
