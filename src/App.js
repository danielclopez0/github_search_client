import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { directGitHubQuery } from './actions/github';

class App extends Component {
  componentDidMount() {
    this.props.directGitHubQuery();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.github.items
})

const mapDispatchToProps = dispatch => ({
  directGitHubQuery: (query) => dispatch(directGitHubQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
