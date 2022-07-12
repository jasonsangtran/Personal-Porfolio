import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faCss3, faReact, faGitAlt, faNode } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, []);

    return (
        <div>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'J', 'a', 's', 'o', 'n']}
                            idx={15}
                        />
                    </h1>
                    <p>I'm a greatly ambitious developer, seeking for a role in established software company with the opportunity to work with the technologies on challenging and diverse projects.</p>
                    <p> I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                    <p> <strong>Fundamental: </strong>Operating System, Computer Network, Data Structure & Algorithms </p>
                    <p> <strong>Front-end: </strong> HTML, SASS, JavaScript </p>
                    <p> <strong>Back-end: </strong> Java, NodeJS, Golang </p>
                    <p> <strong>Key Stack: </strong> MERN </p>
                    
                    <a target="_blank" href="https://github.com/jasonsangtran" className="flat-button">VIEW MY FORLIO</a>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNode} color="#00dd55" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#1de1ef" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faAngular} color="#f52c2c" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#272524" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About