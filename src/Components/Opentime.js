import { Link } from "react-router-dom";
import "../Styles/Opentime.css";

export default function Opentime() {
  return (
    <section className="opening-time">
      <p className="opening-time-label">
        MAKE TIME FOR MAILOS
      </p>

      <h2>
        Good pasta.
        <br />
        Great company.
      </h2>

      <p className="opening-time-hours">
        Open Every day · 10Am – 8Pm
      </p>

      <Link className="opening-time-link" to="/contact">
        Get in touch →
      </Link>
    </section>
  );
}