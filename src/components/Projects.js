import React, { Component } from 'react';
import './Projects.css';
import ProjectAppBar from './ProjectAppBar';
import ProjectList from './ProjectList';

const projects = [{
  id: 0,
  title: 'Project Alpha',
  url: "https://www.ncdot.gov/",
  status: "yellow"
}, {
  id: 1,
  title: 'Project Beta',
  url: "https://www.ncdot.gov/",
  status: "green"
}, {
  id: 2,
  title: 'Project Kappa',
  url: "http://www.google.com/",
  status: "red"
}, {
  id: 3,
  title: 'Project Omega',
  url: "https://www.ncdot.gov/",
  status: "green"
}, {
  id: 4,
  title: 'Project Phi',
  url: "https://www.ncdot.gov/",
  status: "red"
}, {
  id: 5,
  title: 'Project Zeta',
  url: "https://www.ncdot.gov/",
  status: "green"
}];

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <ProjectAppBar projectsCount={projects.length}/>
        <ProjectList projects={projects} />
      </div>
    );
  }
}

export default Projects;