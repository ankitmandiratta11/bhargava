import React,{useState} from 'react'
import {Text,Modal,ScrollView,TouchableOpacity,View} from 'react-native';
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, ToastAndroid, Platform } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
const { width, height } = Dimensions.get('screen');


const borderWidth = 25;
const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 25;
const wrapperHeight = setTimerWidthHeight-(borderWidth*2);



const dataSet = {
  data: {
    firstColumn: [
      {value: '6/5', index: 0},
      {value: '6/6', index: 1},
      {value: '6/8', index: 2},
      {value: '6/9', index: 3},
      {value: '6/10', index: 4},
      {value: '6/12', index: 5},
      {value: '6/18', index: 6},
      {value: '6/24', index: 7},
      {value: '6/36', index: 8},
      {value: '6/60', index: 9},
      {value: '5/60', index: 10},
      {value: '4/60', index: 11},
      {value: '3/60', index: 12},
      {value: '2/60', index: 1},
      {value: '1/60', index: 1},

    ],
  },
  initials: [8]  
}


const SelectVa = (props)=> {
    const [value,setvalue] = useState()

  const seperatorComponentRendererOne = ()=>{
    return <Text style={{fontSize: 30, lineHeight: setTimerWidthHeight*0.15,color:COLORS.red}}>:</Text>
  }
  const seperatorComponentRendererTwo = ()=>{
    return <Text style={{fontSize: 30, lineHeight: setTimerWidthHeight*0.15,color:COLORS.red}}>:</Text>
  }
  
  return (
    <Modal
    animationType={"fade"}
    transparent={true}
    visible={true}
    onRequestClose={() => { console.log("Modal has been closed.") }}>
       <ScrollView style={{ alignSelf: 'center',
    backgroundColor: "rgba(0,0,0,0.3)",
    height: height,
    width: width,
  }}>
              <ScrollView style={{ backgroundColor: COLORS.white, width: width / 1.2, borderRadius: 10,marginTop:50, alignSelf: "center", }}  >

            
      <RNDateTimeSelector 
              dataSet={dataSet}
              onValueChange={(value)=>{            
                    setvalue(value[0].value)

                
              }}
              containerStyle={{
                alignSelf: 'center',
                borderWidth: 0, 
                borderColor: 'transparent', 
                borderRadius: 0, 
                height: wp(61)
              }}
              firstSeperatorComponent={seperatorComponentRendererOne}
              secondSeperatorComponent={seperatorComponentRendererTwo}
              seperatorContainerStyle={{
                // width: wp(4)
              }}
              scrollPickerOptions={{
                itemHeight: 40,
                wrapperHeight: wrapperHeight,
                wrapperColor: "rgba(0,0,0,0)", 
                highlightColor: "rgba(0,0,0,0.9)"  //line horizontal
              }}
              textStyle={{
                fontSize: 16,
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

export default SelectVa;
