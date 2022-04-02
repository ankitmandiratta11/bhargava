import { View, Text,Image } from 'react-native'
import React from 'react'
import { profile } from '../Screens/constants/images'
import Styles from '../GlobalStyle/Styles'
import { COLORS } from '../Screens/constants/theme'





const Header = ({title}) => {
  return (
    <View style={{...Styles.headerView}}>
    <Image source={profile} style={Styles.header_image} />
    <Text style={Styles.header_text}>{title}</Text>
    </View>

  )
}

export default Header