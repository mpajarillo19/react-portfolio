import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TICaP Hub: An Event Management System for FEU Techs Technology Innovation in Capstone Project',
    github: 'https://github.com/mpajarillo19/ticaphub',
    demo: 'https://ticaphub.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Finance Buddy: An Income and Expense Tracker with Data Visualization',
    github: 'https://github.com/mpajarillo19/finance-buddy',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Smart Event: A Kanban-based Web and Mobile Event Planning System',
    github: 'https://github.com/mpajarillo19/SmartEvent',
    demo: '#'
  },
  {
    id: 4,
    image: IMG4,
    title: 'JavaScript - Rock Paper Scissors',
    github: 'https://github.com/mpajarillo19/Rock-Paper-Scissors',
    demo: 'https://mbprockpaperscissors.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'JavaScript - Simple Lucky 9 Game',
    github: 'https://github.com/mpajarillo19/Lucky9',
    demo: 'https://mbplucky9.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Bootstrap Practice Website - Crash Course',
    github: 'https://github.com/mpajarillo19/migs-practice-website-1',
    demo: 'https://migspractice1.netlify.app'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
        <div className="portfolio__height">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          </div>
          <div className="portfolio__item-cta">
            <a href={github} className="btn">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
