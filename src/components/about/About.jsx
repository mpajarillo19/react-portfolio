import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {MdSchool} from 'react-icons/md'
import {IoLogoGameControllerB} from 'react-icons/io'
import {SiAdobephotoshop} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdSchool className='about__icon' />
              <h5>FEU Institute of Technology</h5>
              <small>4th Year Student</small>
            </article>
            <article className='about__card'>
              <IoLogoGameControllerB className='about__icon' />
              <h5>Gamer</h5>
              <small>FPS/MOBA Games</small>
            </article>
            <article className='about__card'>
              <SiAdobephotoshop className='about__icon' />
              <h5>Graphic Designer</h5>
              <small>Photoshop/Figma/Canva</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, non hic! Nesciunt fugiat neque amet pariatur, repudiandae alias debitis sint recusandae. Eaque quaerat reprehenderit veritatis molestiae sit recusandae odit aspernatur?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About