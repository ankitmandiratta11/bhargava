import { StyleSheet, Text,ScrollView, View,SafeAreaView,Modal,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { COLORS,SIZES } from '../Screens/constants/theme'
import moment from 'moment';
import { Dimensions, ToastAndroid, Platform } from "react-native";
const { width, height } = Dimensions.get('screen');
import DropDown from "react-native-paper-dropdown";
import { Provider, TextInput,Checkbox } from "react-native-paper";



const searchStock = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [FrameType, setFrameType] = useState('Frame Type');
    const [Framename, setFramename] = useState('Frame Name');
    const [framecode, setframecode] = useState('Frame Code');
    const [Framesize, setFramesize] = useState('Frame Size');
    const [frameColor, setframeColor] = useState('Frame Color');
const parent=()=>{
    let data={
        FrameType:FrameType,Framename:Framename
    }
    props.parentCallback(data)
}
   //alert(JSON.stringify(props.data[0]))
    return (
        <Provider>

        <Modal
        animationType={"fade"}
        transparent={true}
        visible={true}
        onRequestClose={() => { console.log("Modal has been closed.") }}>
           <ScrollView style={{ alignSelf: 'center',
        backgroundColor: "rgba(0,0,0,0.3)",
        height:height,
        width: width,
      }}>
                  <ScrollView style={{ backgroundColor: "#fff", width: width / 1.2, borderRadius: 10,marginTop:50, alignSelf: "center", }}  >
    <Text style={{fontSize:16,marginVertical:4,alignSelf:"center"}} >Stock</Text>
    <View style={{margin:10}}
> 
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setShowDropDown("FrameType")}}>

  <Text style={{padding:4}}>{FrameType}</Text>
  </TouchableOpacity>

        {showDropDown==='FrameType'&&
props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setFrameType(item.frameType),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.frameType}</Text>
  </TouchableOpacity>
         ))
}
</View>
<View style={{margin:10}}
> 
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setShowDropDown("FrameName")}}>

  <Text style={{padding:4}}>{Framename}</Text>
  </TouchableOpacity>

        {showDropDown==='FrameName'&&
props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setFramename(item.modelName),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.modelName}</Text>
  </TouchableOpacity>
         ))
}
</View>
<View style={{margin:10}}
> 
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setShowDropDown("FrameCode")}}>

  <Text style={{padding:4}}>{framecode}</Text>
  </TouchableOpacity>

        {showDropDown==='FrameCode'&&
props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setframecode(item.modelCode),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.modelCode}</Text>
  </TouchableOpacity>
         ))
}
</View>
<View style={{margin:10}}
> 
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setShowDropDown("FrameSize")}}>

  <Text style={{padding:4}}>{Framesize}</Text>
  </TouchableOpacity>

        {showDropDown==='FrameSize'&&
props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setFramesize(item.modelSize),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.modelSize}</Text>
  </TouchableOpacity>
         ))
}
</View>

<View style={{margin:10}}
> 
<TouchableOpacity style={{justifyContent:"center",borderColor:'gray', margin:4,borderWidth:1,}} onPress={()=>{setShowDropDown("FrameColor")}}>

  <Text style={{padding:4}}>{frameColor}</Text>
  </TouchableOpacity>

        {showDropDown==='FrameColor'&&
props.data.map((item)=>(
<TouchableOpacity style={{justifyContent:"center",borderColor:'red', margin:4,borderWidth:1,}} onPress={()=>{setframeColor(item.modelColor),setShowDropDown()}}>

  <Text style={{padding:4}}>{item.modelColor}</Text>
  </TouchableOpacity>
         ))
}
</View>

          <TouchableOpacity onPress={()=>parent()} style={{height:40,alignSelf:"center", width:50,backgroundColor:"green",justifyContent:"center",marginBottom:5}}><Text style={{textAlign:"center",color:"#fff"}}>Ok</Text></TouchableOpacity>
       </ScrollView>
       </ScrollView>
       </Modal>
       </Provider>

  )}

export default searchStock

const styles = StyleSheet.create({})
