
import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Opentime from "../Components/Opentime";
import pastaImage from "../images/pasta-category.png";
import saladImage from "../images/salad-category.png";
import sidesImage from "../images/sides-category.png";
import drinksImage from "../images/drinks-category.png";
import "../Styles/Home.css";


const categories = [
  {
    id: "pasta",
    name: "Pasta",
    image: pastaImage,
    description: "Find your favourite bowl."
  },
  {
    id: "salads",
    name: "Salads",
    image: saladImage,
    description: "Something fresh on the side."
  },
  {
    id: "sides",
    name: "Sides",
    image: sidesImage,
    description: "The perfect little extra."
  },
  {
    id: "drinks",
    name: "Drinks",
    image: drinksImage,
    description: "Something refreshing to finish."
  }
];

function HomeCategories() {
  return (
     <section className="home-categories">
      <div className="home-categories-heading">
        <h2>GOOD FOOD. YOUR WAY.</h2>

        <p>
          what are you
          <br />
          craving?
        </p>
      </div>

      <p className="home-category-note">
        pick a favourite
      </p>

      <div className="home-category-grid">
        {categories.map((category) => (
          <Link
            className="home-category-card"
            to="/menu"
            key={category.id}
          >
            <div className="home-category-image">
              <img
                src={category.image}
                alt={category.name}
              />
            </div>

            <div className="home-category-info">
              <h3>{category.name}</h3>
              <span >→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
function HeroSection() {
  return (
    <section className="hero">
      <video
        className="video"
        src="/Sequence01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="overlay" />

      

      <span className="scrollLabelLeft">SCROLL DOWN</span>
      <span className="scrollLabelRight">SCROLL DOWN</span>

      <div className="textRow">
        <h1 className="headingLeft">
          Cheese
          <br />
          makes
        </h1>

        <h1 className="headingRight">
          Everything
          <br />
          better.
        </h1>
      </div>

      {/* Left handwritten text */}
      <div className="bucketText bucketTextLeft">
        <span>Good</span>
        <span>Pasta</span>
        <span>Happier</span>

        <span>
          People <span className="handHeart">♡</span>
        </span>
      </div>

      {/* Right handwritten text */}
      <div className="bucketText bucketTextRight">
        <span>Pasta</span>
        <span>Your Way</span>

        {/* Curved arrow */}
        <svg
          className="handArrow"
          viewBox="0 0 240 220"
          fill="none"
        >
          <path
            d="M15 15
               C 75 35, 115 70, 135 120
               C 150 155, 170 175, 210 180"
          />

          <path
            d="M190 160
               L210 180
               L184 188"
          />
        </svg>
      </div>

      <button className="cta">
        <span className="hoverUnderlineAnimation">
          Order now
        </span>

        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </section>
  );
}

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <Opentime/>
      <HomeCategories/>

      <Footer />
    </>
  );
}