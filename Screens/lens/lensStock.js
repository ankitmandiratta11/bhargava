import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Header } from '../../Components'
import { COLORS,SIZES } from '../constants/theme'
import Styles from '../../GlobalStyle/Styles'
import { DataTable } from 'react-native-paper'
import { firebase } from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'


const LensStock = () => {

const [data,setData] =useState([])
  useEffect(()=>{
    db_query()
  },[])

  const db_query=async()=>{
       let ID = await AsyncStorage.getItem('userID')
      let frames = []
       firebase.firestore().collection('users').doc(ID).collection('lensStock').get()
    .then((querySnap)=>{
      querySnap.forEach((doc)=>{
        frames.push(doc.data())
        console.log("document " , doc.data())
      })
setData(frames)
    })           
}

   const renderLens=({item})=>{
return(
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <Text style={Styles.frameDetails_text}>{item.supplier_name}</Text>
  <Text style={Styles.frameDetails_text}>{item.lens}</Text>
  <Text style={Styles.frameDetails_text}>{item.quantity != null?item.quantity:item.pair}</Text>
</View>
  
)

   }
  return (
    <ScrollView>
  <Header title="Lens Stock Details" />
  <View style={{marginTop:10}}></View>

<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <Text style={Styles.frameDetails_heading}>Supplier Name</Text>
  <Text style={Styles.frameDetails_heading}>Lens Type</Text>
  <Text style={Styles.frameDetails_heading}>Quantity</Text>
</View>
<View>
  <View style={{marginTop:10}}>
  <FlatList
data={data}
renderItem={renderLens}
/>
</View>
</View>

    </ScrollView>
  )
}

export default LensStock

