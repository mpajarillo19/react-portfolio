import React from "react";
import "./services.css";
import c1 from "../../assets/c1.PNG";
import c2 from "../../assets/c2.PNG";
import c3 from "../../assets/c3.PNG";
import c4 from "../../assets/c4.PNG";
import c5 from "../../assets/c5.PNG";

const data = [
  {
    id: 1,
    image: c1,
    title: "CyberOps Associate",
    desc: "Cisco verifies the earner of this badge successfully completed the CyberOps Associate course. The holder of this student level credential has a broad understanding in the areas of Security Operations.The student develops problem-solving skills to detect and analyze intrusions and monitor the network by completing up to 30 hours of 52 hands-on labs using virtual machines (Security Onion - ELK) and/or the Cisco Packet Tracer too.",
    link: "https://www.credly.com/badges/ca3ed122-6793-4ba7-8caa-d53a65bee22e",
  },
  {
    id: 2,
    image: c2,
    title: "IT Specialist - JavaScript",
    desc: "Earners of this badge demonstrate that they can recognize, write, and debug JavaScript code that will logically solve a problem.",
    link: "https://www.credly.com/badges/17a078de-1825-4701-91fa-e958e42e3994",
  },
  {
    id: 3,
    image: c3,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    desc: "Cisco verifies the earner of this badge successfully completed the Switching, Routing, and Wireless Essentials course and achieved this student level credential. The earner has a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem-solving skills. Earner participated in up to 45 practice activities and accumulated up to 21 hours of hands-on labs using Cisco hardware and/or the Cisco Packet Tracer tool.",
    link: "https://www.credly.com/earner/earned/badge/1edc4dd7-be9d-45d3-b0c9-9a6e4b7269d9",
  },
  {
    id: 4,
    image: c4,
    title: "DevNet Associate",
    desc: "Cisco verifies the earner of this badge successfully completed the DevNet Associate course, completed 25+ hands-on labs using a virtual lab environment and achieved this student level credential. The holder of this credential has a broad understanding in the areas of Python coding, using Linux, Cisco DevNet, Software Development and Design, Understanding and Using APIs, Network Fundamentals, Application Deployment and Security, Infrastructure and Automation and Cisco Platforms and Development.",
    link: "https://www.credly.com/badges/ca27b1eb-d149-4c41-8450-e33103046dc0",
  },
  {
    id: 5,
    image: c5,
    title: "DevNet Associate",
    desc: "Earners of the MTA: Database Fundamentals certification have demonstrated introductory knowledge of and skills with databases, including relational databases, such as Microsoft SQL Server. The MTA program provides an appropriate entry point to a future career in technology.",
    link: "https://www.credly.com/badges/b4229e19-f7f1-4391-a0be-242bb1efc3d6",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What do I have</h5>
      <h2>Certificates</h2>
      <div className="container services__container">
        {data.map(({ id, image, title, desc, link }) => {
          return (
            <article key={id} className="services__item">
              <div className="services__height">
                <h3>{title}</h3>
                <div className="services__content">
                  <img src={image} alt={title} />
                </div>
              </div>
              <div className="services__buttons">
                <a href={link} className="btn btn-primary" target="_blank">
                  Verify
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

/* <article className="service">
<div className="service__head">
  <h3>{title}</h3>
</div>
<article key={id} className="portfolio__item">
  <div className="portfolio__height">
    <div className="portfolio__item-image">
      <img src={image} alt={title} />
    </div>
    <p>{desc}</p>
  </div>
  <div className="portfolio__item-cta">
    <a href={link} className="btn btn-primary" target="_blank">
      Verify
    </a>
  </div>
</article>
</article> */

export default Services;
