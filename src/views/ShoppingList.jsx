import { useReducer } from 'react';
import Input from '../components/Input';
import List from '../components/List';

const listNumber = 3;

const itemsList = [
  { id: 0, text: 'Meat 🍖', checked: false },
  { id: 1, text: 'Potatoes 🥔', checked: false },
  { id: 2, text: 'Broccoli 🥦', checked: false },
];

function listReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          checked: false,
        },
      ];
    }
    case 'edit': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Wrong action: ${action.type}`);
    }
  }
}
export default function ShoppingList() {
  const [items, dispatch] = useReducer(listReducer, itemsList);

  const handleAddItem = (text) => {
    dispatch({
      type: 'add',
      id: listNumber + 1,
      text,
    });
  };

  const handleChangeItem = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId,
    });
  };
  return (
    <>
      <Input onAddItem={handleAddItem} />
      <List
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}
