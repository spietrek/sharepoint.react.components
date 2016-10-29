import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class ProjectAppBar extends Component {
  
  static get defaultProps() {
    return {
      projectsCount: "0 Projects"
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      projectsCount: this.props.projectsCount + " Projects"
    };
  }

  render() {
    return (
      <div>
        <Paper zDepth={5}>
          <AppBar title={this.state.projectsCount} showMenuIconButton={false} />
        </Paper>
      </div>
    );
  }
}

export default ProjectAppBar;

ProjectAppBar.propTypes = {
  projectsCount: PropTypes.number.isRequired
};
