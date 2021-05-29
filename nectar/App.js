import React,{useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import Route from './src/navigations';
import Splash from './src/screens/splash'


const App = () => {
  const [isSplash,setIsSplash]=useState(true)
useEffect(() => {
setTimeout(() => {
    setIsSplash(false)
  },2000);
  
}, [])

  return(
    <>
  {
    isSplash? <Splash/>: <Route />
  }
  </>
  )
};

export default App;
