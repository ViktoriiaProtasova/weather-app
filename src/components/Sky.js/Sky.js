import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Sky extends React.Component {
  static defaultProps = { initialValue: 0 };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Counter value</h2>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Sky;
