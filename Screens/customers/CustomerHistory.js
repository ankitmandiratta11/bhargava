import { View, Text,ScrollView,TouchableOpacity,FlatList,Alert } from 'react-native'
import React,{useEffect, useState} from 'react';
import Styles from '../../GlobalStyle/Styles';
import { COLORS,SIZES } from '../constants/theme';
import Loader from '../../Components/Loader';
import { firebase } from '@react-native-firebase/firestore';
import {Header } from '../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomerHistory = (props) => {
const {route,navigation} = props
const item = route.params.item
const [list,setList] = useState();
useEffect(()=>{
    query_execute()
    
    },[])  

    const query_execute =async()=>{
        let ID = await AsyncStorage.getItem('userID')
        let orders =[];
firebase.firestore().collection('users').doc(ID).collection('orders').where('mobile1','==','9602971961').get()
.then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        if(doc.exists){
              orders.push(doc.data())
          }    
    })
    setList(orders)
})
    }

    const renderOrders=({item})=>{
    return(
    <View style={{marginHorizontal:5,justifyContent:'center',alignItems:'center',borderWidth:1,padding:5,borderRadius:10,marginVertical:3}}>
     <TouchableOpacity onPress={()=>{navigation.navigate('order_details',{item:item})}}>   
             <Text style={{color:'red',fontSize:18}}>Order Date :{item.orderDate}  </Text>
        </TouchableOpacity>
        </View>
    )}

    //Main return
return (
    <ScrollView>
<Header  title="ORDERS HISTORY LIST" />
<View style={{marginTop:10}}></View>
    <FlatList 
    data={list}
    renderItem={renderOrders}
    />
    </ScrollView>
  )}

export default CustomerHistory