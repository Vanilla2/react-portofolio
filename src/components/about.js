import React, { useState } from 'react';
import Underline from './underline';
import Line from './line';
import VizSensor from 'react-visibility-sensor';

function About(){
    function handleSpecial(){

    }
    const [state,setState] = useState(0);
    return(
        <div className = "about-box">
            <div className = "about-text-box">
                <p className = "about">About</p>
                <Underline />
            </div>
            <div className = "who-box">
                <p className = "who-text">
                    Who Am I?
                </p>
                {/* <img className = "avatar" src = 'https://avatars0.githubusercontent.com/u/29017749?s=460&u=1c8bbb219e9da4c04c0a4138cbf120fa1cd83044&v=4' alt = "Not found"/> */}
                <div className = "who-text-box">
                    <p className = "who-text who-text-1">
                    I'm a Software-Developer for <a className = "link" href = "https://7sab.com">7sab.com</a> in Bucharest, Romania.
                    I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                    <a onClick = {handleSpecial} className = "link">Let's make something special</a>.
                    </p>
                </div>
            </div>
            <div className = "exp-box">
                <p className = "exp-name">Work Experience</p>
                <p className = "exp-text">
                    Worked at 7sab for 14 years and i have no life lol :)
                </p>
            </div>
            <div className = "skill-box">
                <p className = "skill-text">
                    These are my skills:
                </p>
            </div>
            <div className = "skills">
                <div className = "skill-box-1">
                    <Line percentage = {80} name = {"C"}/>
                    <Line percentage = {65} name = {"C++"}/>  
                    <Line percentage = {60} name = {"Swift"}/>  
                    <Line percentage = {60} name = {"Java"}/>            
                    <Line percentage = {80} name = {"Kotlin"}/>  
                    <Line percentage = {50} name = {"Javascript"}/>  
                    <Line percentage = {80} name = {"JetBrains"}/>
                </div>
                <div className = "skill-box-2">
                    <Line percentage = {40} name = {"SQL"}/>
                    <Line percentage = {70} name = {"Python"}/>
                    <Line percentage = {60} name = {"Android"}/>
                    <Line percentage = {50} name = {"iOS"}/>
                    <Line percentage = {40} name = {"Node JS"}/>
                    <Line percentage = {60} name = {"Jira"}/>
                    <Line percentage = {80} name = {"VScode"}/>
                </div>
            </div>
        </div>
    )
}
export default About;