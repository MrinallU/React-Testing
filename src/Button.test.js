import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// incorrect function assignment in the onClick method
// will still pass the tests.

test('the increment method increments count', () => {
  const wrapper = mount(<Button />)

  expect(wrapper.instance().state.count).toBe(0)

  // wrapper.find('button.counter-button').simulate('click')
  // wrapper.setState({count: 1})
  wrapper.instance().increment() // Simulates the function
  expect(wrapper.instance().state.count).toBe(1) // After that count should be one

  wrapper.instance().state.count = 0; // resets count for the next test 
  wrapper.instance().decrement()
  expect(wrapper.instance().state.count).toBe(-1)


}); 
