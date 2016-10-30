import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Projects from './components/Projects';

injectTapEventPlugin();

var appProjects = document.getElementById('appProjects')
if ( appProjects ) {
    ReactDOM.render(<Projects/>, document.getElementById('appProjects'));
}