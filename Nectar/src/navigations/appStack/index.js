import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home'

const Stack = createStackNavigator();

const AppStack=()=> {
  return (
    <Stack.Navigator  headerMode="none" >
    <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;