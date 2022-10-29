import React from "react";

function Info() {
  return (
    <div>
      <img className="card-img" src="card.jpg" />
      <h1 className="card-title">Shresth Arora</h1>
      <p className="card-profession">Frontend Developer</p>
      <p className="card-website">shrestharora.website</p>
      <button className="email-btn">
        <a href="mailto:shrestharora29@gmail.com">Email</a>
      </button>
      <button className="linkedin-btn">
        <a href="https://www.linkedin.com/in/shresth-arora-22564914b">
          Linkedin
        </a>
      </button>
    </div>
  );
}

export default Info;
