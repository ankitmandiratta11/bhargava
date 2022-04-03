import { View, Text,TouchableOpacity,TextInput,SafeAreaView,Image,Alert,ScrollView } from 'react-native';
import React,{useState,useEffect} from 'react';
import Styles from '../../GlobalStyle/Styles'
import { Picker } from '@react-native-picker/picker';
import {Header} from '../../Components' 
import { COLORS, SIZES } from '../constants/theme'
import  Icon  from 'react-native-vector-icons/AntDesign'
import LensType from '../../Components/LensType';
import Side from '../../Components/Side';
import firestore, { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Bifocal = () => {
  const dateValue= new Date()

  const [lens,setLens] = useState("Bifocal Lens")
  const [pDate,setPdate] =useState(dateValue.getDate().toString() + "-" +(dateValue.getMonth()+1).toString()+ "-" +dateValue.getFullYear().toString()) 
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
  const [axis,setAxis]= useState("")
  const [add,setAdd] = useState("")
  const [side,setSide] =useState("")
  const [pair,setPair] = useState("")
  const [purchase,setPurchase]= useState(0)
  const [sale,setSale]= useState(0);
  const [errors,setErrors] = useState("");
  const [total,setTotal] =useState(0)

  const CallbackFunction_lens =(childData)=>{
    setLensType(childData)
  }
  const CallbackFunction_side =(childData)=>{
    setSide(childData)
  }
  const checkDetails=async()=>{
    let ID = await AsyncStorage.getItem('userID')
   if(sup_comp_name == "" ){
      setErrors("Supplier Name is neccessary")
      }
     else if(lensCompName == "" ){
        setErrors("Lens Company Name is neccessary")
        }
        else if(lensType == "" ){
          setErrors("Lens Type is neccessary")
          }
          else if(lensProdName == "" ){
          setErrors("Lens Product  Name is neccessary")
          }
              else if(dia == "" ){
              setErrors("DIA  is neccessary")
              }            
                else if (sph == "" || cyl ==""){
                  setErrors(" SPH/CYL is neccessary")
                }
                else if (add == ""){
                  setErrors(" ADD is neccessary")
                }
                 else if(purchase == "" ){
                  setErrors(" Purchase Price is neccessary")
                  }
                  else if(pair == "" ){
                    setErrors(" Sale Price is neccessary")
                    }
  
                    else {
                      setErrors()
                    console.log("All Correct")

                      firebase.firestore().collection('users').doc(ID).collection('lensStock').add({
                        lens:lens,
                        date:pDate,
                      dateDoc:dateDoc,
                      supplier_name:sup_comp_name,
                      address:address, 
                      lensType:lensType, 
                      lensCompName:lensCompName, 
                      lensProdName:lensProdName ,
                      index:index ,
                      dia:dia ,
                      sph:sph ,
                      cyl:cyl ,
                      axis:axis,
                      add:add ,
                      side:side, 
                      pair:pair ,
                      purchase:purchase,
                      sale:sale,
                      total:total

                    })
                    .then(() => {

                        setErrors("Congrats Data Added in Database");
                        setSup_comp_name("");setAddress("");setLensType("");
                        setLensCompName("");setLensProdName("");setIndex("");setDia("");setSph("");
                        setCyl("");setPair("");setTotal(0);setSale("");setPurchase("");setSide("");
                        setAxis("");setAdd("");setLensType("")
                    
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                      setErrors(error)
                    });
                    }

  } //check function ens here


  //Main Return 
return (
    <ScrollView>
<Header title="ADD BIFOCAL LENS " />
<View style={Styles.safeViewBelow}>
      
<TextInput  style={{...Styles.testInput,color:COLORS.black}} 
    value={pDate} 
    editable={false}    />

    {/* Supplier Name */}
    <TextInput placeholder='Enter the Supplier Name' style={Styles.testInput} 
    value={sup_comp_name} onChangeText={(supplier)=>setSup_comp_name(supplier)} />
    <TextInput placeholder='Addess' style={Styles.testInput} 
    value={address} onChangeText={(address)=>setAddress(address)} />
    {/* Title Stock Details with Image */}
    <View style={Styles.headerTextProductView} >
        <Icon name="shoppingcart" style={Styles.hp_options_icon} size={30} />
        <Text style={Styles.headerTextProduct}>Stock Details</Text>
    </View>
 
    <View style={Styles.view_picker}>
<LensType parentCallback= {CallbackFunction_lens} />
</View>
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
    <TextInput placeholder='SPH' style={Styles.twoColoumnText} keyboardType='numeric'
    value={sph} onChangeText={(value)=>setSph(value)}
    />
    <TextInput placeholder='CYL' style={Styles.twoColoumnText2} keyboardType='numeric'
    value={cyl} onChangeText={(value)=>setCyl(value)}
    />
    </View>

    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='AXIS' style={Styles.twoColoumnText} keyboardType='numeric' 
    value={axis} onChangeText={(value)=>setAxis(value)}
    />
    <TextInput placeholder='ADD' style={Styles.twoColoumnText2} keyboardType='numeric'
    value={add} onChangeText={(value)=>setAdd(value)}
    />
    </View>

    <View style={Styles.twoColoumnView}>
    <TextInput placeholder='Purchase Price' keyboardType='numeric' style={Styles.twoColoumnText}
    value={purchase} onChangeText={(purchase)=>{setPurchase(purchase)} }/>
    <TextInput placeholder='Sales Price' keyboardType='numeric' style={Styles.twoColoumnText2} 
    value={sale} onChangeText={(sale)=>setSale(sale)}/>
    </View>
    <View style={Styles.twoColoumnView}>
      <View style={Styles.twoColoumnText}>
      <Side   parentCallback={CallbackFunction_side}  />
      </View>
    <TextInput placeholder='Pair' keyboardType='numeric' style={Styles.twoColoumnText2} 
    value={pair} onChangeText={(quantity)=>{setPair(quantity)}}/>
    </View>
     
    <View style={{marginTop:10}}>
    <TextInput placeholder='0' keyboardType='numeric' style={Styles.testInput} 
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
    
     
  )

}

export default Bifocal

