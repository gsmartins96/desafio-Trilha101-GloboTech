
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    
    <Router>
      <AppRoutes />
    </Router>
  </>
);

export default App;