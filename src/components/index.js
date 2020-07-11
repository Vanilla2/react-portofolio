import React from 'react';
import Present from './present';
import About from './about';
import Projects from './projects';
import Contact from './contact';
//eslint-disable-next-line
console.log(screen.width);
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
