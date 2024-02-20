import React from 'react';
import Home from '../home/Home.jsx';
import Project from '../project/Project.jsx';
import Skills from '../skills/Skills.jsx';
import eetu from './Eetu.png';
import { Routes, Route, Link} from 'react-router-dom'

import './nav.css';

export default function Navbar() {
  return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-xl-2 px-sm-2 px-0 sidebar" style={{ backgroundColor: "rgb(244, 236, 230)" }}>
            <div id="nav-container" className="nav-container d-flex flex-column align-items-center px-3 pt-2 text-white min-vh-100">
              <Link to="/Home" id="img-container" className="align-items-center pb-3 mb-md-3 me-md-auto">
                {/* Assuming 'eetu' is an image URL */}
                <img className="nav_img" src={eetu} alt="eetulogo" />
              </Link>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center " id="menu">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-sm-inline">About</span>
                  </Link>
                  <Link to="/Skills" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-sm-inline">Skills</span>
                  </Link>
                  <Link to="/Project" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-sm-inline">Projects</span>
                  </Link>
                  <div className="ionicons d-flex flex-column align-items-center">
                    <a href="https://github.com/EetuHuttula" target="_blank" rel="noreferrer" className="logo-nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-sm-inline"><ion-icon name="logo-github"></ion-icon></span>
                    </a>
                    <a href="https://www.linkedin.com/in/eetu-huttula-3a2714244/" rel="noreferrer" target="_blank" className="logo-nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-sm-inline"><ion-icon name="logo-linkedin"></ion-icon></span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-xl-10 py-3 d-flex flex-column align-items-center justify-content-center content" style={{ backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 0px", fontFamily: 'Georgia, serif' }}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Project" element={<Project />} />
            </Routes>
          </div>
        </div>
      </div>
  );
};