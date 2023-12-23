import React from 'react';
import './skills.css';

// Import logos
import atom from './logos/atom.png';
import sass from './logos/sass.png';
import javascript from './logos/java-script.png';
import html from './logos/html.png';
import css from './logos/css.png';

import mysql from './logos/mysql.png';
import postgresql from './logos/postgresql.png';
import firebase from './logos/firebase.png';
import php from './logos/php.png';
import python from './logos/python.png';

import bootstrap from './logos/bootstrap.png';
import photoshop from './logos/photoshop.png';
import premier from './logos/premiere.png';
import azure from './logos/azure.png';
import wordpress from './logos/wordpress.png';
import figma from './logos/figma.png';
import scrum from './logos/scrum.png';

// Array of skills with their logos and titles
const skillsData = [
  { logo: html, title: 'Html5' },
  { logo: css, title: 'CSS' },
  { logo: javascript, title: 'JavaScript' },
  { logo: sass, title: 'Sass' },
  { logo: atom, title: 'React' },

  { logo: mysql, title: 'MySQL' },
  { logo: postgresql, title: 'PostgreSQL' },
  { logo: firebase, title: 'Firebase' },
  { logo: php, title: 'PHP' },
  { logo: python, title: 'Python' },

  { logo: bootstrap, title: 'Bootstrap' },
  { logo: photoshop, title: 'Photoshop' },
  { logo: premier, title: 'Premier' },
  { logo: azure, title: 'Azure' },
  { logo: wordpress, title: 'WordPress' },
  { logo: figma, title: 'Figma' },
  { logo: scrum, title: 'Scrum' },
];

export default function Skills() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div id="skills-container" className="col-md-10 right_section">
          <div className="home-content-title text-center">
            <h1 className="content-title">Experience</h1>
          </div>
          <hr />
          <div className="skills-container row text-center">
            {skillsData
              .filter(skill => /* Condition for frontend skills */ true)
              .map((skill, index) => (
                <div className="col-sm-3" key={index}>
                  <img className="logos" src={skill.logo} alt={skill.title} />
                  <span className="hide-title">{skill.title}</span>
                </div>
              ))}
          </div>
          <div className="sub-title home-content-title text-center">
            <h3>What, where and when</h3>
          </div>
          <div className="text-container">
            <p>
              I possess substantial expertise in both frontend and backend programming languages,
              encompassing HTML, CSS, JavaScript, React, PHP, and Python—my preferred programming language.
              My proficiency extends to leveraging database technologies, including MySQL, PostgreSQL, and Firebase,
              to ensure robust data management in web applications. <br/>

              I am particularly adept at working with React, Bootstrap, PostgreSQL, and Python,
              as these technologies form the cornerstone of my academic pursuits and personal projects.
              My current passion revolves around exploring the multifaceted capabilities of Python. <br/>

              Additionally, I have a foundational understanding of Adobe Premiere and Photoshop. 
              In 2023, I successfully executed a WooCommerce shop using WordPress and Azure Cloud.
              Collaborative team projects in an academic setting involved employing design tools such as Figma,
              followed by the implementation of Scrum methodologies to enhance project workflow and efficiency.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
