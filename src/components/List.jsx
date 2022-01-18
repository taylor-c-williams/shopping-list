import React from 'react';
import Item from './Item';
import styles from './Item.css';

export default function List({ items, onChangeItem, onDeleteItem }) {
  return (
    <div className={styles.listContainter}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onChange={onChangeItem} onDelete={onDeleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
