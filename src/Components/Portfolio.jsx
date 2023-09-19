/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Mern-stack.jpg";

const imageAltText = "desktop with books and laptop with mern stack written on it";


/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Facebook Clone Login Page",
    description:
      "A Facebook login-page clone. I made this very basic and simple HTML and CSS project which has created a clone of Facebook Login Page of www.facebook.com.",
    url: "https://1bkykp.csb.app/",
  },
  {
    title: "Devtown Webpage using React",
    description:
      "This is a web page displaying information about devtown and front-end development that I completed in bootcamp using HTML, CSS, Javascript, and React. js.",
    url: "https://jn87g2.csb.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://nitish08in.github.io/My-Resume/",
  },
  {
    title: "Python TicTacToe",
    description:
      "This code creates a 3x3 Tic Tac Toe game with a GUI using Tkinter in Python. It allows two players to take turns placing their markers and checks for a winner or a tie after each turn.",
      url: "https://github.com/Nitish08in/Python-TicTacToe-23.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
