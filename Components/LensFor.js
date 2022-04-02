import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../Screens/constants/theme';
import Styles from '../GlobalStyle/Styles';
const LensFor = (props) => {
const [lensFor,setLensFor] = useState("")
    return (
<View>
    {/* <View style={{borderColor:COLORS.red,marginVertical:2,borderWidth:1,borderRadius:5,marginTop:10,padding:0}}> */}
 
   <Picker  selectedValue={lensFor}
     onValueChange={(itemValue, itemIndex) =>{setLensFor(itemValue),props.parentCallback(itemValue)}}  style={{color:'red'}} >
       <Picker.Item label='Distance'  value= 'Distance'/>
      <Picker.Item label='Near' value= 'Near' />
      <Picker.Item label='Bifocal' value= 'Bifocal' />
      <Picker.Item label='Progressive' value= 'Progressive' />

    </Picker>
    {/* </View> */}
    <View>

     </View>
      </View>


    )
}

export default LensFor

