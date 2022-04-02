import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../GlobalStyle/Styles'
import { COLORS,SIZES } from '../Screens/constants/theme'
const Links = ({title,onPress,ion,name}) => {
  return (
<View style={Styles.hp_options_View}>
    <TouchableOpacity style={Styles.hp_options_to} onPress={onPress}>
        {ion =="2"?<Icons name={name} style={Styles.hp_options_icon} color={COLORS.black} size={22}/>:<Ionicons name={name} style={Styles.hp_options_icon} color={COLORS.black} size={22}  />}
      <Text style={Styles.hp_options_text}>{title}</Text>
    </TouchableOpacity>
      </View>

  )
}

export default Links