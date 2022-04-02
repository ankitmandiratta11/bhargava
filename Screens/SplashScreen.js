import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import images from '../constants/images'
import { COLORS, SIZES } from './constants/theme'
const SplashScreen = () => {
  return (
    <View style={{backgroundColor:COLORS.white,height:SIZES.width,height:SIZES.height,justifyContent:'center',alignItems:'center'}}>
<Image source ={images.splash} width="100%" height={"100%"}  />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})