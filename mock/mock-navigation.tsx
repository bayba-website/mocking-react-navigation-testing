import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
interface MockProps {
  component: any;
  params: any;
}

const MockNavigation = ({component, params = {}}: MockProps) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={component}
          initialParams={params}
          name="MockScreen"
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MockNavigation;
