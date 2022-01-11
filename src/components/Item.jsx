import { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let itemContent;
  if (isEditing) {
    itemContent = (
      <section>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({ ...item, text: e.target.value });
          }}
        />
        <button type="button" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </section>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={(e) => {
          onChange({ ...item, checked: e.target.checked });
        }}
      />
      {itemContent}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
