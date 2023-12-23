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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolore alias quos officia cumque minus pariatur ex aut! Deleniti labore, officiis optio atque illum fugiat facilis commodi animi fuga officia! Cupiditate repudiandae tempora sapiente sequi laborum, dignissimos dolor culpa ad facere similique! Impedit alias atque nemo consequuntur iusto debitis eius delectus, fuga dolor cumque, odio doloremque dicta sunt animi sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
