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
    const items = this.props.hints.map((value) => (
      <a key={value.id} className="item">
        <h4 className="ui header">{value.full_name} - {value.language}</h4>
        <p>{value.description}</p>
      </a>
    ));
    let autocomplete = '';
    
    if (items.length) {
      autocomplete = (
        <div className="autocomplete ui vertical menu">
          {items}
        </div>
      );
    }
    
    return (
      <div className="search-input">
        <div className="ui fluid input" data-label={this.props.groupName}>
          <input type="text" onChange={this.handleInputChange} value={this.state.search} />
          <input type="text" className="pseudo" value={this.props.placeholder} />
          
          {autocomplete}
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  groupName: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  hints: React.PropTypes.array,
  
  onSearch: React.PropTypes.func,
};

export default SearchInput;
