import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../GlobalStyle/Styles'
import  Icon  from 'react-native-vector-icons/AntDesign';
import {MaterialCommunityIcons  } from 'react-native-vector-icons'
import { COLORS } from '../Screens/constants/theme';

const Symbol_Heading = ({title,name}) => {
  return (
// Title Stock Details with Image 
<View style={Styles.headerTextProductView} >
<Icon name={name} style={Styles.hp_options_icon} color='red' size={30} />
<Text style={Styles.headerTextProduct}>{title}</Text>
</View>

  )}

export default Symbol_Heading

const styles = StyleSheet.create({})