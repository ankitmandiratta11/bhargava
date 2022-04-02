import { StyleSheet, Text, View,TouchableOpacity,Modal,ScrollView } from 'react-native'
import React,{useState} from 'react'
import RNDateTimeSelector from 'react-native-date-time-scroll-picker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, ToastAndroid, Platform } from "react-native";
import { useLinkProps } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');

const borderWidth = 25;
const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 15;
const wrapperHeight = setTimerWidthHeight-(borderWidth*2);

const dataSet ={
  data:{
    firstColumn:[
      {value:'PLANO',index:0},
      {value:'+',index:1},
      {value:'-',index:2}
 ],
 secondColumn:[
   {value:'0',index:0},
   {value:'1',index:1},
   {value:'2',index:2},
   {value:'3',index:3},
   {value:'4',index:4},

  ],
  thirdColumn:[
    {value:'.00',index:0},
    {value:'.25',index:1},
    {value:'.50',index:2},
    {value:'.75',index:3},

  ]
  },
  initials:[0,0,0]
}
const Pickaxis = (props) => {
  const [value,setValue]= useState()

  const seperatorComponentRendererOne = ()=>{
    return <Text style={{fontSize: 10, lineHeight: setTimerWidthHeight*0.15}}>:</Text>
  }
  const seperatorComponentRendererTwo = ()=>{
    return <Text style={{fontSize: 10, lineHeight: setTimerWidthHeight*0.15}}></Text>
  }
  return (
<Modal animationType= {"fade"}
transparent={true}
visible={true}
onRequestClose={"Modal has been closed"}

>

<ScrollView style={{ alignSelf: 'center',
    backgroundColor: "rgba(0,0,0,0.3)",
    height: height,
    width: width}}>
      
  <ScrollView style={{ backgroundColor: "#fff", width: width / 1.2, borderRadius: 10,marginTop:50, alignSelf: "center", }}  >

<RNDateTimeSelector dataSet={dataSet}
onValueChange={(value=>setValue(value[0].value +value[1].value+ value[2].value))} 
containerStyle={{alignSelf:'center'}}

firstSeperatorComponent={seperatorComponentRendererOne}
secondSeperatorComponent={seperatorComponentRendererTwo}
seperatorContainerStyle={{
  // width: wp(4)
}}
scrollPickerOptions={{
  itemHeight: 40,
  wrapperHeight: wrapperHeight,
  wrapperColor: "rgba(0,0,0,0)",
  highlightColor: "rgba(0,0,0,0.9)"
}}
textStyle={{
  fontSize: 12,
  fontFamily: null
}}
textColor={{
  primary: 'rgba(0,0,0,1.0)',
  secondary: 'rgba(0,0,0,0.5)',
  other: 'rgba(0,0,0,0.15)',
}}
/>

<TouchableOpacity style={{alignSelf:"center",marginBottom:20, height:30,width:50,backgroundColor:"red",justifyContent:"center",borderRadius:10,}} onPress={()=>props.parentcallback(value)}>
          <Text style={{alignSelf:"center",fontWeight:"bold",color:"#fff"}}>Done</Text>
      </TouchableOpacity>
</ScrollView>
  </ScrollView>
    </Modal>
)}

export default Pickaxis





// import React,{useState} from 'react'
// import {Text,Modal,ScrollView,TouchableOpacity} from 'react-native';
// import RNDateTimeSelector from "react-native-date-time-scroll-picker";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Dimensions, ToastAndroid, Platform } from "react-native";
// import { useLinkProps } from '@react-navigation/native';
// const { width, height } = Dimensions.get('screen');


// const borderWidth = 25;
// const setTimerWidthHeight = wp(75);
// const selectedItemTextSize = 15;
// const wrapperHeight = setTimerWidthHeight-(borderWidth*2);



// const dataSet = {
//   data: {
//     firstColumn: [
//       {value: 'PLANO', index: 0},
//       {value: '+', index: 1},
//       {value: '-', index: 2}
//     ],
//     secondColumn: [
//       {value: '0', index: 0},
//       {value: '1', index: 1},
//       {value: '2', index: 2}
//     ],
//     thirdColumn: [
//       {value: '.00', index: 0},
//       {value: '.25', index:
// 	  1},
//       {value: '.50', index: 2},
//       {value: '.75', index: 3}

//     ],
//   },
//   initials: [8,25,0]  
// }


// const Pickaxis = (props)=> {
//     const [value,setvalue] = useState()

//   const seperatorComponentRendererOne = ()=>{
//     return <Text style={{fontSize: 10, lineHeight: setTimerWidthHeight*0.15}}>:</Text>
//   }
//   const seperatorComponentRendererTwo = ()=>{
//     return <Text style={{fontSize: 10, lineHeight: setTimerWidthHeight*0.15}}></Text>
//   }
  
//   return (
//     <Modal
//     animationType={"fade"}
//     transparent={true}
//     visible={true}
//     onRequestClose={() => { console.log("Modal has been closed.") }}>
//        <ScrollView style={{ alignSelf: 'center',
//     backgroundColor: "rgba(0,0,0,0.3)",
//     height: height,
//     width: width,
//   }}>
//               <ScrollView style={{ backgroundColor: "#fff", width: width / 1.2, borderRadius: 10,marginTop:50, alignSelf: "center", }}  >

            
//       <RNDateTimeSelector 
//               dataSet={dataSet}
//               onValueChange={(value)=>{
//                 console.log('data on users end :   ... ', value);
//                 if(value[0].value==="PLANO"){
//                     setvalue('00') 
//                 }else{
//                     setvalue(value[0].value+value[1].value+value[2].value)

//                 }
//               }}
//               containerStyle={{
//                 alignSelf: 'center',
//                 borderWidth: 0, 
//                 borderColor: 'transparent', 
//                 borderRadius: 0, 
//                 height: wp(61.5)
//               }}
//               firstSeperatorComponent={seperatorComponentRendererOne}
//               secondSeperatorComponent={seperatorComponentRendererTwo}
//               seperatorContainerStyle={{
//                 // width: wp(4)
//               }}
//               scrollPickerOptions={{
//                 itemHeight: 40,
//                 wrapperHeight: wrapperHeight,
//                 wrapperColor: "rgba(0,0,0,0)",
//                 highlightColor: "rgba(0,0,0,0.9)"
//               }}
//               textStyle={{
//                 fontSize: 12,
//                 fontFamily: null
//               }}
//               textColor={{
//                 primary: 'rgba(0,0,0,1.0)',
//                 secondary: 'rgba(0,0,0,0.5)',
//                 other: 'rgba(0,0,0,0.15)',
//               }}
//       />
//       <TouchableOpacity style={{alignSelf:"center",marginBottom:20, height:30,width:50,backgroundColor:"red",justifyContent:"center",borderRadius:10,}} onPress={()=>props.parentcallback(value)}>
//           <Text style={{alignSelf:"center",fontWeight:"bold",color:"#fff"}}>Done</Text>
//       </TouchableOpacity>
//       </ScrollView>
//       </ScrollView>

//       </Modal>
//   )

// }

// export default Pickaxis;
