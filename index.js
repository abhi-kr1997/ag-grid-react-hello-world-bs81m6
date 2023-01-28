import React, { useState } from 'react';
import { Home } from './Home';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);
