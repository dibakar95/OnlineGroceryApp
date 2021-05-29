import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../../screens/welcome' 

const Stack = createStackNavigator();

const AuthStack=()=> {
  return (
    <Stack.Navigator headerMode="none">
     <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default AuthStack;
