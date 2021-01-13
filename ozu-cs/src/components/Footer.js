import React from 'react'
import './Footer.css'
import Facebook from '../images/facebook.png';
import YouTube from '../images/youtube.png';
import Instagram from '../images/instagam.png';
import Twitter from '../images/twitter.png';


class Footer extends React.Component {
    render() {
        return  <div className="footer">
            <div id="socials">
        
                <a href='https://www.youtube.com/c/ozyeginuni%27%3E'><img id="icons" src={YouTube} alt=""/></a>
                <a href='https://www.instagram.com/ozyeginuni'><img id="icons" src={Instagram} alt=""/></a>
                <a href='https://www.twitter.com/ozyeginuni'><img id="icons" src={Twitter} alt=""/></a>
                <a href='https://www.facebook.com/ozyeginuniversitesi'><img id="icons" src={Facebook} alt=""/></a>

            </div>
        </div>
    }
}

export default Footer;