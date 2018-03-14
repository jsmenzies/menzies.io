import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

import Resume from "./containers/resume";
import {person} from './data/person';


ReactDOM.render(
    <Resume jsonResume={person}/>,
    document.getElementById('root'));
registerServiceWorker();
