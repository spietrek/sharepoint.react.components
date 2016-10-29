import React, {
  Component
} from 'react';
import './App.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="projectsContainer">
          <Projects />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;