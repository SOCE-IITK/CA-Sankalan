import React, { useState } from "react";
import "./Portfolio.css";
import sections from "../../constants/data";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>What We Expect</h3>
          </div>

          <div className="item-list text-center text-white grid">
            {sections.portfolio.map((portfolio) => {
              return (
                <div
                  className={`item flex flex-center flex-column translate-effect ${
                    isHovered ? "hovered" : ""
                  }`}
                  key={portfolio.id}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  onTouchStart={handleHover}
                  onTouchEnd={handleHover}
                  style={{
                    background: `url(${portfolio.image})`,
                  }}
                >
                  <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                  <div className="text text-white">{portfolio.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
