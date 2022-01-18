import { useState } from 'react';
import React from 'react';

export default function Input({ onAddItem }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    onAddItem(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="item-input"
          placeholder="New Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button aria-label="submit" type="submit">
          Submit
        </button>
      </form>
      Add Item
    </div>
  );
}
