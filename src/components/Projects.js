import React, {
  Component
} from 'react';
import './Projects.css';
import Api from '../utils/Api';
import ProjectAppBar from './ProjectAppBar';
import ProjectList from './ProjectList';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      projectsCount: "0 Projects"
    };
  }

  componentDidMount() {
    Api
      .getSharePointProjectsData()
      .then(function(data) {
        this.setState({
          projects: data.projects,
          projectsCount: data.projects.length + " Projects"
        });
      }.bind(this));
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        <ProjectAppBar projectsCount={this.state.projectsCount}/>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default Projects;
