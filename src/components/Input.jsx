import { useState } from 'react';

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
          placeholder="New Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      Add Item
    </div>
  );
}
