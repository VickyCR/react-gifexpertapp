import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from './../../components/AddCategory';

describe('AddCategory component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test('should create', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the input', () => {
    const event = { target: { value: 'Hello World' } };

    wrapper.find('input').simulate('change', event);

    expect(wrapper.find('input').prop('value')).toEqual(event.target.value)
  });

  test('Should not call the submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call the submit', () => {
    const event = { target: { value: 'Hello World' } };

    wrapper.find('input').simulate('change', event);
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBeFalsy();
  })


});
