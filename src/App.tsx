import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectList} />
          <Route path="/projects/:projectId" component={ProjectDetails} />
          <Route path="/contact" component={Contact} />
          {/* Add more routes as needed */}
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
