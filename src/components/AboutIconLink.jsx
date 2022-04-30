import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to={"/about"}>
        <FaInfoCircle size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
