import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class ProjectAppBar extends Component {
  
  render() {
    return (
      <div>
        <Paper zDepth={5}>
          <AppBar title={this.props.projectsCount} showMenuIconButton={false} />
        </Paper>
      </div>
    );
  }
}

export default ProjectAppBar;

ProjectAppBar.propTypes = {
  projectsCount: PropTypes.string.isRequired
};

ProjectAppBar.defaultProps = {
  projectsCount: "0 Projects"
}
