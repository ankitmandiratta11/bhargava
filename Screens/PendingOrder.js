import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Pending,Completed,Total} from './orders'
import { Header } from '../Components'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from './constants/theme'
const Tab = createBottomTabNavigator();
const PendingOrder = () => {


  return (
<Tab.Navigator screenOptions={({route})=>({
 tabBarIcon:({focused,color,size})=>{
   let iconName;
   if(route.name==="Pending"){
     iconName=focused?'ios-information-circle':'ios-information-circle-outline'
   }
   else if(route.name =="Completed"){
    iconName=focused?'checkmark':'checkmark'
   }
  
   else if(route.name =="Total"){
    iconName=focused?'checkmark-done':'checkmark-done-circle'
   }
  
   return <Ionicons name={iconName} color={color} size={size}/>
 },
 tabBarActiveTintColor:COLORS.red,
tabBarInactiveTintColor:COLORS.gray

})}



>
<Tab.Screen name="Pending" component={Pending} options={{headerShown:false}} />
<Tab.Screen name="Completed" component={Completed} options={{headerShown:false}} />
<Tab.Screen name="Total" component={Total} options={{headerShown:false}} />

</Tab.Navigator>
  )
}

export default PendingOrder