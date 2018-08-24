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
          <h1 className="App-title">Github Query Guy</h1>
        </header>
        <div className="App-intro">
          {repos && repos.length > 0 &&
            <div className="container">
              {repos.map(repo => {
                const { description, html_url, language, name, owner, score, stargazers_count } = repo;
                return <RepoCard
                        description={description}
                        key={name}
                        language={language}
                        name={name}
                        owner={owner.login}
                        score={score}
                        stars={stargazers_count}
                        url={html_url}
                      />;
              }
              )}
            </div>
          }
        </div>
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
