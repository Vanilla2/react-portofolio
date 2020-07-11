import React from 'react';
function Present(){
    function changeView(){
        let element = document.querySelector(".about-box");
        element.scrollIntoView({behavior: "smooth"});
    }
    return(
        <div className = "present-box">
            <a href = "https://github.com/Vanilla2" className = "dev">Developed By Vanilla</a>
            <span className = "present-box-first">
                <p className = "present-text">
                    Hello, I'm
                </p>
                <p className = "invisible"> /</p>
                <p className = "present-text highlight">
                    Soltan Gheoghe
                </p>
                <p className = "present-text">
                    .
                </p>
            </span>
            <p className = "present-text margin">
                I'm a software developer.
            </p>
            <button onClick = {changeView} className = "scroll-btn present-text-last">
                View my work
                <i className = "arrow fas fa-arrow-right"></i>
            </button>
        </div>
    );
}
export default Present;