import React,{useContext, useEffect, useState} from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import Styles from '../GlobalStyle/Styles';
import { AuthContext } from '../Components/context';
import { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  const {navigation} = props
const { signIn } = useContext(AuthContext)

const [email,setEmail]= useState("")
const [password,setPassword]= useState("")
const [errors,setErrors] =useState("")
const loginHandler= async()=>{
 if(email != "" && password !=  ""){

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(async(userCredential) => {

    var user = userCredential.user;
    console.log(user.uid)  
   await AsyncStorage.setItem('userID',JSON.stringify(user.uid))
   signIn(email)
  

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
     setErrors("")
  } 
  else{ 
    setErrors("Email and Password are must")
  }
}

return (
    <View style={{...Styles.flex1,marginHorizontal:20}}>
    <View style={Styles.flex1}>
    <View style={Styles.container}>
    <Text style={Styles.LoginText}>LOGIN</Text>
    </View>
<TextInput placeholder='Enter the Email' style={Styles.testInput}
value={email} onChangeText={(email)=>{setEmail(email)}} />

<TextInput placeholder='Enter the Password ' style={Styles.testInput}
value={password} onChangeText={(password)=>{setPassword(password)}} />

<View style={Styles.container}>
  <Text style={Styles.error1}>{errors}</Text>
</View>
<View style={Styles.touchop_view}>
<TouchableOpacity style={Styles.touchop} onPress={()=>{loginHandler()}}>
  <Text style={Styles.touchop_text}>Login</Text>
</TouchableOpacity>
</View>
</View>
    </View>
  )}

export default Login