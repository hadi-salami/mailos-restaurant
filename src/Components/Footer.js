import React, { useState } from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";



 
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
 
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
   
    setSubscribed(true);
    setEmail("");
  };
 
  return (
    <footer className="mailos-footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div className="footer-newsletter-copy">
            <h3>Get 15% off your first cup</h3>
            <p>Fresh pasta drops, secret specials, and cheese pulls in your inbox.</p>
          </div>
 
          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
            <button type="submit">Subscribe</button>
          </form>
          {subscribed && (
            <p className="footer-newsletter-success" role="status">
              You're on the list! Watch your inbox.
            </p>
          )}
        </div>
      </div>
 
     <div id="contant">
          <div className="footer-brand">
            <Link  className="nav-logo">Mailos pasta</Link>
            <p className="footer-par">
              Where every cup is a carefully composed moment of pleasure. Come
              as you are. Leave inspired.
            </p>
          </div>
          <div className="footer-block menu">
            <h4>MENU</h4>
            <ul>
              <li><Link to="/Menu">Pasta</Link></li>
              <li><Link to="/Menu">Salad</Link></li>
              <li><Link to="/Menu">Customized series</Link></li>
              
            </ul>
          </div>
          <div className="footer-block visit">
            <h4>VISIT</h4>
            <ul>
              <li><Link to="/Menu">Bliss Street</Link></li>
              <li><Link to="/Menu">City Center</Link></li>
              
            </ul>
          </div>
          <div className="footer-block connect">
            <h4>CONNECT</h4>
            <ul>
              <li><Link to="/">Instagram</Link></li>
              <li><Link to="/" >Tiktok</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mailos Project. All rights reserved.</span>
          <span>Crafted with ♥ for pasta lovers</span>
        </div>
    </footer>
  );
}