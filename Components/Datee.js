import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react';
import Styles from '../GlobalStyle/Styles'
import { COLORS } from '../Screens/constants/theme';

const Datee = () => {
const date= new Date() 
const [pDat,setPDat] = useState(date.getDate().toString() + "-" +(date.getMonth()+1).toString()+ "-" +date.getFullYear().toString())
return (
    <View>
      <TextInput  style={{...Styles.testInput,color:COLORS.black}} 
    value={pDat} 
    editable={false}    />
   </View>
  )
}

export default Datee