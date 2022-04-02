import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../Screens/constants/theme';
import Styles from '../GlobalStyle/Styles';
const Side = (props) => {
const [side,setSide] = useState("")
    return (
<View>
    {/* <View style={{borderColor:COLORS.red,marginVertical:2,borderWidth:1,borderRadius:5,marginTop:10,padding:0}}> */}
 
   <Picker  selectedValue={side}
     onValueChange={(itemValue, itemIndex) =>{setSide(itemValue),props.parentCallback(itemValue)}}  style={{color:'red'}} >
       <Picker.Item label='Left'  value= 'Left '/>
      <Picker.Item label='Right' value= 'Right' />
    </Picker>
    {/* </View> */}
    <View>

     </View>
      </View>


    )
}

export default Side

