import React, {
  Component
} from 'react';
import './Projects.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from '../utils/Api';
import ProjectHeader from './ProjectHeader';
import ProjectList from './ProjectList';

class Projects extends Component {

  constructor() {
    super();

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
      /* beautify preserve:start */
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="container">
          <ProjectHeader projectsCount={this.state.projectsCount}/>
          <ProjectList projects={this.state.projects} />
        </div>
      </MuiThemeProvider>
      /* beautify preserve:end */
    );
  }

}

export default Projects;
