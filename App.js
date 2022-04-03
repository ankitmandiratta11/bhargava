import {  StyleSheet, Text, View,Alert,ActivityIndicator,Image } from 'react-native'
import React,{useEffect, useState,useMemo, useReducer} from 'react'
import Styles from './GlobalStyle/Styles'
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import  {Login,Home,NewOrder,PendingOrder,PendingPayment,Stock,VisitBook,Reports,OrderLens,DataManagement,Languages,Add_Customer} from './Screens'
import { Progressive,ContactLens,Bifocal,SingleVision,LensStock } from './Screens/lens';
import { OrderDetails } from './Screens/orders';
import Trial from './Screens/Trial';
import { NewFrame,FrameStock } from './Screens/frames';
import appTheme, { COLORS } from './Screens/constants/theme';
import {AuthContext} from './Components/context';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './Screens/SplashScreen';
import splash from './constants/images'
import images  from './constants/images'
import { CustomerDetails,CustomerHistory } from './Screens/customers';
const Stack = createStackNavigator(); 

const App = () => {
 // const [userToken,setUserToken]= useState(null)
 // const [isLoading,setIsLoading] = useState(false)  
  

  const initialLoginState = {
   isLoading : false,
   userName : null,
   userToken : null,
   userID:null
 }


 useEffect(()=>{
 setTimeout(async()=>{
     let userToken=null
 try{
userToken = await AsyncStorage.getItem('userName')
ID = await AsyncStorage.getItem('userID')
}
catch(e){
  console.log(e)
}
dispatch({type:'RETRIEVE',token:userToken})
dispatch({type:'ID',token:JSON.parse(ID)})
},100)
},[])



const loginReducer =(prevState,action)=>{
switch(action.type){
  case 'LOGIN':
    return {
      ...prevState,
      userName:action.id,
      userToken:action.token,
      isLoading:false

    }
  case 'LOGOUT':
    return {
      ...prevState,
      userName:null,
      userToken:null
    }

  case 'REGISTER':
    return { 
      ...prevState,
      userName:action.id,
      userToken:action.token,
      isLoading:false

    }    
case 'RETRIEVE':
  return {
    ...prevState,
    userToken:action.token,
    isLoading:false

  }
  case 'ID':
  return {
    ...prevState,
    userID:action.token,
    isLoading:false

  }

}
}

const [loginState,dispatch ]= useReducer(loginReducer,initialLoginState)

const autContext = useMemo(()=>({

  signIn:async (email)=>{
    let userToken=null
    try{
     userToken = await AsyncStorage.setItem('userName',email)
    }
    catch(e){
      console.log(e)
    }
  dispatch({type:'LOGIN',id:email,token:userToken})
},

signOut : async()=>{
try{
await AsyncStorage.removeItem('userName')

}
catch(e){
  console.log(e)
}
dispatch ({type:'LOGOUT'})
},

}),[]);

//Main return 

  return (
<AuthContext.Provider  value={autContext}>
<NavigationContainer>

{loginState.userToken == null?(
  <Stack.Navigator>

<Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
</Stack.Navigator> )
:(
  <Stack.Navigator>
{/*  Main home Page */}

  <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
   <Stack.Screen name="new_order" component={NewOrder} options={{headerShown:false}}/>
  <Stack.Screen name="pending_payment" component={PendingPayment} options={{headerShown:false}}/>
  <Stack.Screen name="pending_order" component={PendingOrder} options={{headerShown:false}}/>
  <Stack.Screen name="stock" component={Stock} options={{headerShown:false}}/>
  <Stack.Screen name="reports" component={Reports} options={{headerShown:false}}/>
  <Stack.Screen name="visit_book" component={VisitBook} options={{headerShown:false}}/>
  <Stack.Screen name="order_lens" component={OrderLens} options={{headerShown:false}}/>
  <Stack.Screen name="data_management" component={DataManagement} options={{headerShown:false}}/>
  <Stack.Screen name="languages" component={Languages} options={{headerShown:false}}/>
 {/* New  Frame */}
  <Stack.Screen name="new_frame" component={NewFrame} options={{headerShown:false}}/>
  {/* Lens */}

  {/* trial */}
  <Stack.Screen name="trial" component={Trial} options={{headerShown:false}}/>
  <Stack.Screen name="single_vision" component={SingleVision} options={{headerShown:false}}/>
  <Stack.Screen name="bifocal" component={Bifocal} options={{headerShown:false}}/>
  <Stack.Screen name="contact_lens" component={ContactLens} options={{headerShown:false}}/>
  <Stack.Screen name="progressive" component={Progressive} options={{headerShown:false}}/>
  <Stack.Screen name="add_customer" component={Add_Customer} options={{headerShown:false}}/>
<Stack.Screen name="cust_details" component={CustomerDetails} options={{headerShown:false}} />
  <Stack.Screen name="order_details" component={OrderDetails} options={{headerShown:false}} />
  <Stack.Screen name="customer_history" component={CustomerHistory} options={{headerShown:false}} />
  <Stack.Screen name="frame_stock" component={FrameStock} options={{headerShown:false}} />
  <Stack.Screen name="lens_stock" component={LensStock} options={{headerShown:false}} />

</Stack.Navigator>
  )}
</NavigationContainer>
</AuthContext.Provider>
)}


export default App