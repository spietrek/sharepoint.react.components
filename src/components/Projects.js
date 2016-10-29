import React, { Component } from 'react';
import './Projects.css';
import ProjectAppBar from './ProjectAppBar';
import ProjectList from './ProjectList';

const projects = [{
  id: 0,
  title: 'Project Alpha',
  url: "https://www.ncdot.gov/",
  status: "Y"
}, {
  id: 1,
  title: 'Project Beta',
  url: "https://www.ncdot.gov/",
  status: "G"
}, {
  id: 2,
  title: 'Project Kappa',
  url: "http://www.google.com/",
  status: "R"
}, {
  id: 3,
  title: 'Project Omega',
  url: "https://www.ncdot.gov/",
  status: "G"
}, {
  id: 4,
  title: 'Project Phi',
  url: "https://www.ncdot.gov/",
  status: "R"
}, {
  id: 5,
  title: 'Project Zeta',
  url: "https://www.ncdot.gov/",
  status: "G"
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