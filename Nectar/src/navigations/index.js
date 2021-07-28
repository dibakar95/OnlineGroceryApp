import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';
import AuthStack from './authStack';



const Route = () => {
  const IsUser = true;
  return (
    <NavigationContainer>
      {!IsUser ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>

  );
};

export default Route;
