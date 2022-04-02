import { StyleSheet, Text, View,TextInput,Modal,Image } from 'react-native'
import React,{useState} from 'react'

import {SelectSph,SelectVa }from './selectable'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Trial = () => {
  const [displaySph,setDisplaySph]= useState(false)
  const [sph,setSph] =useState('')
  const [va,setVa] = useState('')
  const [displayVa,setDisplayVa] = useState(false)
  
  const parentcallback=(value)=>{
    setSph(value)
    setDisplaySph(false)
  }
  const parentcallback_va=(value)=>{
    setVa(value)
    setDisplayVa(false)
  }

  
  return (
    <View>
      <Text>Trial</Text>
      
<TextInput placeholder="Select VA " value={sph} onPressIn={()=>setDisplayVa(true)}  />
{displayVa && 
<SelectVa parentcallback={parentcallback_va} />

}
    </View>
  )
}

export default Trial

const styles = StyleSheet.create({})