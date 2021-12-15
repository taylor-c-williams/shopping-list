import React from 'react';
import ShoppingList from './ShoppingList';

it('should render the Shopping List view', () => {
  const { container } = <ShoppingList />;
  expect(container).toMatchSnapshot();
});
