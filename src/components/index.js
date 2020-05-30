import React from 'react';
import Present from './present';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function Index() {
    return (
        <div>
            <Present/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Index;
