import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import Welcome from '../../screens/welcome';

const Stack = createStackNavigator();

const AppStack=()=> {
  return (
    <Stack.Navigator  headerMode="none" initialRouteName={Welcome} >
       <Stack.Screen name="Welcome" component={Welcome} /> 
    <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;
