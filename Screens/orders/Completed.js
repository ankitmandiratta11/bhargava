import { StyleSheet, Text, View,SafeAreaView,ScrollView,FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Header } from '../../Components'
import { firebase } from '@react-native-firebase/firestore'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OrderDetails from './OrderDetails'
import Loader from '../../Components/Loader'
    
const Completed = (props) => {

    
  const {navigation} = props
  const [id,setid]= useState('') 
  const [completeOrders,setCompleteOrders] = useState()

 useEffect(()=>{
  query_execute()
  },[])


 const query_execute =async()=>{

    let ID = await AsyncStorage.getItem('userID')
  let completed =[]
   firebase.firestore().collection('users').doc(ID).collection('orders').where("status", "==", 'complete').get()
          .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                 completed.push(doc.data())
                   });
              setCompleteOrders(completed)
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          });
   }
   const renderItem =({item})=>{
     return(
    <View style={{marginTop:3,padding:5}}>
    <TouchableOpacity style={{padding:5,flexDirection:'row',backgroundColor:'red',justifyContent:'space-around'}} onPress={()=>{console.log('value'),navigation.navigate('order_details',{item:item})}}>
    <Text style={{fontSize:18,color:'white',marginHorizontal:10}}>{item.completeDate}</Text>
    <Text style={{fontSize:18,color:'white',marginHorizontal:10}}>{item.name}</Text>
    <Text style={{fontSize:18,color:'white',justifyContent:'flex-end'}}>{item.balAmount}(Rs)</Text>
    </TouchableOpacity>
    <View style={{height:1}}></View>
    </View>


        )}

        const data=()=>{
          return(
        <FlatList
        data ={completeOrders}
        renderItem={renderItem}
        />
          )}
        
        const noData =()=>{
          return (
              <View>
          <Loader />
               </View>
          )}


    //Main return
  return (
<SafeAreaView>
<Header title="Order Completed "/>
<View style={{marginTop:3,padding:5}}>
    <TouchableOpacity style={{padding:5,flexDirection:'row',backgroundColor:'red',justifyContent:'space-around'}}>
    <Text style={{fontSize:18,color:'white',marginHorizontal:5}}>Completion </Text>
    <Text style={{fontSize:18,color:'white',marginHorizontal:10}}>Customer </Text>
    <Text style={{fontSize:18,color:'white',marginRight:0}}>Payable  </Text>
    </TouchableOpacity>
    <View style={{height:1}}></View>
    </View>

<ScrollView style={{marginTop:20}}>
{ completeOrders != null?data():<Loader />}
</ScrollView>
</SafeAreaView>

    
  )
}

export default Completed

