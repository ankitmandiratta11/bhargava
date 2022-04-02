import { View, Text,ScrollView,TextInput,TouchableOpacity,SafeAreaView,Image,Alert } from 'react-native'
import React,{useState,useEffect,useContext} from 'react';
import Styles from '../../GlobalStyle/Styles';
import { COLORS,SIZES } from '../constants/theme';
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
import { AuthContext } from '../Components/context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SearchStock from '../../Components/SearchStock';
import { Header } from '../../Components';
import Symbol_Heading from '../../Components/Symbol_Heading';
const OrderDetails = ({route}) => {
const data = route.params.item
const [stockSearch,setStockSearch] = useState(false);    

 const dateToday = moment().format('DD-MM-YYYY')   
 const [orderDate,setOrderDate] = useState(data.orderDate);

 const [axis,setaxis] = useState(false);
 const [calVisible,setCalVisible] = useState(false);
 const [completeDate,setCompleteDate] = useState(data.completeDate); 
 const [calDate,setCalDate] = useState(dateToday) 
const [date,setDate] =useState()
 const [orderStatus,setOrderStatus] =useState("Pending");
const [fName,setFName]=useState(data.name);
const [mob1,setMob1] = useState(data.mobile1);
const [mob2,,setMob2] = useState(data.mobile2);
const [eyeCheckUpDate,setEyeCheckUpDate] =useState("");
const [drName,setDrName]= useState("")
const [hospital,setHospital] = useState("")
const [hcity,setHcity] = useState("")
const [dr_op,setDr_op] = useState("")
const [opt_shop,setOpt_shop] = useState("")
const [opt_city,setOpt_city] = useState("")

const [presMed ,setPresMed]=useState("");

//purchase details

const [frameType,setFrameType] = useState(data.frameType)
const [modelName,setModelName] = useState(data.modelName)
const [modelCode,setModelCode]= useState(data.modelCode)
const [modelColor,setModelColor]= useState(data.modelColor)
const [modelSize,setModelSize]= useState(data.modelSize)
const [framePrice,setFramePrice]=useState(data.framePrice)




//lens
const [lensFor,setLensFor] = useState(data.lensFor)
const [lensType,setLensType] = useState(data.lensType)
const [side,setSide] =useState(data.side)
const [lensCompName,setLensCompName] = useState(data.lensCompName)
const [lensProdName,setLensProdName] = useState(data.lensProdName)
const [index,setIndex] = useState(data.index)
const [dia,setDia] = useState('')
const [lensPrice,setLensPrice] =useState(data.lensPrice)

//bill details
const [totalAmount,setTotalAmount] =useState(data.totalAmount)
const [discount,setDiscount] =useState(data.discount);
const [advance,setAdvance]= useState(data.advance)
const [balAmount,setBalAmount] = useState(data.balAmount)
const[extraDetails,setExtraDetails] =useState(data.extraDetails)
const [dr_show,setDr_show] = useState(false) 
const [opt_show,setOpt_show] = useState(true) 
const [dr_optt,setDr_optt] = useState(false)
const [frameCheckBox,setFrameCheckBox] =useState(data.frameCheckBox)
const [lensCheckBox,setLensCheckBox] =useState(data.lensCheckBox)

const radio_props =[
      {label: 'Doctor     ', value: 0 },
      {label: 'Optician   ', value: 1 },
    ]


const frame_lens_checkbox=()=>{
  return(
    <View>
  <View style={{flexDirection:'row',justifyContent:'center'}}>
 {/* Frame  */}
<View style={Styles.f_d_row}>
<CheckBox  value ={frameCheckBox} tintColor={COLORS.red} title="FRAME"
 style={{justifyContent:'center',alignContent:'center',alignItems:'center'}} />
<Text style={{margin:5,fontWeight:'300',color:COLORS.red}}>FRAME</Text>
</View>
 {/* Lens  */}
<View style={Styles.f_d_row}>
<CheckBox  value ={lensCheckBox} tintColor={COLORS.red} 
 style={{justifyContent:'center',alignContent:'center',alignItems:'center'}} 
/>
<Text style={{margin:5,fontWeight:'500',color:COLORS.red}}>LENS</Text>
</View>
</View>
{ frameCheckBox && <View>
  <TextInput editable={false} placeholder='Frame Type' style={[Styles.testInput,Styles.orderDetails]} 
    value={frameType}  />

<TextInput editable={false} placeholder='Modal Name' style={[Styles.testInput,Styles.orderDetails]} 
    value={modelName} />
    <View style={Styles.twoColoumnView}>
    <TextInput editable={false} placeholder='Modal Code' style={[Styles.twoColoumnText,Styles.orderDetails]} 
    value={modelCode}     />
    <TextInput editable={false} placeholder='Modal Color' style={[Styles.twoColoumnText,Styles.orderDetails]} 
    value={modelColor}   />
 </View>

 <View style={Styles.twoColoumnView}>
 <TextInput editable={false} placeholder=' Model Size' keyboardType='numeric' style={[Styles.twoColoumnText,Styles.orderDetails]} 
    value={modelSize} />

    <TextInput editable={false} placeholder='Frame Price' keyboardType='numeric' style={[Styles.twoColoumnText,Styles.orderDetails]} 
    value={framePrice} />
        </View>
        </View>
}

{lensCheckBox && <View> 
        <TextInput editable={false} placeholder='Lens Company  Name' style={[Styles.testInput,Styles.orderDetails]} 
    value={lensCompName} />
 
 <TextInput editable={false} placeholder='Lens Productt  Name' style={[Styles.testInput,Styles.orderDetails]} 
    value={lensProdName} />
 

 <View style={Styles.twoColoumnView}>
    <TextInput editable={false} placeholder='INDEX' style={[Styles.twoColoumnText,Styles.orderDetails]} keyboardType='numeric'
    value={index}  />
       <TextInput editable={false} placeholder='DIA' style={[Styles.twoColoumnText,Styles.orderDetails]} keyboardType='numeric'
    value={dia} />
  <TextInput editable={false} placeholder='Lens Price' style={[Styles.twoColoumnText,Styles.orderDetails]} keyboardType='numeric'
    value={lensPrice} />
 </View>
 </View>
}

</View>

 )}

      const BillDetails=()=>{
        return(
              <View>



              <TextInput editable={false} placeholder='Discount' style={[Styles.testInput,Styles.orderDetails]} keyboardType='numeric'
      value={totalAmount + ' Rs Total Amount'}  />



{
  discount != '' && <View>
              <TextInput editable={false} placeholder='Discount' style={[Styles.testInput,Styles.orderDetails]} keyboardType='numeric'
      value={discount + ' Rs Discount'}  />
  </View>
}
  {    advance !='' && <View>
  <TextInput editable={false} placeholder='Advance' style={[Styles.testInput,Styles.orderDetails]} keyboardType='numeric'
      value={advance + ' Rs Advance' } />
      </View>
  }
  
  {
  balAmount != '' &&  <View>
  <TextInput editable={false} placeholder='Balance Paymnet' style={[Styles.testInput,Styles.orderDetails]} keyboardType='numeric'
      value={balAmount + ' Rs Payment'}/>
    </View>   
  }

  
  <TextInput editable={false} placeholder='Extra Details' style={[Styles.testInput,Styles.orderDetails]} multiline={true} numberOfLines={5}
      value={extraDetails} />
  </View>
        )}

return (
    <ScrollView>
<Header title="Order Details" />
<View style={Styles.safeViewBelow}>


<Symbol_Heading  title = "ORDER DETAILS" name ="profile"  />

<TextInput editable={false} placeholder='Enter Customer  Name' style={[Styles.testInput,Styles.orderDetails]} 
      value={orderDate +  ' - Order Date'}   />
      <TextInput editable={false} placeholder='Enter Customer  Name' style={[Styles.testInput,Styles.orderDetails]} 
      value={completeDate + '- Completion Date'}   />


<TextInput editable={false} placeholder='Enter Customer  Name' style={[Styles.testInput,Styles.orderDetails]} 
      value={fName}   />

<TextInput placeholder='Enter Mobile No 1' style={[Styles.testInput,Styles.orderDetails]} keyboardType="numeric" 
      value={mob1} editable={false} />
      {  mob2 != "" && <TextInput placeholder='Enter Mobile No 2' style={[Styles.testInput,Styles.orderDetails]} 
      value={mob2} />
      }


<Symbol_Heading title="Purchase Details" name="shoppingcart" />

{frame_lens_checkbox()}

<Symbol_Heading title="Bill Details" name="profile"/>

{BillDetails()}
</View>
      
    </ScrollView>
  )
}

export default OrderDetails