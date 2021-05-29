// @flow
import {AsyncStorage} from 'react-native';

export const getItem = (key: string): any =>
  new Promise(async (resolve, reject) => {
    await AsyncStorage.getItem(key, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

export const setItem = (key: string, value: any): any =>
  new Promise(async (resolve, reject) => {
    await AsyncStorage.setItem(key, value);
    resolve();
  });

export const clearItem = (key: string): any =>
  new Promise(async (resolve, reject) => {
    await AsyncStorage.removeItem(key, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
