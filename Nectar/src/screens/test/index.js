import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';

import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions';


const Test = ({navigation}) => {
  const dispatch= useDispatch()
  const loginSelector=useSelector(state=>state)
 const [id,setId]=useState('');
 const [password,setPassword]=useState('');

const uid="deepak";
const pass="12345"

useEffect(() => {
  if(loginSelector.islogin){
    navigation.navigate("Home")
  }
}, [loginSelector])



const HandleSubmit=()=>{
  dispatch(loginUser())
 
// if(id=="" && password==""){
//     Alert.alert("pls enter valid input")
// }
// else if(id!==uid && password!==pass ){
//     Alert.alert("Id or Password does not match")
//     }
// else if(id==uid && password==pass ){
 
//navigation.navigate("Home")

// }


}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
            flex: 1,
          }}>
          <View style={{width: 400, height: 60, backgroundColor: 'blue'}}>
            <TextInput
              placeholderTextColor="white"
              textAlign="center"
              placeholder="Enter Your Id"
              style={{fontSize: 20}}
              onChangeText={(id)=>setId(id)} 
            />
          </View>

          <View
            style={{
              width: 400,
              height: 60,
              backgroundColor: 'blue',
              marginTop: 20,
            }}>
            <TextInput
              placeholderTextColor="white"
              placeholder="Enter Your Password"
              textAlign="center"
              style={{fontSize: 20}}
               onChangeText={(password)=>setPassword(password)} />
          </View>
          <TouchableOpacity
          onPress={HandleSubmit}
            style={{
              width: 250,
              height: 70,
              backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginTop: 20,
            }}>
            <Text style={{color: 'white', fontSize: 25}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Test;
