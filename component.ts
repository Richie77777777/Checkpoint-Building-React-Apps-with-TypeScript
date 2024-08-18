import React from 'react';

// Step 1: Define the interface for the props
interface GreetingProps {
  name: string; // Step 3: Type the 'name' prop as a string
}

// Step 2: Apply the props type to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
