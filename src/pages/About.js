import React from "react";
import pastaStory from "../images/about-pasta.png";
import sara from "../images/sara.png";
import pastrychef from "../images/pastrychef.jpg";
import owner from "../images/owner.jpeg";

import Footer from "../Components/Footer";
import "../Styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="hero-tag">
            PASTA · FLAVOUR · GOOD COMPANY
          </div>

          <h1 className="about-title">
            Our <em>Story</em>
          </h1>
        </div>
      </section>

      {/* Restaurant story */}
      <section className="about-origin-section">
        <div className="about-origin container">
          <div className="about-origin-grid">
            <div className="about-text">
              <span className="section-label">
                THE IDEA BEHIND MAILOS
              </span>

              <h2>
                A Passion for <em>Pasta</em>
              </h2>

              <p>
                Mailos is built around a simple idea: a good bowl
                of pasta can make any day better. From comforting
                classics to bold combinations, our menu is all
                about finding the flavours you love.
              </p>

              <p>
                Whether you are catching up with friends, sharing
                a meal with family, or taking a little time for
                yourself, there is always room for pasta and
                good company.
              </p>
            </div>

            <div className="about-img-wrap">
              <img
                src={pastaStory}
                alt="Hands gathering freshly made pasta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <span className="section-label">
            WHAT WE STAND FOR
          </span>

          <h2>
            Our <em>Values</em>
          </h2>

          <div className="values-grid">
            <div className="value-card">
              <span className="value-number">01</span>
              <h4>Flavour First</h4>
              <p>
                Rich sauces, satisfying combinations, and
                something delicious in every bite.
              </p>
            </div>

            <div className="value-card">
              <span className="value-number">02</span>
              <h4>Your Kind of Pasta</h4>
              <p>
                From familiar favourites to something new,
                find the bowl that suits your mood.
              </p>
            </div>

            <div className="value-card">
              <span className="value-number">03</span>
              <h4>Care in Every Dish</h4>
              <p>
                Thoughtful combinations that bring together
                taste, texture, and comfort.
              </p>
            </div>

            <div className="value-card">
              <span className="value-number">04</span>
              <h4>Better Together</h4>
              <p>
                Good food brings people closer. Make time
                to sit down, share, and enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team — sample names and roles */}
      <section className="about-team container">
        <span className="section-label">
          THE PEOPLE
        </span>

        <h2>
          Meet the <em>Team</em>
        </h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-img">
              <img src={owner} alt="Hadi Khalil" />
            </div>

            <h4>Hadi Khalil</h4>
            <span>Restaurant Manager</span>
          </div>

          <div className="team-card">
            <div className="team-img">
              <img src={sara} alt="Sara Mansour" />
            </div>

            <h4>Sara Mansour</h4>
            <span>Head Chef</span>
          </div>

          <div className="team-card">
            <div className="team-img">
              <img src={pastrychef} alt="Lara Khoury" />
            </div>

            <h4>Marco Bellini</h4>
            <span>Pasta Chef</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}