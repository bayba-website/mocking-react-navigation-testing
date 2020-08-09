/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootTabNavigator from './app/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootTabNavigator />
    </>
  );
};
export default App;
