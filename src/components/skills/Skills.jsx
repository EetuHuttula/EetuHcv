import React from 'react'
import './skills.css'

import atom from './logos/atom.png';
import sass from './logos/sass.png'
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





export default function Skills() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div id="skills-container" className="col-md-10 right_section">
       
          <div className="home-content-title text-center">
            <h2 className="content-title">Here's some things I have experience in</h2>
          </div>
          <hr />
          {/**fronthed things */}
          <div className="sub-title home-content-title text-center">
            <h3>Frontend</h3>
          </div>
          <div className="skills-container row text-center">
            <div className="col">
            <img className="logos" src={html} alt="react" />
            <span className="hide-title">Html5</span>
            </div>
            <div className="col">
            <img className="logos" src={css} alt="react" />
            <span className="hide-title">css</span>
            </div>
            <div className="col">
            <img className="logos" src={javascript} alt="react" />
            <span className="hide-title">Javascript</span>
            </div>
            <div className="col">
            <img className="logos" src={sass} alt="react" />
            <span className="hide-title">Sass</span>
            </div>
            <div className="col">
            <img className="logos" src={atom} alt="react" />
            <span className="hide-title">React</span>
            </div>
          </div>
          {/**backed things */}
          <div className="sub-title home-content-title text-center">
            <h3>Backend</h3>
          </div>
          <div className="row skills-container text-center">
            <div className="col">
            <img className="logos" src={mysql} alt="mysql" />
            <span className="hide-title">Mysql</span>
            </div>
            <div className="col">
            <img className="logos" src={postgresql} alt="postgresql" />
            <span className="hide-title">Postgresql</span>
            </div>
            <div className="col">
            <img className="logos" src={firebase} alt="firebase" />
            <span className="hide-title">Google Firebase</span>
            </div>
            <div className="col">
            <img className="logos" src={php} alt="php" />
            <span className="hide-title">Php</span>
            </div>
            <div className="col">
            <img className="logos" src={python} alt="python" />
            <span className="hide-title">Python</span>
            </div>
          </div>
          {/**other things */}
          <div className="sub-title home-content-title text-center">
            <h3>Other</h3>
          </div>
          <div className="row skills-container text-center">
            <div className="col">
            <img className="logos" src={bootstrap} alt="bootstrap" />
            <span className="hide-title">Bootstrap</span>
            </div>
            <div className="col">
            <img className="logos" src={photoshop} alt="photoshop" />
            <span className="hide-title">Photoshop</span>
            </div>
            <div className="col">
            <img className="logos" src={premier} alt="premier pro" />
            <span className="hide-title">Premier</span>
            </div>
            <div className="col">
            <img className="logos" src={azure} alt="Microsoftazure" />
            <span className="hide-title">Azure</span>
            </div>
            <div className="col">
            <img className="logos" src={wordpress} alt="Wordpress" />
            <span className="hide-title">Wordpress</span>
            </div>
            <div className="col">
            <img className="logos" src={figma} alt="figma" />
            <span className="hide-title">Figma</span>
            </div>
            <div className="col">
            <img className="logos" src={scrum} alt="scrum" />
            <span className="hide-title">Scrum</span>
            </div>
          </div>
          <div className="sub-title home-content-title text-center">
            <h3>What, where and when</h3>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolore alias quos officia cumque minus pariatur ex aut! Deleniti labore, officiis optio atque illum fugiat facilis commodi animi fuga officia!
              Cupiditate repudiandae tempora sapiente sequi laborum, dignissimos dolor culpa ad facere similique! Impedit alias atque nemo consequuntur iusto debitis eius delectus, fuga dolor cumque, odio doloremque dicta sunt animi sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
