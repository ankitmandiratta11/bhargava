import { View, Text,TouchableOpacity,TextInput,SafeAreaView,Image,Alert,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { COLORS, SIZES } from '../constants/theme'
import  Icon  from 'react-native-vector-icons/AntDesign'
import firestore, { firebase } from '@react-native-firebase/firestore';
import Styles from '../../GlobalStyle/Styles'
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux';
import moment from 'moment'
import {Header,Calendar} from '../../Components' 
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewFrame = () => {

const [userId ,setUserId] = useState('')
const date = moment().format('DD-MM-YYYY')
let dateValue = new Date()
const [pDate,setPDate]=useState(date)
const [dateDoc,setDateDoc]= useState(dateValue)
const [sup_comp_name,setSup_comp_name]= useState("")
const [address,setAddress] = useState("")
const [frametype,setFrameType] = useState("3 Piece/Rimless")
const [modelName,setModelName] = useState("")
const [modelCode,setModelCode]= useState("")
const [modelColor,setModelColor]= useState("")
const [modelSize,setModelSize]= useState("")
const [quantity,setQuantity]= useState(0)
const [purchase,setPurchase]= useState(0)
const [sale,setSale]= useState(0);
const [errors,setErrors] = useState("");
const [total,setTotal] =useState(0)

const checkDetails=async()=>{

    let ID = await AsyncStorage.getItem('userID')
    if(sup_comp_name == "" ){
        setErrors("Supplier Name is neccessary")
    }
    else if(modelName ==  ""){
        setErrors("Model Name is must")
        }

    else if(modelColor ==  ""){
        setErrors("Model Color is must")
        }
        else if(modelSize ==  ""){
            setErrors("Model Size is must")
            }
            else if(quantity ==  ""){
                setErrors("Quantity is must")
                }
                else if(purchase == ""){
                    setErrors("Purchase Price is must")
                    }
                   else if(sale == ""){
                        setErrors("Sales Price is must")
                        }
                        else if (parseFloat(purchase) >= parseFloat(sale) ){
                            setErrors("Sale Price must be greater than Purchase Price")
                        }
else{   
setErrors()
//Entry in database
console.log(ID)
 firebase.firestore().collection('users').doc(ID).collection('framestock').add({

date:pDate,
dateDoc:dateDoc,
supplier_name:sup_comp_name,
supplierAddress:address,
frameType:frametype,
modelName:modelName,
modelCode:modelCode,
modelColor:modelColor,
modelSize:modelSize,
quantity:quantity,
purchasePrice:purchase,
salePrice:sale

})
.then(() => {
    console.log("Document successfully written!");
    setErrors("Congrats Data Added in Database");
    setSup_comp_name("");setAddress("");setFrameType("");setModelName("");setModelCode("");
    setModelColor("");setModelSize("");setQuantity(0);setPurchase(0);
    setSale(0);


})
.catch((error) => {
    console.error("Error writing document: ", error);
  setErrors(error)
});
}
}



const MainContent =()=>{
//    const parentCallbackCalender=(date)=>{
//     setDateDoc(date)
//     setvisible(false)
//    }


   return(
<View style={Styles.safeViewBelow}>
        
        <View>
        {/* Date Trial Successful */}
    <TextInput  style={{...Styles.testInput,color:COLORS.black}} 
    value={pDate}  editable={false}    />
    
    {/* Supplier Name */}
   

    <TextInput placeholder='Enter the Supplier Name' style={Styles.testInput} 
    value={sup_comp_name} onChangeText={(value)=>setSup_comp_name(value)} />
    <TextInput placeholder='Addess' style={Styles.testInput} 
        value={address} onChangeText={(address)=>setAddress(address)} />
    {/* Title Stock Details with Image */}
    <View style={Styles.headerTextProductView} >
        <Icon name="shoppingcart" style={Styles.hp_options_icon} size={30} />
        <Text style={Styles.headerTextProduct}>Stock Details</Text>
    </View>
    <View>
    
      <View style={{borderColor:COLORS.red,marginVertical:2,borderWidth:1,borderRadius:5,marginTop:10,padding:0}}>
        <Picker  selectedValue={frametype}
         onValueChange={(itemValue, itemIndex) =>{setFrameType(itemValue)}}  style={{color:'red'}} >
            <Picker.Item label='3 Piece/Rimless'  value= '3 Piece/Rimless'/>
          <Picker.Item label='Half Rimless/Supra' value= 'Half Rimless/Supra' />
          <Picker.Item label='Full Shell/Plastic' value= 'Full Shell/Plastic' />
          <Picker.Item label='Full Metal' value= 'Full Metal' />
          <Picker.Item label='Goggles' value= 'Goggles' />
        </Picker>
        </View>
    {/* Frame types above */}
    
    <TextInput placeholder='Modal Name' style={Styles.testInput} 
    value={modelName} onChangeText={(name)=>setModelName(name)}/>
    
    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='Modal Code' style={Styles.twoColoumnText} 
    value={modelCode} onChangeText={(code)=>setModelCode(code)}
    />
    <TextInput placeholder='Modal Color' style={Styles.twoColoumnText2} 




    value={modelColor} onChangeText={(color)=>setModelColor(color)}
    />
    </View>
    
    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='Modal Size' style={Styles.twoColoumnText} keyboardType='numeric' 
    value={modelSize} onChangeText={(size)=>setModelSize(size)} />
    <TextInput placeholder='Quantity' keyboardType='numeric' style={Styles.twoColoumnText2} 
    value={quantity}  onChangeText={(value)=>{setQuantity(value)}}/>
    </View>
    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='Purchase Price' keyboardType='numeric' style={Styles.twoColoumnText}
    value={purchase} onChangeText={(purchase)=>{setPurchase(purchase)} }/>
    <TextInput placeholder='Sales Price' keyboardType='numeric' style={Styles.twoColoumnText2} 
    value={sale} onChangeText={(sale)=>setSale(sale)}/>
    </View>
    <View style={{marginTop:10}}>
    <TextInput placeholder='' keyboardType='numeric' style={Styles.testInput} 
     editable={false} value={JSON.stringify(quantity*purchase)} />
    </View>

    
    </View>
    
    <View style={Styles.touchop_view}>
        <TouchableOpacity style={Styles.touchop} onPress={()=>checkDetails()} >
            <Text style={Styles.touchop_text}>
                Add to Stock
            </Text>
        </TouchableOpacity>
    </View>
      
        </View>
        </View>
    )
}
//Main return
  return (
    <ScrollView  style={{marginBottom:20}}>
   {/* Date Row */}
<View>
<Header title="ADD FRAME STOCK"  />
</View>

{MainContent()}
 <View >
   <Text style={Styles.errors}>{errors}</Text>
 </View>

    </ScrollView>
    )}

export default NewFrame