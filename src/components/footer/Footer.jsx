import React from 'react'
import './footer.css'
import{FiFacebook} from 'react-icons/fi'
import{FiInstagram} from 'react-icons/fi'
import{IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MIGUEL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mpajarillo19"><FiFacebook/></a>
        <a href="https://www.twitter.com/mpajarillo19"><IoLogoTwitter/></a>
        <a href="https://www.instagram.com/miguelpajarillo"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MIGUEL. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer