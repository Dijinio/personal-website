import React from 'react';
import '../style/contact.scss';
import Logo from '../images/logo.png';

function Contact() {
  return (
    <div className="contact page" id="contact">
      <div className="contact-background">
        <h1 className="page-header">CONTACT</h1>
      </div>
      <div className="contact-main">
        <div className="contact-left">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="contact-right">
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/david-jokhadze-aa4403128/" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="skype:live:djokhadze?chat" target="_blank"><i className="fa fa-skype"></i></a>
            <a href="https://github.com/Dijinio" target="_blank"><i className="fa fa-github"></i></a>
          </div>
          <p><i className="fa fa-envelope"></i>djokhadze@gmail.com</p>
        </div>
      </div>
        <div className="footer">
        <p>David Jokhadze © 2019</p>
        <p>Photos by: <a href="https://www.akopovphoto.com/">Iuri Akopov</a></p>
    </div>
    </div>
  )
}

export default Contact;
