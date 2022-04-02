import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../Screens/constants/theme';
import Styles from '../GlobalStyle/Styles';
const LensType = (props) => {
const [lensType,setLensType] = useState("")
    return (
<View>
    {/* <View style={{borderColor:COLORS.red,marginVertical:2,borderWidth:1,borderRadius:5,marginTop:10,padding:0}}> */}
 
   <Picker  selectedValue={lensType}
     onValueChange={(itemValue, itemIndex) =>{setLensType(itemValue),props.parentCallback(itemValue)}}  style={{color:'red'}} >
       <Picker.Item label='Mineral Lens'  value= 'Mineral Lens'/>
      <Picker.Item label='Plastic Lens' value= 'Plastic Lens' />
      <Picker.Item label='Polycarbonate Lens' value= 'Polycarbonate Lens' />
      <Picker.Item label='Trivex Lens' value= 'Trivex Lens' />
      <Picker.Item label='Organic Lens' value= 'Organic Lens' />
    </Picker>
    {/* </View> */}
    <View>

     </View>
      </View>


    )
}

export default LensType

const styles = StyleSheet.create({})