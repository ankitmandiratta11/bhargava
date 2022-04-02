import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from './constants/theme'
import images from '../constants/images'
const ImageScreen = () => {
  return (
    <View style={{backgroundColor:COLORS.white,flex:1}} >

<Image source={images.splash} resizeMode="contain" style={{width:SIZES.width,height:SIZES.height}}  />

    </View>
  )
}

export default ImageScreen

