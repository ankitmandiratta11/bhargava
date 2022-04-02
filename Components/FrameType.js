import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../Screens/constants/theme';
import Styles from '../GlobalStyle/Styles';
const FrameType = (props) => {
const [frameType,setFrameType] = useState("")
    return (
<View>
    <View style={{borderColor:COLORS.red,marginVertical:2,borderWidth:1,borderRadius:5,marginTop:10,padding:0}}>
 
   <Picker  selectedValue={frameType}
     onValueChange={(itemValue, itemIndex) =>{setFrameType(itemValue),props.parentCallback(itemValue)}}  style={{color:'red'}} >
       <Picker.Item label='3 Piece/Rimless'  value= '3 Piece/Rimless'/>
      <Picker.Item label='Half Rimless/Supra' value= 'Half Rimless/Supra' />
      <Picker.Item label='Full Shell/Plastic' value= 'Full Shell/Plastic' />
      <Picker.Item label='Full Metal' value= 'Full Metal' />
      <Picker.Item label='Goggles' value= 'Goggles' />
    </Picker>
    </View>
    <View>

     </View>
      </View>


    )
}

export default FrameType

const styles = StyleSheet.create({})