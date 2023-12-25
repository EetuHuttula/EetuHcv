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
  const redHeartStyle = {
    color: 'red',
  };
  return (
    <div className="container">
      <div className="row">
          <div className="home-content-title text-center">
            <h1 className="content-title">Experience</h1>
          </div>
          <hr />
          <div className="row justify-content-flex-start align-items-center">
            {skillsData
              .filter(skill => /* Condition for frontend skills */ true)
              .map((skill, index) => (
                <div className="col-md-2" key={index}>
                  <img className="logos img-fluid" src={skill.logo} alt={skill.title} /> <br />
                  <span className="hide-title">{skill.title}</span>
                </div>
              ))}
            </div>
          <div className="sub-title home-content-title text-center">
            <h3>What, where and when</h3>
          </div>
          <div className="">
            <p className="text-container">
              I possess substantial expertise in both frontend and backend programming languages, including HTML, CSS, JavaScript, React, PHP, and Python <span style={redHeartStyle}>&#x2764;</span> <br />
              My proficiency extends to leveraging database technologies, such as MySQL, PostgreSQL, and Firebase, ensuring robust data management in web applications. 

              I am particularly adept at working with React, Bootstrap, PostgreSQL, and Python, as these technologies are foundational to my academic pursuits and personal projects. <br />
              Currently, my passion revolves around exploring the multifaceted capabilities of Python. 
                            <br/> <br/>
              Additionally, I have a foundational understanding of Adobe Premiere and Photoshop. In 2023, 
              I have effectively implemented a WooCommerce shop utilizing WordPress and Azure Cloud. Regrettably, the client who initiated the project has opted for an alternative direction, primarily due to a lack of familiarity with deploying and hosting applications of this nature.
              <br />
              This experience has further enriched my understanding of client dynamics and highlighted the importance of effective communication throughout the development process.  <br />
              <br />
              Collaborative team projects in an academic setting involved employing design tools such as Figma, followed by the implementation of Scrum methodologies to enhance project workflow and efficiency.
            </p>

          </div>
      
      </div>
    </div>
  );
}
