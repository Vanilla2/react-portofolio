import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Underline from './underline';
import Line from './line';
import s from './lines';

function About(){
    let x1 = s.skills1.map(x =>(
        <LazyLoad offset = {[0,250]}>
            <Line 
            percentage = {x.percentage} 
            name = {x.name}
            />  
        </LazyLoad>
    ))
    let x2 = s.skills2.map(x =>(
        <LazyLoad offset = {[0,250]}>
            <Line 
            percentage = {x.percentage} 
            name = {x.name}
            />  
        </LazyLoad>
    ))
    function handleSpecial(){
        let target = document.querySelector(".scroll-into");
        target.scrollIntoView({behavior: "smooth"});
    }
    const [state,setState] = useState(0);
    return(
        <div className = "about-box">
            <LazyLoad offset = {[0,250]}>
                <div className = "about-text-box">
                    <p className = "about">About</p>
                    <Underline />
                </div>
            </LazyLoad>
            <div className = "who-box">
                <LazyLoad offset = {[0,250]}>
                    <p className = "who-text who-text-title">
                        Who Am I?
                    </p>
                </LazyLoad>
                {/* <img className = "avatar" src = 'https://avatars0.githubusercontent.com/u/29017749?s=460&u=1c8bbb219e9da4c04c0a4138cbf120fa1cd83044&v=4' alt = "Not found"/> */}
                <LazyLoad offset = {[0,250]}>
                    <div className = "who-text-box">
                        <p className = "who-text who-text-1" style = {{textAlign: "center"}}>
                        Full-stack mobile developer, Android Kotlin and iOS Swift with 3 apps in production on
                        both Play Store and App Store.
                        Passionate about writing good code, open minded, able to quickly learn new
                        technologies on the go.{" "}
                        <s onClick = {handleSpecial} className = "link-1">Let's make something special</s>.
                        </p>
                    </div>
                </LazyLoad>
            </div>
            <div className = "exp-box">
                <LazyLoad offset = {[0,250]}>
                    <p className = "exp-name">Work Experience</p>
                </LazyLoad>
                <LazyLoad offset = {[0,250]}>
                    <div className = "who-text-box">
                        <ol>
                            <li className="who-text">1.5 years at ThinkIT as a mobile developer, (iOS/swift & Kotlin/Android) </li>
                            <ul>
                                <li className="sub">Improved app start up times by more than 70% using caching on existing apps</li>
                                <li className="sub">Added features to improve UX</li>
                                <li className="sub">iDeveloped 3 new apps from scratch</li>
                            </ul>
                            <li className="who-text">Freelancing on Upwork for 1 year</li>
                            <ul>
                                <li className="sub">Developed full stack iOS & Android dictionary app +  Firebase Backend</li>
                                <li className="sub">Improved user retention by 50% after features requested by customers</li>
                            </ul>
                            <li className="who-text">AWS Identity SDE Intern</li>
                            <ul>
                                <li className="sub">Worked on internal projects for AWS</li>
                                <li className="sub">Reduced costs of usage by more than 25% after moving the existing Tech Stack to AWS ECS and Fargate </li>
                            </ul>
                        </ol>
                    </div>
                </LazyLoad>
            </div>
            <div className = "exp-box">
                <LazyLoad offset = {[0,250]}>
                    <p className = "exp-name">
                        Achievements
                    </p>
                </LazyLoad>
                {/* <img className = "avatar" src = 'https://avatars0.githubusercontent.com/u/29017749?s=460&u=1c8bbb219e9da4c04c0a4138cbf120fa1cd83044&v=4' alt = "Not found"/> */}
                <LazyLoad offset = {[0,250]}>
                    <div className = "who-text-box">
                        <ol>
                            <li className="who-text">National Contest in Informatics, Moldova - 2016</li>
                            <ul>
                                <li className="sub">2nd place</li>
                            </ul>
                            <li className="who-text">National Contest in Informatics, Moldova - 2017</li>
                            <ul>
                                <li className="sub">3rd place</li>
                            </ul>
                            <li className="who-text">National Contest in Informatics, Moldova - 2018</li>
                            <ul>
                                <li className="sub">3rd place</li>
                            </ul>
                            <li className="who-text">Catalyst Contest in Informatics Between Universities, Moldova - 2018</li>
                            <ul>
                                <li className="sub">1st place</li>
                            </ul>
                            <li className="who-text">DevHacks Hackaton, Romania, Bucharest - 2019</li>
                            <ul>
                                <li className="sub">2nd place</li>
                            </ul>
                        </ol>
                    </div>
                </LazyLoad>
            </div>
            <LazyLoad offset = {[0,250]}>
                <div className = "skill-box">
                    <p className = "skill-text">
                        These are my skills:
                    </p>
                </div>
            </LazyLoad>
            <div className = "skills">
                <div className = "skill-box-1">
                    {x1}
                </div>
                <div className = "skill-box-2">
                    {x2}
                </div>
            </div>
        </div>
    )
}
export default About;