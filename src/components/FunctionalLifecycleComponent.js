import React, { useState, useEffect } from 'react';

export default function FunctionalLifecycleComponent(props) {
  console.log(`render called`);
  const [count, setCount] = useState(0);

  const _increment = () => setCount(count + 1);

  //componentDidUpdate - Functional style
  useEffect(() => {
    console.log(`componentDidUpdate called`);
  });

  // Watch a variable and have access to it
  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count]);

  //componentDidUpdate - Functional style
  useEffect(() => {
    return () => {
      console.log(`This should only run once`);
    };
    w;
  }, []);

  return (
    <>
      <h1>Hello from functional lifecycle component</h1>
      <button onClick={_increment}>Increment</button>
      <h2>App count: {count}</h2>
    </>
  );
}
