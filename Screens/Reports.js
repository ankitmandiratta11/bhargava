import { View, Text,TextInput,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react';
import {COLORS,SIZES } from './constants/theme';
import Styles from '../GlobalStyle/Styles';
import { firebase } from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';

const Reports = (props) => {

const {navigation} = props  
  const [mobile,setMobile] = useState('')

  const check_details=()=>{
  if(mobile.length == 10){
    firebase.firestore().collection('customers').doc(mobile).get()
    .then((doc)=>{

      if(doc.exists){
      var cust = doc.data();
      navigation.navigate('cust_details',{item:cust})

      console.log(cust.name)
         }
         else {
          Alert.alert('','Customer doesnt exist')
         }
    })
  }  
  else{
    Alert.alert('','Enter the correct Mobile Number')
  }
  
  }
  return (
    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:SIZES.height*.40}}>
<TextInput placeholder='Search' style={{...Styles.testInput,width:SIZES.width*.70}} placeholderTextColor={COLORS.red} 
value={mobile}  onChangeText={(value)=>{setMobile(value)}} keyboardType={'numeric'} />

<View style={{...Styles.touchop_view}}>
<TouchableOpacity style={{...Styles.touchop}} onPress={()=>{check_details()}}><Text style={Styles.touchop_text}>Search</Text></TouchableOpacity>
</View>
    </View>
  )
}

export default Reports