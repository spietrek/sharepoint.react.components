import React, {
  Component,
  PropTypes
} from 'react';
import './ProjectList.css';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {
  List
} from 'material-ui/List';
import ProjectListItem from './ProjectListItem';

class ProjectList extends Component {
  
  render() {
    return (
      <div className="container">
        <Paper zDepth={5}>
          <List>
            <Subheader className="projectSubheading">Red Projects</Subheader>
            {this.props.projects
              .filter( row => row.status === "R") 
              .map( (row, index) => (
              <ProjectListItem key={index} project={row} />
            ))}
          </List>
          <Divider />
          <List>
            <Subheader className="projectSubheading">All Projects</Subheader>
            {this.props.projects
              .map( (row, index) => (
              <ProjectListItem key={index} project={row} />
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

ProjectList.defaultProps = {
  projects: []
}