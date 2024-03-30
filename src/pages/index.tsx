import React from 'react';
import type { HeadFC, PageProps } from "gatsby";

import Data from '../data/Portfolio.json'; 
//src/data/portfolio.json

interface PortfolioItem {
  title: string;
  description: string;
  source: string;
  image: string;
  url: string;
}

function PortfolioItem({ title, description, source, image }: Data) {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} className="portfolio-image" />
      <div className="portfolio-details">
        <h2 className="portfolio-title">{title}</h2>
        <p className="portfolio-description">{description}</p>
      </div>
    </div>
  );
}

const IndexPage: React.FC<PageProps> = () => {


      return (
        <div className="app">
          <header className="app-header">
            <h1>My Portfolio</h1>
          </header>
          <section className="portfolio">
            <div className="container">
              <h2 className="section-title">Portfolio</h2>
              <div className="portfolio-items">
              [key, value]: [string, boolean]
                {Data.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    source={item.source}
                    image={item.image}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
          </section>
          <footer className="app-footer">
            <p>© 2024 My Portfolio. All rights reserved.</p>
          </footer>
        </div>
      );
  }

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
