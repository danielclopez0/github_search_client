import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import RepoCard from './RepoCard';
import Sort from './Sort';
import Search from './Search';

import { gitHubQuery } from './actions/github';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'score',
      string: ''
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  updateSearch(string) {
    this.setState({string});
    this.props.gitHubQuery(string,this.state.sort);
  }

  updateSort(sort) {
    this.setState({sort});
    this.props.gitHubQuery(this.state.string,sort);
  }

  render() {
    const { repos } = this.props;
    const { string, sort } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Query Guy</h1>
        </header>
        <div className="App-intro">
          <div className="header">
            <Search action={this.updateSearch}/>
            <Sort action={this.updateSort} currentVal={sort}/>
          </div>
          {repos && repos.length > 0 &&
            <div>
              {string.length > 0 &&
                <div>{`Search Term: ${string}`}</div>
              }
              <div className="container">
                {repos.map((repo, index) => {
                  const { description, html_url, language, name, owner, score, stargazers_count } = repo;
                  return <RepoCard
                          description={description}
                          key={name+index}
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
  gitHubQuery: (query, sort) => dispatch(gitHubQuery(query, sort))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
