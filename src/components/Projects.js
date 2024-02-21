import React from "react";
import IMG1 from "../assets/img/portfolio1.png";
import IMG2 from "../assets/img/portfolio2.png";
import IMG3 from "../assets/img/portfolio3.png";
import IMG4 from "../assets/img/portfolio4.png";

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Shopper App",
    github: "https://github.com/soaler29naman/E-Commerce",
    demo: "e-commerce-knfef9cl8-soaler29naman.vercel.app",
  },

  {
    id: 2,
    image: IMG2,
    title: "Crypto-Rate Converter",
    github: "https://github.com/soaler29naman/Crypto_Converter",
    demo: "crypto-converter-eta.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Amazon Clone",
    github: "https://github.com/soaler29naman/Amazon_Clone",
    demo: "amazon-clone-gray.vercel.app",
  },

];

const Portfolio = () => {
  return (
    <section id="projects">
      <h1 className="project_header">Projects</h1>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="project_btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="project_btn" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
