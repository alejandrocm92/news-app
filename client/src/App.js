import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';
import NewsFeedContainer from './containers/NewsFeedContainer';
import NewsArchiveContainer from './containers/NewsArchiveContainer';
import NewsNavbar from './components/NewsNavbar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3} />
          <Col xs={12} md={6}>
            <AppBar position='relative'>
              <Toolbar>
                News Application
              </Toolbar>
            </AppBar>
          </Col>
          <Col md={3} />
        </Row>
        <Row>
          <Col md={3} />
          <Col xs={12} md={6}>
            <Router>
              <Route
                path='/'
                render={
                  (history) => (
                    <NewsNavbar routerHistory={history} wrapperComponent={Link} />
                  )
                }
              >
              </Route>

              <Switch>
                <NewsProvider>
                  <Route exact path='/' component={NewsFeedContainer} />
                  <Route path='/archived' component={NewsArchiveContainer} />
                </NewsProvider>
              </Switch>
            </Router>
          </Col>
          <Col md={3} />
        </Row>
      </Grid>
    );
  }
}

export default App;
