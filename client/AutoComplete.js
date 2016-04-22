import React from 'react';
import renderLanguage from './utils/renderLanguage';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onRepoClick = this.onRepoClick.bind(this);
  }
  
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }


  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }
  
  onRepoClick(id) {
    return () => {
      this.props.onRepoSelect(id);
    };
  }
  
  onKeyDown(e) {
    if (e.keyCode === 9 && this.props.items.length > 0) {
      this.props.onRepoSelect(this.props.items[0].id);
    }
  }
  
  render() {
    if (this.props.items.length === 0) {
      return null;
    }
    
    const items = this.props.items.map((value) => (
      <a key={value.id} onClick={this.onRepoClick(value.id)} >
        <h4 className="ui header">{value.full_name} - {renderLanguage(value.language)}</h4>
        <p>{value.description}</p>
      </a>
    ));
    
    return (
      <div className="autocomplete ui vertical menu">
        {items}
      </div>
    );
  }
}

AutoComplete.propTypes = {
  items: React.PropTypes.array,
  
  onRepoSelect: React.PropTypes.func,
};

export default AutoComplete;
