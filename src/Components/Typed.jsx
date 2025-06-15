import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed = () => {
    return (
        <div >
            <Typewriter
                options={{
                    strings: ['Software Developer', 'Tech Enthusiast', 'Problem Solver',],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </div>
    )
}

export default Typed
