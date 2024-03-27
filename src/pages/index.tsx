import React from 'react';
import type { HeadFC, PageProps } from "gatsby";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  url: string;
}

function PortfolioItem({ title, description, image }: PortfolioItem) {
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
  // Sample portfolio data
  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300',
      url: 'https://via.placeholder.com/300'
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300',
      url: 'https://via.placeholder.com/300'
    },
    // Add more portfolio items as needed
  ];

      return (
        <div className="app">
          <header className="app-header">
            <h1>My Portfolio</h1>
          </header>
          <section className="portfolio">
            <div className="container">
              <h2 className="section-title">Portfolio</h2>
              <div className="portfolio-items">
                {portfolioItems.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
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
