import React from 'react'
import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';

describe('Gif Expert App', () => {

  test('should create', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should display a list of categories', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });

});
