import { StyleSheet, Text, View,SafeAreaView,Modal,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { COLORS,SIZES } from '../Screens/constants/theme'
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker/CalendarPicker';
const Calendar = (props) => {
 const [date,setDate] = useState()
    const onDateChange = (date1,type)=>{
if(date1 != null ){
    const selectedDate = moment(date1).format('DD-MM-YYYY');
    console.log(selectedDate)
    setDate(selectedDate)
props.parentCallbackCalendar(selectedDate)


}
  }
  
    return (
 <SafeAreaView>
 <Modal  animationType='fade'
     tranparent={true}
     visible={true}
     onRequestClose={()=>{console.log('Modal has been closed')}}

     >
<View style={{justifyContent:'center',alignItems:'center',alignContent:'center',height:'100%',width:'100%'}}>
    <View style={{justifyContent:'center',borderRadius:10,alignSelf:'center'}}>

    <CalendarPicker  onDateChange={onDateChange} 
    startFromMonday={true} 
        />
        </View>
    
    </View>
 </Modal>
 <View>
  </View>
    </SafeAreaView>
  )}

export default Calendar

const styles = StyleSheet.create({})

