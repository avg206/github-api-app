import React from 'react';
import SearchInput from './SearchInput';
import ShowResult from './ShowResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupUsername: 'reactjs',
      groupName: 'React Community',
    };
  }

  render() {
    return (
      <div className="ui main text container">
        <div className="ui segment">
          <h2 className="center aligned">Search form</h2>
          
          <SearchInput />
          <ShowResult repo={null} />
        </div>
      </div>
    );
  }
}

export default App;
