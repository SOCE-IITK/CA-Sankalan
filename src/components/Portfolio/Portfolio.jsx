import React, { useState } from "react";
import "./Portfolio.css";
import sections from "../../constants/data";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) => {
    if (e.type === "touchmove") {
      setIsHovered(true); // set hovered state to true on touch move
    } else {
      setIsHovered(!isHovered);
    }
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
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  onTouchStart={handleHover}
                  onTouchEnd={() => setIsHovered(false)}
                  onTouchMove={handleHover}
                  style={{
                    background: `url(${portfolio.image})`,
                  }}
                  key={portfolio.id}
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
