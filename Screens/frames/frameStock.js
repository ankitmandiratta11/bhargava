import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Header } from '../../Components'
import { COLORS,SIZES } from '../constants/theme'
import Styles from '../../GlobalStyle/Styles'
import { DataTable } from 'react-native-paper'
import { firebase } from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'


const FrameStock = () => {

const [data,setData] =useState([])
  useEffect(()=>{
    db_query()
  },[])

  const db_query=async()=>{
       let ID = await AsyncStorage.getItem('userID')
      let frames = []
       firebase.firestore().collection('users').doc(ID).collection('framestock').get()
    .then((querySnap)=>{
      querySnap.forEach((doc)=>{
        frames.push(doc.data())
        console.log("document " , doc.data())
      })
setData(frames)
    })           
}

   const renderFrames=({item})=>{
return(
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <Text style={Styles.frameDetails_text}>{item.supplier_name}</Text>
  <Text style={Styles.frameDetails_text}>{item.frameType}</Text>
  <Text style={Styles.frameDetails_text}>{item.quantity}</Text>
</View>
  
)

   }
  return (
    <ScrollView>
  <Header title="Frame Stock Details" />
  <View style={{marginTop:10}}></View>

<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <Text style={Styles.frameDetails_heading}>Supplier Name</Text>
  <Text style={Styles.frameDetails_heading}>Frame Type</Text>
  <Text style={Styles.frameDetails_heading}>Quantity</Text>
</View>
<View>
  <View style={{marginTop:10}}>
  <FlatList
data={data}
renderItem={renderFrames}
/>
</View>
</View>

    </ScrollView>
  )
}

export default FrameStock

