import React from 'react';
import {Text} from 'react-native';
import {create, act, ReactTestRenderer} from 'react-test-renderer';
import MockNavigation from '../../../mock/mock-navigation';
import SearchScreen from '../SearchScreen';

describe('Search Screen', () => {
  let render: ReactTestRenderer;
  beforeAll(() => {
    act(() => {
      render = create(<MockNavigation component={SearchScreen} />);
    });
  });

  it('should component correctly and matches snapshot', () => {
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should component correctly Search Screen', () => {
    const screen = render.root.findAllByType(Text)[0].props.children;
    expect(screen).toEqual('Search Screen');
  });
});
