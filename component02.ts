import React, { Component } from 'react';

// Step 1: Define the interface for the state
interface CounterState {
  count: number; // Step 1: Define 'count' as a number
}

// Step 2: Define the class component with typed state
class Counter extends Component<{}, CounterState> {
  // Step 1: Initialize the state with its type
  state: CounterState = {
    count: 0
  };

  // Step 3: Type the increment function, return type is void
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
