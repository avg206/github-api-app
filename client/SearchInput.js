import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupUsername: 'reactjs',
      groupName: 'React Community',
    };
  }

  render() {
    return (
      <div className="search-input">
        <div className="ui fluid input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    );
  }
}

export default SearchInput;
