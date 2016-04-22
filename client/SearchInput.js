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
        <div className="ui fluid input" data-label={this.props.groupName}>
          <input type="text" />
          <input type="text" className="pseudo" defaultValue={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  groupName: React.PropTypes.string,
  placeholder: React.PropTypes.string,
};

export default SearchInput;
