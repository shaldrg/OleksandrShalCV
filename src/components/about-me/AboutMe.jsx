import React from 'react';
import './AboutMe.css';

const hobbies = [
    {
        name: 'Reading',
        svg: 'https://example.com/reading.svg',
    },
    {
        name: 'Running',
        svg: 'https://example.com/running.svg',
    },
    {
        name: 'Traveling',
        svg: 'https://example.com/traveling.svg',
    },
    // Add more hobbies here...
];

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p>
                Hi, I'm [Your Name]. I love [brief intro about yourself and your
                hobbies].
            </p>
            <div className="hobbies">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="hobby">
                        <img src={hobby.svg} alt={hobby.name} />
                        <p>{hobby.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;