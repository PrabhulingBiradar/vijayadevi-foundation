import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Board from './components/Board';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="antialiased">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Mission />
                <Services />
                <Board />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;