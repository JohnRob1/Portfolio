import './App.css';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home.js';
import About from './components/About.js';
import Creations from './components/Creations.js';
import Experiences from './components/Experiences.js';
import GradePredictor from './components/GradePredictor';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/'
                    element={
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
                <Route path='/grade-predictor'
                    element={<GradePredictor />}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
