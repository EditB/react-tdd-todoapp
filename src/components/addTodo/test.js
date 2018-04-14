/* global expect, it, describe */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import AddTodo from '.';

configure({ adapter: new Adapter() });

describe('AddTodo component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });
});
