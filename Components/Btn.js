import { View, Text,Button,TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = (title,onPress) => {
  return (
    <View>
<TouchableOpacity onPress={()=>onPress}>
<Text>{title}</Text>
</TouchableOpacity>
    </View>
  )
}

export default Btn