import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const goHome = () => navigation.navigate('Home');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
      <Button title="Home" onPress={goHome} />
    </View>
  );
};

export default SearchScreen;
