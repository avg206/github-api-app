import React from 'react';
import SearchInput from './SearchInput';
import ShowResult from './ShowResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupUsername: 'reactjs',
      groupName: 'React Community',
      repos: [],
      resultRepos: [],
      placeholder: '',
    };
    
    this.onSearch = this.onSearch.bind(this);
    this.loadRepos = this.loadRepos.bind(this);
  }

  componentDidMount() {
    this.loadRepos();
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

  loadRepos() {
    fetch(`https://api.github.com/users/${this.state.groupUsername}/repos`)
      .then(respond => respond.json())
      .then(respond => {
        this.setState({ repos: respond });
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
          />
          <ShowResult repo={null} />
        </div>
      </div>
    );
  }
}

export default App;
