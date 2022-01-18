import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import ShoppingList from './ShoppingList';
import Input from '../components/Input';
import Item from '../components/Item';
import List from '../components/List';

// Snaps for Each Component
it('should render the Shopping List view', () => {
  const { container } = <ShoppingList />;
  expect(container).toMatchSnapshot();
});

it('Should render the Input component', () => {
  const { container } = <Input />;
  expect(container).toMatchSnapshot();
});

it('Should render the Item component', () => {
  const { container } = <Item />;
  expect(container).toMatchSnapshot();
});

it('Should render the List component', () => {
  const { container } = <List />;
  expect(container).toMatchSnapshot();
});

// Add Item Behavior
// Type 'Gallon 250% Milk into input, click submit then check if item is on the list:
it('Adds 250% Milk to the shopping list', () => {
  render(<ShoppingList />);
  const input = screen.getByLabelText(/item-input/i);
  const submit = screen.getByLabelText(/submit/i);
  expect(input).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

  userEvent.type(input, 'Gallon of 250% Milk');
  userEvent.click(submit);

  screen.getByText(/Gallon of 250% Milk/i);
});

//  Delete Item Behavior
// Add 250% Milk, verify,  then delete it and verify that it is not on the list
it('Deletes an item from the shopping list', () => {
  render(<ShoppingList />);

  const input = screen.getByLabelText(/item-input/i);
  const submit = screen.getByLabelText(/submit/i);
  expect(input).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

  userEvent.type(input, 'Gallon of 250% Milk');
  userEvent.click(submit);
  expect('Gallon of 250% Milk').toBeInTheDocument;

  const deleteButton = screen.getByLabelText(/delete-Gallon of 250% Milk/i);
  expect(deleteButton).toBeInTheDocument();

  userEvent.click(deleteButton);

  expect('Gallon of 250% Milk').notToBeInTheDocument;
});

// Edit Item Behavior
// Adds Gallon of Milk, verifies, changes 'Gallon' to 'Pint', verifies
it('Edits Gallon 250% Milk to Pint 250% Milk', () => {
  render(<ShoppingList />);

  const input = screen.getByLabelText(/item-input/i);
  const submit = screen.getByLabelText(/submit/i);
  expect(input).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

  userEvent.type(input, 'Gallon of 250% Milk');
  userEvent.click(submit);
  expect('Gallon of 250% Milk').toBeInTheDocument;

  const edit = screen.getByLabelText(/edit-Gallon of 250% Milk/i);
  expect(edit).toBeInTheDocument();

  userEvent.click(edit);

  const editInput = screen.getByLabelText(/editInput-Gallon of 250% Milk/i);
  userEvent.type(editInput, 'Pint of 250% Milk');
  expect(editInput).toBeInTheDocument();

  expect('Pint of 2% Milk').toBeInTheDocument;
});

// List Display Behavior
it('Adds Milk and Deletes Kale, checks list is rendered accurately', () => {
  render(<ShoppingList />);
  const input = screen.getByLabelText(/item-input/i);
  const submit = screen.getByLabelText(/submit/i);
  expect(input).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

  userEvent.type(input, 'Gallon of 250% Milk');
  userEvent.click(submit);
  expect('Gallon of 250% Milk').toBeInTheDocument;

  screen.getByText(/Gallon of 250% Milk/i);
  screen.getByText('Kale');
  screen.getByText('Apples');
  screen.getByText('Tofu');

  const deleteKale = screen.getByLabelText(/delete-Kale/i);
  expect(deleteKale).toBeInTheDocument;

  userEvent.click(deleteKale);
  expect('Kale').notToBeInTheDocument;
});
