import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Heading
          title="INDIKATOR KINERJA UTAMA"
          subtitle="Sistem pengukur tingkat keberhasilan dan pencapaian dalam meningkatkan kualitas kinerja perguruan tinggi."
        />
        <div className="button-container">
          <Link to="/signin" className="sky-blue-button">
            Masuk dengan SSO
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
