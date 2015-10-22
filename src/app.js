'use strict';

import React from 'react/addons';
import ReactDOM from 'react-dom';

import PlantsList from './components/PlantsList';


require('bootstrap/less/bootstrap.less');

ReactDOM.render(<PlantsList />, document.getElementById('app'));