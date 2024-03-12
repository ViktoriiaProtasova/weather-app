import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Increase + 1
      </button>
      <br />
      <br />
      <button type="button" onClick={onDecrement}>
        Decrease - 1
      </button>
    </div>
  );
};

export default Controls;
