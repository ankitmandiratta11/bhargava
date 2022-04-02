import { StyleSheet, Text,ScrollView, View,SafeAreaView,Modal ,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {COLOR,SIZES} from '../Screens/constants/theme'
import Header from './Header';
import DropDown from 'react-native-paper-dropdown';
import { Picker } from '@react-native-picker/picker';
const SearchStock = (props) => {
const [showDropDown,setShowDropDown] = useState(false)
const [sStock,setSStock] = useState(true) 
const [frameType,setFrameType] = useState('Frame Type')
const [frameName,setFrameName] = useState('')
const [frameCode,setFrameCode] = useState('')
const [frameSize,setFrameSize] = useState('')
const [frameColor,setFrameColor] = useState('')
const [allData,setAllData] = useState([])
const [first,setFirst] = useState([])
const [second,setSecond] = useState([])
const [third,setThird] = useState([])
const [fourth,setFourth] = useState([])

const frameNam=()=>{

setFirst([])
  for( let i=0;i<props.data.length;i++){
    
      if(props.data[i].frameType=='Half Rimless/Supra'){
      console.log(props.data[i].quantity)
      first.push(props.data[i])  
      }}
      console.log(first)
return( 
 <View>
 { first.map((item)=>(
  <TouchableOpacity style={{justifyContent:"center",borderColor:'red', margin:4,borderWidth:1,}} onPress={()=>{setFrameName(item.frameName)}}>
      <Text style={{padding:4}}>{item.modelName}</Text>
    </TouchableOpacity>
           )) 
}
           </View>
  
)}

return (
      <Modal visible={sStock} animationType={"fade"}  onRequestClose={()=>{console.log("Pop up must be closed")}} >
      <ScrollView style={{alignSelf:'center',height:SIZES.height,width:SIZES.width}}>
    <ScrollView>
      {/* <Header title="Frame Search" /> */}

        <View style={{margin:10}}></View>
        <Picker  selectedValue={frameType}
     onValueChange={(itemValue, itemIndex) =>{setFrameType(itemValue)}}  style={{color:'red'}} >
       <Picker.Item label='Select Frame'   />
       <Picker.Item label='3 Piece/Rimless'   value= '3 Piece/Rimless'/>
      <Picker.Item label='Half Rimless/Supra' value= 'Half Rimless/Supra' />
      <Picker.Item label='Full Shell/Plastic' value= 'Full Shell/Plastic' />
      <Picker.Item label='Full Metal' value= 'Full Metal' />
      <Picker.Item label='Goggles' value= 'Goggles' />
    </Picker>

{frameType &&  frameNam()
 }

        {showDropDown==='FrameType'&&
props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setFrameType(item.frameType),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.frameType}</Text>
  </TouchableOpacity>
         ))
}

<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setShowDropDown("FrameName")}}>
  <Text style={{padding:4}}>{frameName}</Text>
  </TouchableOpacity>


  {/* {showDropDown==='FrameName'&&

props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setFrameName(item.modelName),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.modelName}</Text>
  </TouchableOpacity>
         ))
} */}
    </ScrollView>


</ScrollView>
<View style={{marginTop:30}}>
    <TouchableOpacity onPress={()=>{console.log('close it'),setSStock(!sStock)}}>
<Text>Close</Text>
    </TouchableOpacity>
</View>
<View style={{flexDirection:'row'}}>
      <Text>{frameType}</Text>
      <Text>framName</Text>
    </View>
      </Modal>

  )
}

export default SearchStock

const styles = StyleSheet.create({})