import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
  state = { visible: false };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Close' : 'Open'}
        </button>

        {this.state.visible && (
          <div className="dropdownMenu">Dropdown Menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
