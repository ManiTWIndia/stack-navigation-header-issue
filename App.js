import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './screen1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* When passed headerShown: false, the select dropdown position is as expected */}
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
