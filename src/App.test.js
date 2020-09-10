import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';   // Import the nessecary stuff

Enzyme.configure({ adapter: new Adapter() }) // Creates the text

it('renders correctly enzyme', () => {
 const wrapper = shallow(<App />)
 expect(toJson(wrapper)).toMatchSnapshot();  
});

// To update test after testing press "w" and then "u"
