// Set up your application entry point here...
import './favicon.ico';
import './sass/style.scss';
import './js/bin/materialize.min';
import React from 'react';
import {render} from 'react-dom';
import Calculator from './components/calculator';

render(<Calculator />, document.getElementById('app'));