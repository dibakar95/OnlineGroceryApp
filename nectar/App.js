import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import Route from './src/navigations';
import Splash from './src/screens/splash';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      <Provider store={store}>{isSplash ? <Splash /> : <Route />}</Provider>
    </>
  );
};

export default App;
