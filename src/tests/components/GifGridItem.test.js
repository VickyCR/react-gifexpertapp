import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from './../../components/GifGridItem';

describe('GifGridItem component', () => {
  const title = 'Title of the image';
  const url = 'http://domain.com/image.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should be created', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with the title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title)
  });

  test('should have an image with url and alt', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have class animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBeTruthy();
  });


});
