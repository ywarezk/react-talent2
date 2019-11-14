

import React from 'react';
import {render} from 'react-dom';

const h1 = React.createElement('h1', null, 'hello world');


render(h1, document.getElementById('container'));