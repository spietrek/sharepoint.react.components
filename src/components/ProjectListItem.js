import React, {
  Component,
  PropTypes
} from 'react';
import Avatar from 'material-ui/Avatar';
import {
  ListItem
} from 'material-ui/List';
import {
  red600,
  green600,
  yellow600
} from 'material-ui/styles/colors';
import AlertError from 'material-ui/svg-icons/alert/error';
import AlertWarning from 'material-ui/svg-icons/alert/warning';
import ContentForward from 'material-ui/svg-icons/content/forward';

class ProjectListItem extends Component {
  
  static get defaultProps() {
    return {
      project: {}
    }
  }

  constructor(props) {
    super(props);

    this.getIconGivenStatus = this.getIconGivenStatus.bind(this);
    this.getBackgroundColorGivenStatus = this.getBackgroundColorGivenStatus.bind(this);

    this.state = {
      project: this.props.project
    };
  }

  handleTouchTap(url) {
    window.open(url, '_blank');
  }

  getIconGivenStatus(status) {
    switch (status) {
      case "G":
        return null;
      case "Y":
        return <AlertWarning />;
      default:
        return <AlertError />;
    }
  }

  getBackgroundColorGivenStatus(status) {
    switch (status) {
      case "G":
        return green600;
      case "Y":
        return yellow600;
      default:
        return red600;
    }
  }

  render() {
    return (
      <ListItem
        key={this.state.project.id}
        primaryText={this.state.project.title}
        leftAvatar={<Avatar icon={this.getIconGivenStatus(this.state.project.status)}
        backgroundColor={this.getBackgroundColorGivenStatus(this.state.project.status)} />}
        rightIcon={<ContentForward />}
        onTouchTap={ () => { this.handleTouchTap(this.state.project.url) }}
      />
    );
  }
}

export default ProjectListItem;

ProjectListItem.propTypes = {
  project: PropTypes.object.isRequired
};
