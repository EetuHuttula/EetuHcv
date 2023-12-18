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
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="nav-container d-flex flex-column align-items-center px-3 pt-2 text-white min-vh-100">
            <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline"><img className="nav_img" src={eetu} alt="Logo" /></span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center " id="menu">
                <li className="nav-item">
                    <Link to="/" className="nav-link align-middle px-0">
                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">About</span></Link>
                    <Link to="/Skills" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Skills</span></Link>
                    <Link to="/Project" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Projects</span></Link>
                    <div className="d-flex">
                      <a href="https://github.com/EetuHuttula" className="logo-nav-link px-0 align-middle">
                          <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline"><ion-icon name="logo-github"></ion-icon></span></a>
                      <a href="https://www.linkedin.com/in/eetu-huttula-3a2714244/" className="logo-nav-link px-0 align-middle">
                          <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline"><ion-icon name="logo-linkedin"></ion-icon></span></a>
                    </div>
                </li>
            </ul>
          </div>
        </div>
          <div className="col py-3 d-flex flex-column align-items-center justify-content-center">
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/Skills"  element={<Skills />} />
              <Route path="/Project" element={<Project />} />
          </Routes>
          </div>
      </div>
    </div>
  );
}