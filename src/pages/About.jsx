import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This a simple project for learning react js</p>
      <br />
      <p>So far so good!!</p>
      <br />
      <Link to="/">
        <p>Back to home</p>
      </Link>
    </Card>
  );
};

export default About;
