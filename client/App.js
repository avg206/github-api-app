import React from 'react';
import SearchInput from './SearchInput';
import ShowResult from './ShowResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupUsername: 'reactjs',
      groupName: '',
      repos: [],
      resultRepos: [],
      placeholder: '',
      foundRepo: null,
    };
    
    this.onRepoSelect = this.onRepoSelect.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
  
  onSearch(text) {
    const foundRepos = this.state.repos.filter((value) => value.full_name.indexOf(text) === 0);
    let placeholder = '';
    
    if (foundRepos.length > 0) {
      placeholder = foundRepos[0].full_name;
    }
    
    this.setState({
      resultRepos: foundRepos,
      placeholder,
    });
  }
  
  onRepoSelect(repoId) {
    const repo = this.state.repos.find(value => value.id === repoId);
    
    this.setState({
      foundRepo: repo,
      placeholder: '',
      resultRepos: [],
    });
  }

  loadData() {
    fetch(`https://api.github.com/users/${this.state.groupUsername}/repos`)
      .then(respond => respond.json())
      .then(respond => {
        this.setState({ repos: respond });
      });
    
    fetch(`https://api.github.com/users/${this.state.groupUsername}`)
      .then(respond => respond.json())
      .then(respond => {
        this.setState({ groupName: respond.name });
      });
  }
  
  render() {
    const hints = this.state.resultRepos.slice(0, 3);
    
    return (
      <div className="ui main text container">
        <div className="ui segment">
          <h2 className="center aligned">Search form</h2>
          
          <SearchInput
            groupName={this.state.groupName}
            placeholder={this.state.placeholder}
            onSearch={this.onSearch}
            hints={hints}
            onRepoSelect={this.onRepoSelect}
          />
          <ShowResult repo={this.state.foundRepo} />
        </div>
      </div>
    );
  }
}

export default App;
