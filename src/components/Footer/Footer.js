import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-container">
            <span className="copyright-symbol">
               &copy;
            </span>
             <span className="copyright">
               2020 <a alt="link to github" 
                       className="github-link"
                       href="https://github.com/monstaro"
                       rel="noopener noreferrer"
                       target="_blank">
                           Cody Smith
                    </a>
             </span>
        </div>
    )
}

export default Footer;