import React, { useState } from 'react'
import Pdf from '../CV_for_freshers.pdf';
function Contact(){
    const [state, setState] = useState(0);
    const handleSpecial = () =>{
        // setState(!state);
    }
    return(
        <>
        <div className = "contact-box">
            <p className = "contact-text">
                Contact:
            </p>
            <div className = "contact-icon-box">
                <a href = "https://stackoverflow.com/users/10213096/cyber-gh" className = "contact-link">
                    <i className = "fab fa-stack-overflow"></i>
                </a>
                <a href = "https://github.com/cyber-gh" className = "contact-link">
                    <i className = "fab fa-github"></i>
                </a>
                <a href = {Pdf} target = "_blank" className = "contact-link">
                    <i className = "fas fa-file-invoice"></i>  
                </a>
                <a href = "https://linkedin.com/in/soltan-gheorghe-060541146" className = "contact-link">
                    <i className = "fab fa-linkedin-in"></i>  
                </a>
                <a href = "https://www.upwork.com/o/profiles/users/~01dfba602911119b7e/" className = "contact-link sp">
                    <span className = "ic-upwork"></span>  
                </a>
            </div>
        </div>
        <div className = "scroll-into"></div>
        </>
    )
}
export default Contact;