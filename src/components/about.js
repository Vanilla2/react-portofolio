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
                        <p className = "who-text who-text-1">
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
                    <p className = "exp-text">
                    1.5 years at ThinkIT as a full-stack mobile developer
                    and
                    1 year freelancing on upwork, with 2 long term projects for developing and
                    maintaining iOS and Android apps.

                    </p>
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