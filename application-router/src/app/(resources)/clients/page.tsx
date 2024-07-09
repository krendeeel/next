'use client';
import { useState } from 'react';

export default function Clients() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
}
