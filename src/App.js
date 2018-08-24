import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import RepoCard from './RepoCard';
import Sort from './Sort';
import Search from './Search';

import { directGitHubQuery } from './actions/github';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'score',
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  updateSearch(string) {
    this.props.directGitHubQuery(string,this.state.sort);
  }

  updateSort(sort) {
    this.setState({sort});
    this.props.directGitHubQuery('test',sort);
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
          <div className="header">
            <Search action={this.updateSearch} />
            <Sort action={this.updateSort} currentVal={this.state.sort}/>
          </div>
          {repos && repos.length > 0 &&
            <div>
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
  directGitHubQuery: (query, sort) => dispatch(directGitHubQuery(query, sort))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
