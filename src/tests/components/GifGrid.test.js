import React from 'react';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid component', () => {

  test('should create', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category="Goku" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should display the items from useFetchGifs', () => {
    const gifs = [{
      id: '313221313',
      title: 'Title Image',
      url: 'http://domain.com/image.png',
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category="Goku" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
