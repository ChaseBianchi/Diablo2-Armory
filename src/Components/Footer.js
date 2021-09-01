import React from 'react'

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

function Footer() {
    return (
        <div className='footer-container'>
            <div className="chase-bianchi">Created by{<br />}Chase Bianchi</div>
            <a rel="noopener noreferrer" href="https://github.com/ChaseBianchi/Diablo2-Armory" target='_blank'><div className="github footer-link"></div></a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/chasebianchi/" target='_blank'><div className="linkedin footer-link"></div></a>
            <a rel="noopener noreferrer" href="https://twitter.com/Chase_Bianchi" target='_blank'><div className="twitter footer-link"></div></a>
            <Mailto email='cbianchi@protonmail.com' subject='Diablo 2 Armory' body='Hello Chase,'>
            <div className="email footer-link"></div>
            </Mailto>
        </div>
    )
}

export default Footer
