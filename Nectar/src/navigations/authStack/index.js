import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Test from '../../screens/test'
import Home from '../../screens/home'

const Stack = createStackNavigator();

const AuthStack=()=> {
  return (
    <Stack.Navigator headerMode="none">
     <Stack.Screen name="Test" component={Test} />
     <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AuthStack;
