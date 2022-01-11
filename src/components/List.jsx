import Item from './Item';

export default function List({ items, onChangeItem, onDeleteItem }) {
  return (
    <div>
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
