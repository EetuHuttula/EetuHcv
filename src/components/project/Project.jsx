import  React, { useState } from 'react'
import './project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

import sluup from './img/sluuppishopetusivu.png'
import porinanurkka from './img/porinanurkka.PNG'
import kidslearn from './img/kidslearn.PNG'
import shoelando from './img/shoelando.PNG'
import tmapp from './img/tmapp.PNG'

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Porinanurkka',
      image: porinanurkka,
      description: 'Chatting page',
      github: 'https://github.com/EetuHuttula/TKT20019---Keskustelusovellus',
      youtube: 'https://youtu.be/sYQSgE0kPZk',
    },
    {
      name: 'Shoelando',
      image: shoelando,
      description: 'Web store for shoes',
      github: 'https://github.com/EetuHuttula/Verkkopalveluprojekti',
      youtube: 'https://youtu.be/KjEk1fqiccI',    },
    {
      name: 'Time management app',
      image: tmapp,
      description: 'App for work time management',
      github: 'https://github.com/EetuHuttula/TimeManagementApp',
      youtube: 'https://youtu.be/aaZ5n4LhWE8',
    },
    {
      name: 'KidsLearn',
      image: kidslearn,
      description: 'Learning page for kids',
      github: 'https://github.com/EetuHuttula/WebProjekti',
      youtube: 'https://youtu.be/luXp5meVrg8',
    },
    {
      name: 'SluuppiShop',
      image: sluup,
      description: 'Shop for OSAKO',
      github: '404',
      youtube: '404',
    },
  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return(
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="home-content-title text-center">
          <h1 className="content-title">Projects</h1>
        </div>
        <hr />
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="box" onClick={() => handleShowModal(project)}>
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <a href={project.link} className="shake">
              <i className="ion-logo-github"  style={{ fontSize: '24px', color: '#333'}}><ion-icon name="open-outline"></ion-icon></i>
              </a>
              {project.github && (
                <a href={project.github} className="shake" target="_blank" rel="noopener noreferrer">
                  <i className="ion-logo-github"  style={{ fontSize: '24px', color: '#333'}}><ion-icon name="logo-github"></ion-icon></i>
                </a>
              )}
              {project.youtube && (
                <a href={project.youtube} className="shake" target="_blank" rel="noopener noreferrer">
                  <i className="ion-logo-youtube"  style={{ fontSize: '24px', color: '#333' }}><ion-icon name="logo-youtube"></ion-icon></i>
                </a>
              )}
            </div>
          </div>
        ))}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject && selectedProject.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <>
                <img src={selectedProject.image} alt={selectedProject.name} style={{ width: '100%' }} />
                <p>{selectedProject.description}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

