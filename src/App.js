import './App.css';
import CustomCursor from './portfolio_components/CustomCursor';
import Home from './portfolio_components/Home.js';
import About from './portfolio_components/About.js';
import Creations from './portfolio_components/Creations.js';
import Experiences from './portfolio_components/Experiences.js';
import GradePredictor from './predictor_components/GradePredictor';
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
                    element={
                        <div className="App">
                            <GradePredictor />
                        </div>
                    }>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
