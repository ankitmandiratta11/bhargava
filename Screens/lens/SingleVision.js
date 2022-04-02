import { View, Text,TouchableOpacity,TextInput,SafeAreaView,Image,Alert,ScrollView } from 'react-native';
import React,{useState,useEffect} from 'react';
import Styles from '../../GlobalStyle/Styles'
import { Picker } from '@react-native-picker/picker';
import {Header} from '../../Components' 
import { COLORS, SIZES } from '../constants/theme'
import firestore, { firebase } from '@react-native-firebase/firestore';
import Symbol_Heading from '../../Components/Symbol_Heading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleVision = () => {
  
  const dateValue= new Date()
  const [lens,setLens] = useState("sigle_vision")
  const [pDate,setPdate] =useState(dateValue.getDate().toString() + "-" +dateValue.getMonth().toString()+ "-" +dateValue.getFullYear().toString()) 
  const [dateDoc,setDateDoc]= useState(dateValue)
  const [sup_comp_name,setSup_comp_name]= useState("")
  const [address,setAddress] = useState("")
  const [lensType,setLensType] = useState("")
  const [lensCompName,setLensCompName] = useState("")
  const [lensProdName,setLensProdName] = useState("")
  const [index,setIndex] = useState("")
  const [dia,setDia] = useState("")
  const [sph,setSph] = useState("")
  const [cyl,setCyl] = useState("")
  const [pair,setPair] = useState("")
  const [purchase,setPurchase]= useState(0)
  const [sale,setSale]= useState(0);
  const [errors,setErrors] = useState("");
  const [total,setTotal] =useState(0)

    const checkDetails=async()=>{
      let ID = await AsyncStorage.getItem('userID')

    if(sup_comp_name == "" ){
    setErrors("Supplier Name is neccessary")
    }

   else if(lensCompName == "" ){
      setErrors("Lens Company Name is neccessary")
      }
      
      else if(lensProdName == "" ){
        setErrors("Lens Product  Name is neccessary")
        }
    
        else if(index == "" ){
          setErrors("INDEX is neccessary")
          }
          else if(dia == "" ){
            setErrors("DIA  is neccessary")
            }

            else if(pair == "" ){
              setErrors(" Pair is neccessary")
              }
              
              else if (sph == "" || cyl ==""){
                setErrors(" SPH/CYL is neccessary")
              }
              
              else if(purchase == "" ){
                setErrors(" Purchase Price is neccessary")
                }
                else if(pair == "" ){
                  setErrors(" Sale Price is neccessary")
                  }

                  else {
                    setErrors()

//Entry in database '84Dz8rylvchiyZbYm5bJmIYCzCc2'
firebase.firestore().collection('users').doc(ID).collection('lensStock').add({
  lens:lens,
  date:pDate,
  dateDoc:dateDoc,
  supplier_name:sup_comp_name,
  supplierAddress:address,
 lensType:'', 
lensCompName:lensCompName,
lensProdName:lensProdName,
index:index,
dia:dia,
sph:sph,
cyl:cyl,
quantity:pair,
purchasePrice:purchase,
salePrice:sale,
total:total  
  })
  .then(() => {
      
      setErrors("Congrats Data Added in Database");
      setPdate("");setSup_comp_name("");setAddress("");setLensType("");
      setLensCompName("");setLensProdName("");setIndex("");setDia("");setSph("");
      setCyl("");setPair("");setTotal(0);setSale("");setPurchase("");
  
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
    setErrors(error)
  });
  }
 } //function closing bracket
 

  //Main Return 
return (
    <ScrollView>
<Header title="ADD SINGLE VISION" />
<View style={Styles.safeViewBelow}>

<TextInput  style={{...Styles.testInput,color:COLORS.black}} 
    value={pDate } 
    editable={false}    />

    {/* Supplier Name */}
    <TextInput placeholder='Enter the Supplier Name' style={Styles.testInput} 
    value={sup_comp_name} onChangeText={(supplier)=>setSup_comp_name(supplier)} />
    <TextInput placeholder='Address' style={Styles.testInput} 
    value={address} onChangeText={(address)=>setAddress(address)} />
    {/* Title Stock Details with Image */}

     <Symbol_Heading name="shoppingcart"  title="Stock Details" />
  
    {/* Picker Remaining */}


<TextInput placeholder='Lens Company  Name' style={Styles.testInput} 
    value={lensCompName} onChangeText={(name)=>setLensCompName(name)}/>
 
 <TextInput placeholder='Lens Product  Name' style={Styles.testInput} 
    value={lensProdName} onChangeText={(name)=>setLensProdName(name)}/>
 
 <View style={Styles.twoColoumnView}>
    <TextInput placeholder='INDEX' style={Styles.twoColoumnText} keyboardType='numeric'
    value={index} onChangeText={(value)=>setIndex(value)}
    />
       <TextInput placeholder='DIA' style={Styles.twoColoumnText2} keyboardType='numeric'
    value={dia} onChangeText={(value)=>setDia(value)}
    />
    </View>
   
    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='SPH' style={Styles.twoColoumnText} 
    value={sph} onChangeText={(value)=>setSph(value)} keyboardType='numeric'   />
    <TextInput placeholder='CYL' style={Styles.twoColoumnText2} 
    value={cyl} onChangeText={(value)=>setCyl(value)} keyboardType='numeric'    />
    </View>

    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='Purchase Price' keyboardType='numeric' style={Styles.twoColoumnText}
    value={purchase} onChangeText={(purchase)=>{setPurchase(purchase)} }/>
    <TextInput placeholder='Sales Price' keyboardType='numeric' style={Styles.twoColoumnText2} 
    value={sale} onChangeText={(sale)=>setSale(sale)}/>
    </View>
    <View style={Styles.twoColoumnView}>
    <TextInput  style={Styles.twoColoumnText} editable={false} placeholder ="" />
    <TextInput placeholder='Pair' keyboardType='numeric' style={Styles.twoColoumnText2} 
    value={pair} onChangeText={(quantity)=>{setPair(quantity)}}/>
    </View>
         <View style={{marginTop:10}}>
    <TextInput  keyboardType='numeric' style={Styles.testInput} 
    value={JSON.stringify(pair*purchase)} editable={false} />
    </View>
  <View style={Styles.touchop_view}>
        <TouchableOpacity style={Styles.touchop} onPress={()=>{checkDetails()}}>
            <Text style={Styles.touchop_text}>
                Add to Stock
            </Text>
        </TouchableOpacity>
    </View>
     <View >
        <Text style={Styles.errors}>{errors}</Text>
    </View>
</View>
    </ScrollView>  
  )}
export default SingleVision

