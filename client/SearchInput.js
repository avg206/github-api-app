import React from 'react';
import AutoComplete from './AutoComplete';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    
    this.onRepoSelect = this.onRepoSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  onRepoSelect(id) {
    this.setState({ search: '' });
    this.props.onRepoSelect(id);
  }
  
  handleInputChange(e) {
    const newValue = e.target.value;
    
    this.setState({ search: newValue });
    this.props.onSearch(newValue);
  }
  
  render() {
    const inputPlaceholder = this.props.placeholder ? '' : 'Search repositories...';

    return (
      <div className="search-input">
        <div className="ui fluid input" data-label={this.props.groupName}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.search}
            placeholder={inputPlaceholder}
          />
          <input type="text" className="pseudo" value={this.props.placeholder} />
          
          <AutoComplete
            items={this.props.hints}
            onRepoSelect={this.onRepoSelect}
          />
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
  onRepoSelect: React.PropTypes.func,
};

export default SearchInput;
