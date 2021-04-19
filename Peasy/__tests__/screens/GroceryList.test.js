import 'react-native';
import React from 'react';
import GroceryListScreen from '../../src/screens/GroceryListScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

describe('GroceryListScreen', () => {
  it('renders the screen', () => {
    const {queryByText} = render(<GroceryListScreen />);
    expect(queryByText('Find recipes and fill your list!')).not.toBeNull();
  });
});

// test('given empty GroceryList, user can add an item to it', () => {
//   const { getByPlaceholder, getByText, getAllByText } = render(
//     <GroceryListScreen />
//   );

// //   fireEvent.changeText(
// //     getByPlaceholder('Enter grocery item'),
// //     'banana'
// //   );
//   fireEvent.press(getByText('Add an item'));

//   const bananaElements = getAllByText('banana');
//   expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
// });