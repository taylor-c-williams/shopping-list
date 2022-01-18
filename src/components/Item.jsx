import React from 'react';
import { useState } from 'react';
import styles from './Item.css';

export default function Item({ item, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let itemContent;
  if (isEditing) {
    itemContent = (
      <section className={styles.editArea}>
        <input
          value={item.text}
          aria-label={`editInput-${item.text}`}
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
        <input
          type="checkbox"
          checked={item.checked}
          onChange={(e) => {
            onChange({ ...item, checked: e.target.checked });
          }}
        />
        <p>{item.text}</p>
        <button
          type="button"
          aria-label={`edit-${item.text}`}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div className={styles.itemArea}>
      <label>{itemContent}</label>

      <button
        aria-label={`delete-${item.text}`}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}
