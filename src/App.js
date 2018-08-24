import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import RepoCard from './RepoCard';

import { directGitHubQuery } from './actions/github';

class App extends Component {
  componentDidMount() {
    this.props.directGitHubQuery();
  }

  render() {
    const { repos } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {repos && repos.length > 0 &&
            <div className="container">
              {repos.map(repo => {
                const { name, score, stargazers_count, html_url } = repo;
                return <RepoCard name={name} score={score} stars={stargazers_count} url={html_url} />;
              }
              )}
            </div>
          }
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
