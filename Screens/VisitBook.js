import { View, Text,Image,ScrollView,FlatList,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Header } from '../Components'
import { COLORS,SIZES } from './constants/theme'
import { firebase } from '@react-native-firebase/firestore'
import Styles from '../GlobalStyle/Styles'
import Iconn from '../Components/Iconn'
import  Icon  from 'react-native-vector-icons/AntDesign';
import Loader from '../Components/Loader'
const VisitBook = (props) => {
  const {navigation} =props
  const [customers,setCustomers] = useState()
  useEffect(()=>{
    let cust =[];
       firebase.firestore().collection('customers').get()
    .then((snapShot)=>{
      snapShot.forEach((doc)=>{
        cust.push(doc.data())
      })
      setCustomers(cust)
    })

  },[])

  const renderCustomer=({item})=>{

return(
<View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginVertical:5}}>
<TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:COLORS.red,justifyContent:'space-between',backgroundColor:COLORS.red,padding:5,width:'100%',borderRadius:5}} 
onPress={()=>{navigation.navigate('cust_details',{item:item})}}>
      <Text style={Styles.cust_flatList_text_name}>{item.name.toUpperCase()}</Text>
      <Text style={Styles.cust_flatList_text_number}>{item.mobile}</Text>

</TouchableOpacity>

    </View>
 ) }
const data =()=>{
return(
  <FlatList 
  data={customers}
  renderItem={renderCustomer}
  />
)}

  return (
   <ScrollView>
    <Header title="Customer List" />
    <View style={{marginTop:15}}></View>
 
    <View style={Styles.f_d_row}>
   <Text style={Styles.flex1}> </Text>
  <TouchableOpacity style={{marginRight:15,flexDirection:'row',borderWidth:1,padding:5,borderRadius:5,borderColor:COLORS.red}} onPress={()=>{console.log('Add Customer'),navigation.navigate('add_customer')}}>
  <Icon name="plus" size={30} color={COLORS.red}  />
<Text style={{top:7,color:COLORS.red,fontWeight:'bold',marginLeft:5 }}>Add Customer</Text>
  </TouchableOpacity>
  </View>
    <View style={{marginTop:15}}></View>
   <View style={{marginHorizontal:15}}>

{customers != null ?data():<Loader/>}
  
  </View> 
      
    </ScrollView>
  )}

export default VisitBook