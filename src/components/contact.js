import React from 'react'
import Underline from './underline'

function Contact(){

    return(
        <div className = "contact-box">
            <p className = "contact-text">
                Contact me:
            </p>
            <div className = "contact-icon-box">
                <a className = "contact-link" href = "blea">
                    <img className = "contact-img" src = "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" className = "contact-icon"/>
                </a>
            </div>
        </div>
    )
}
export default Contact;