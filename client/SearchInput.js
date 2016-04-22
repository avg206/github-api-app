import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(e) {
    const newValue = e.target.value;
    
    this.setState({ search: newValue });
    this.props.onSearch(newValue);
  }

  render() {
    return (
      <div className="search-input">
        <div className="ui fluid input" data-label={this.props.groupName}>
          <input type="text" onChange={this.handleInputChange} value={this.state.search} />
          <input type="text" className="pseudo" value={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  groupName: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onSearch: React.PropTypes.func,
};

export default SearchInput;
