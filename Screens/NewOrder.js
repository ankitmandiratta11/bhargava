import { View, Text,TouchableOpacity,TextInput,SafeAreaView,Image,Alert,ScrollView } from 'react-native';
import React,{useState,useEffect,useContext} from 'react';
import Styles from '../GlobalStyle/Styles';
import { Picker } from '@react-native-picker/picker';
import { Header,Datee,LensType,Side,LensFor,FrameType,Calendar,pickaxis } from '../Components';
import { COLORS,SIZES } from './constants/theme';
import  Icon  from 'react-native-vector-icons/AntDesign';
import firestore,{ firebase } from '@react-native-firebase/firestore';
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import Symbol_Heading from '../Components/Symbol_Heading';
import moment from 'moment';
import Pickaxis from '../Components/Pickaxis'
import { AuthContext } from '../Components/context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SearchStock from '../Components/SearchStock';


const NewOrder = () => {
    const {signIn} = useContext(AuthContext)
    const [userId ,setUserId] = useState()
   
    useEffect(()=>{
        valuePut()
  
      
})

    const valuePut =async()=>{
    let ID = await AsyncStorage.getItem('userID')
    setUserId(JSON.parse(ID))
    console.log(userId)
        }


//here1
const [stockSearch,setStockSearch] = useState(false);    
const [data,setData]= useState([])


 const dateToday = moment().format('DD-MM-YYYY')   
 const [orderDate,setOrderDate] = useState(dateToday);

 const [axis,setaxis] = useState(false);
 const [calVisible,setCalVisible] = useState(false);
 const [completeDate,setCompleteDate] = useState(dateToday); 
 const [calDate,setCalDate] = useState(dateToday) 
const [date,setDate] =useState()
 const [orderStatus,setOrderStatus] =useState("Pending");
const [fName,setFName]=useState("");
const [mob1,setMob1] = useState("");
const [mob2,,setMob2] = useState("");
const [eyeCheckUpDate,setEyeCheckUpDate] =useState("");
const [drName,setDrName]= useState("")
const [hospital,setHospital] = useState("")
const [hcity,setHcity] = useState("")
const [dr_op,setDr_op] = useState("")
const [opt_shop,setOpt_shop] = useState("")
const [opt_city,setOpt_city] = useState("")

//right   d
const [r_sph_d,setR_sph_d] = useState("")
const [r_cyl_d,setR_cyl_d] = useState("")
const [r_axis_d,setR_axis_d] = useState("")
const [r_va_d,setR_va_d] = useState("")

//right   n
const [r_sph_n,setR_sph_n] = useState("")
const [r_cyl_n,setR_cyl_n] = useState("")
const [r_axis_n,setR_axis_n] = useState("")
const [r_va_n,setR_va_n] = useState("")

//right add
const [r_sph_add,setR_sph_add] = useState("")

//right   cl
const [r_sph_cl,setR_sph_cl] = useState("")
const [r_cyl_cl,setR_cyl_cl] = useState("")
const [r_axis_cl,setR_axis_cl] = useState("")
const [r_va_cl,setR_va_cl] = useState("")

//left   d
const [l_sph_d,setL_sph_d] = useState("")
const [l_cyl_d,setL_cyl_d] = useState("")
const [l_axis_d,setL_axis_d] = useState("")
const [l_va_d,setL_va_d] = useState("")

//left   n
const [l_sph_n,setL_sph_n] = useState("")
const [l_cyl_n,setL_cyl_n] = useState("")
const [l_axis_n,setL_axis_n] = useState("")
const [l_va_n,setL_va_n] = useState("")

//left add
const [l_sph_add,setL_sph_add] = useState("")

//left   cl
const [l_sph_cl,setL_sph_cl] = useState("")
const [l_cyl_cl,setL_cyl_cl] = useState("")
const [l_axis_cl,setL_axis_cl] = useState("")
const [l_va_cl,setL_va_cl] = useState("")

//PD adjustement

const [pd_right,setPd_right]= useState("");
const [pd_left,setPd_left] =useState("");
const [pd_total,setPd_total]=useState("");
//
const [presMed ,setPresMed]=useState("");

//purchase details

const [fullSpecs,setFullSpecs]=useState(false)
const [onlyFrame,setOnlyFrame] =useState(false)
const [onlyLens,setOnlyLens] =useState(false)

//

const [frameType,setFrameType] = useState("")
const [modelName,setModelName] = useState("")
const [modelCode,setModelCode]= useState("")
const [modelColor,setModelColor]= useState("")
const [modelSize,setModelSize]= useState("")
const [framePrice,setFramePrice]=useState(0)

//lens
const [lensFor,setLensFor] = useState("")
const [lensType,setLensType] = useState("")
const [side,setSide] =useState("")
const [lensCompName,setLensCompName] = useState("")
const [lensProdName,setLensProdName] = useState("")
const [index,setIndex] = useState("")
const [dia,setDia] = useState("")
const [lensPrice,setLensPrice] =useState(0)

//bill details
const [totalAmount,setTotalAmount] =useState(0)
const [discount,setDiscount] =useState(0);
const [advance,setAdvance]= useState(0)
const [balAmount,setBalAmount] = useState(0)
const [cash_card,setCash_card] =useState("")
const[extraDetails,setExtraDetails] =useState("")
const [dr_show,setDr_show] = useState(false) 
const [opt_show,setOpt_show] = useState(true) 
const [dr_optt,setDr_optt] = useState(false)
const [frameCheckBox,setFrameCheckBox] =useState(false)
const [lensCheckBox,setLensCheckBox] =useState(false)

const radio_props =[
      {label: 'Doctor     ', value: 0 },
      {label: 'Optician   ', value: 1 },
    ]

    const parentcallback=(value)=>{
        setaxis(false)
        setR_sph_d(value)
    
    }



const dr_showw =()=>{
                  return(
                 <View> 
                <TextInput placeholder='Dr. Name' style={Styles.testInput} 
                  value={drName} onChangeText={(value)=>setDrName(value)} />
                  <TextInput placeholder='Hospital ' style={Styles.testInput} 
                   value={hospital} onChangeText={(value)=>setHospital(value)} />
                  <TextInput placeholder='City' style={Styles.testInput} 
                  value={hcity} onChangeText={(value)=>setHcity(value)} />
               </View>
               )}

         const opt_showw =()=>{
            return(
                 <View> 
            <TextInput placeholder='Optician' style={Styles.testInput} 
            value={opt_shop} onChangeText={(value)=>setOpt_shop(value)} />
   
         <TextInput placeholder='City ' style={Styles.testInput} 
         value={opt_city} onChangeText={(value)=>setOpt_city(value)} />
      </View>
                  )}

            
          const right_side_details= ()=>{ 
            return(

            <View style={Styles.eye_pres_bg}>
            
            {axis&&  <Pickaxis parentcallback={parentcallback}/>}
            <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginVertical:5}}>
            <Symbol_Heading name="eye" title="Right Side" />
            </View>
            <View style={Styles.entry_view}>
             <TextInput placeholder=" XYZ " placeholderTextColor={COLORS.gray} style={Styles.entry_text_head} />
             <TextInput placeholder="SPH" placeholderTextColor={"red"} style={Styles.entry_text_head} />
             <TextInput placeholder="CYL" placeholderTextColor={"red"} style={Styles.entry_text_head} />
            <TextInput placeholder="AXIS" placeholderTextColor={"red"} style={Styles.entry_text_head} />
            <TextInput placeholder="VA" placeholderTextColor={"red"} style={Styles.entry_text_head} />
             </View>
 
            <View style={Styles.entry_view}>

                <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>D</Text>
                </View>


             <TextInput style={Styles.entry_textInput} value={r_sph_d} onFocus={()=>setaxis(true)}  onChangeText={(value)=>{setR_sph_d(value)}} />
             <TextInput style={Styles.entry_textInput}  value={r_cyl_d} onChangeText={(value)=>{setR_cyl_d(value)}} />
             <TextInput style={Styles.entry_textInput}  value={r_axis_d} onChangeText={(value)=>{setR_axis_d(value)}} />
            <TextInput style={Styles.entry_textInput}  value={r_va_d}  onChangeText={(value)=>{setR_va_d(value)}}/>
             </View>

 <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>N</Text>
                </View>

      <TextInput style={Styles.entry_textInput} value={r_sph_n}  onChangeText={(value)=>{setR_sph_n(value)}} />
       <TextInput style={Styles.entry_textInput} value={r_cyl_n}  onChangeText={(value)=>{setR_cyl_n(value)}}/>
      <TextInput style={Styles.entry_textInput} value={r_axis_n}  onChangeText={(value)=>{setR_axis_n(value)}}/>
      <TextInput style={Styles.entry_textInput} value={r_va_n}  onChangeText={(value)=>{setR_va_n(value)}}/>
 </View>

 <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>ADD</Text>
                </View>


      <TextInput style={Styles.entry_textInput} value={r_sph_add} onChangeText={(value)=>{setR_sph_add(value)}}  />
       <TextInput editable={false}  />
       <TextInput editable={false}  />
       <TextInput editable={false}  />
 </View>

 <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>CL</Text>
                </View>

       <TextInput style={Styles.entry_textInput} value={r_sph_cl}  onChangeText={(value)=>{setR_sph_cl(value)}} />
       <TextInput style={Styles.entry_textInput} value={r_cyl_cl} onChangeText={(value)=>{setR_cyl_cl(value)}} />
      <TextInput style={Styles.entry_textInput} value={r_axis_cl} onChangeText={(value)=>{setR_axis_cl(value)}} />
      <TextInput style={Styles.entry_textInput} value={r_va_cl}  onChangeText={(value)=>{setR_va_cl(value)}}/>
 </View>
 <View ><Text>a</Text></View>
 </View>
)}        

const frame_callback =(childData)=>{
        setFrameType(childData)
}
const lens_callback_lensfor =(childData)=>{
setLensFor(childData)
    console.log(childData)
}

const lens_callback_lensType =(childData)=>{
    setLensType(childData)
        console.log(childData)
    }

    const lens_callback_side =(childData)=>{
        setSide(childData)
            console.log(childData)
        }
        

const frame_check=()=>{
      setFrameCheckBox(!frameCheckBox) 
            }

            const lens_check=()=>{
       setLensCheckBox(!lensCheckBox) 
                   }
const checkDetails =async()=>{

    if(fName == ""){
        Alert.alert('','Enter the Name',[{text:"Dismiss"}])
    }
    else if (mob1 == "" || mob1.length != 10  ){
        console.log(mob1.length)
        Alert.alert('','Enter the correct mobile number ',[{text:"Dismiss"}])
    }
   
    else if (frameCheckBox==false && lensCheckBox ==false  ){
        console.log(mob1.length)
        Alert.alert('','Select Any Frame or lens ',[{text:"Dismiss"}])
    }
    //after selecting the frame ,details filled must be checked
    else if (frameCheckBox == true){
                 if( modelName == ""){
        Alert.alert('','Enter Model Name of frame  ',[{text:"Dismiss"}])
        }
        else if( modelCode == ""){
            Alert.alert('','Enter Model Code of frame  ',[{text:"Dismiss"}])
            }
            else if( modelColor == ""){
                Alert.alert('','Enter Model Color of frame  ',[{text:"Dismiss"}])
                }   
            else if( modelSize == ""){
                    Alert.alert('','Enter Model Size of frame  ',[{text:"Dismiss"}])
                    }   
                    else{
                        let ID = await AsyncStorage.getItem('userID')           

           
                        firebase.firestore().collection('users').doc(userId).collection('orders').add({

                            orderDate:orderDate,
                            completeDate:completeDate,
                            orderStatus:orderStatus,
                            name:fName,
                            mobile1:mob1,
                            mobile2:mob2,
                            drName:drName,
                            hospital:hospital,
                            hcity:hcity,
                            opt_shop:opt_shop,
                            opt_city:opt_city,
                    
                            r_sph_d:r_sph_d,
                            r_cyl_d:r_cyl_d,
                            r_axis_d:r_axis_d,
                            r_va_d:r_va_d,
                    
                            r_sph_n:r_sph_n,
                            r_cyl_n:r_cyl_n,
                            r_axis_n:r_axis_n,
                            r_va_n:r_va_n,
                    
                            r_sph_add:r_sph_add,
                            
                            r_sph_cl:r_sph_cl,
                             r_cyl_cl:r_cyl_cl,
                             r_axis_cl:r_axis_cl,
                             r_va_cl:r_va_cl,
                             frameCheckBox:frameCheckBox,
                    
                            frameType:frameType,
                            modelName:modelName,
                            modelCode:modelCode,
                            modelColor:modelColor,
                            modelSize:modelSize,
                            framePrice:framePrice,
                            lensCheckBox:lensCheckBox,
                            lensFor:lensFor,
                            lensType:lensType,
                            side:side,
                            lensCompName:lensCompName,
                            lensProdName:lensProdName,
                            index:index,
                            dia:dia,
                            discount:discount,
                            advance:advance,
                            balAmount:balAmount,
                            extraDetails:extraDetails,
                            status:"pending"
                    
                        }).then(() => {
                            console.log("Document successfully written!");
                            setErrors("Congrats Data Added in Database");
                            setFName('');setMob1('');setMob2('')
                            setDrName(''),
                            setHospital('');
                            setHcity('');
                            setOpt_shop('');
                            setOpt_city('');
                    
                            setR_sph_d('');
                            setR_cyl_d('');
                            setR_axis_d('');
                            setR_va_d('');
                    
                            setR_sph_n('');
                            setR_cyl_n('');
                            setR_axis_n('');
                            setR_va_n('');
                    
                            setR_sph_add('');
                            
                            setR_sph_cl('');
                            setR_cyl_cl('');
                             setR_axis_cl('');
                             setR_va_cl('');
                    
                            setFrameType('');
                            setModelName('');
                            setModelCode('');
                            setModelColor('');
                            setModelSize('');
                            setFramePrice('');
                    
                            setLensFor('');
                            setLensType('');
                            setSide('');
                            setLensCompName('');
                            setLensProdName('');
                            setIndex('');
                            setDia('');
                            setDiscount('');setAdvance('');
                            setBalAmount('');
                            setExtraDetails('')
                        
                        })

                    }
                //    else if( framePrice == ""){
                //     Alert.alert('','Enter Frame Price in  frame details  ',[{text:"Dismiss"}])
                //     }    
            }
 
else if (lensCheckBox == true){
    if( lensCompName == ""){
Alert.alert('','Enter Company Name of Lens',[{text:"Dismiss"}])
}
else if( lensProdName == ""){
Alert.alert('','Enter Product Name of Lens ',[{text:"Dismiss"}])
}
else if( dia == ""){
   Alert.alert('','Enter Dia of Lens  ',[{text:"Dismiss"}])
   }   
else if( index == ""){
       Alert.alert('','Enter Index of Lens  ',[{text:"Dismiss"}])
       }   
    //   else if( lensPrice == ""){
    //    Alert.alert('','Enter Lens Price   ',[{text:"Dismiss"}])
    //    }
    else{
        console.log('check2')
    }

}

else {
    let ID = await AsyncStorage.getItem('userID')

    firebase.firestore().collection('users').doc(ID).collection('orders').add({

        orderDate:orderDate,
        completeDate:completeDate,
        orderStatus:orderStatus,
        name:fName,
        mobile1:mob1,
        mobile2:mob2,
        drName:drName,
        hospital:hospital,
        hcity:hcity,
        opt_shop:opt_shop,
        opt_city:opt_city,

        r_sph_d:r_sph_d,
        r_cyl_d:r_cyl_d,
        r_axis_d:r_axis_d,
        r_va_d:r_va_d,

        r_sph_n:r_sph_n,
        r_cyl_n:r_cyl_n,
        r_axis_n:r_axis_n,
        r_va_n:r_va_n,

        r_sph_add:r_sph_add,
        
        r_sph_cl:r_sph_cl,
         r_cyl_cl:r_cyl_cl,
         r_axis_cl:r_axis_cl,
         r_va_cl:r_va_cl,
         frameCheckBox:frameCheckBox,

        frameType:frameType,
        modelName:modelName,
        modelCode:modelCode,
        modelColor:modelColor,
        modelSize:modelSize,
        framePrice:framePrice,
        lensCheckBox:lensCheckBox,
        lensFor:lensFor,
        lensType:lensType,
        side:side,
        lensCompName:lensCompName,
        lensProdName:lensProdName,
        index:index,
        dia:dia,
        discount:discount,
        advance:advance,
        balAmount:balAmount,
        extraDetails:extraDetails

    }).then(() => {
        console.log("Document successfully written!");
        setErrors("Congrats Data Added in Database");
        setFName('');setMob1('');setMob2('')
        setDrName(''),
        setHospital('');
        setHcity('');
        setOpt_shop('');
        setOpt_city('');

        setR_sph_d('');
        setR_cyl_d('');
        setR_axis_d('');
        setR_va_d('');

        setR_sph_n('');
        setR_cyl_n('');
        setR_axis_n('');
        setR_va_n('');

        setR_sph_add('');
        
        setR_sph_cl('');
        setR_cyl_cl('');
         setR_axis_cl('');
         setR_va_cl('');

        setFrameType('');
        setModelName('');
        setModelCode('');
        setModelColor('');
        setModelSize('');
        setFramePrice('');

        setLensFor('');
        setLensType('');
        setSide('');
        setLensCompName('');
        setLensProdName('');
        setIndex('');
        setDia('');
        setDiscount('');setAdvance('');
        setBalAmount('');
        setExtraDetails('')
    
    })
}
}
const frameData =()=>{
return(
    firebase.firestore().collection("users").doc('84Dz8rylvchiyZbYm5bJmIYCzCc2').collection('framestock').get()
    .then((query)=>{
        let array =[]
        query.forEach((doc)=>{
        setStockSearch(!stockSearch)
        array.unshift(doc.data())       
        })
        setData(array)
            })


)}

const frame_lens_checkbox =()=>{
      return(
         <View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
 {/* Frame  */}
<View style={Styles.f_d_row}>
<CheckBox  value ={frameCheckBox} tintColor={COLORS.red} title="FRAME"
onValueChange={()=>{frame_check()}} style={{justifyContent:'center',alignContent:'center',alignItems:'center'}} />
<Text style={{margin:5,fontWeight:'300',color:COLORS.red}}>FRAME</Text>
</View>
 {/* Lens  */}
<View style={Styles.f_d_row}>
<CheckBox  value ={lensCheckBox} tintColor={COLORS.red} 
onValueChange={()=>{lens_check()}} style={{justifyContent:'center',alignContent:'center',alignItems:'center'}} 
/>
<Text style={{margin:5,fontWeight:'500',color:COLORS.red}}>LENS</Text>
</View>
</View>
{
      frameCheckBox && <View>

{stockSearch  && <SearchStock data={data} />}
    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{console.log("Search from stock"),frameData()}}>
        <Symbol_Heading name="search1" title="Search From Stock" />
        </TouchableOpacity>
       <FrameType parentCallback={frame_callback} />

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
 <TextInput placeholder=' Model Size' keyboardType='numeric' style={Styles.twoColoumnText} 
    value={modelSize} onChangeText={(value)=>setModelSize(value)}/>

    <TextInput placeholder='Frame Price' keyboardType='numeric' style={Styles.twoColoumnText} 
    value={framePrice} onChangeText={(value)=>{setFramePrice(value),check1()} }/>
        </View>
 

            </View>
        }
        {lensCheckBox && 
        <View>
            {/* Why View and /View cant be in a single line */}
           <View style={Styles.view_picker}>   
           <LensFor parentCallback={lens_callback_lensfor} />
           </View>
         <View style={Styles.view_picker}>
             <LensType parentCallback={lens_callback_lensType} />
            </View>
         <View style={Styles.view_picker}>
             <Side parentCallback={lens_callback_side} />
         </View>

             {/* <View style={Styles.view_picker}> <LensType /> </View> */}
             {/* <View style={Styles.view_picker}>  <Side /> </View> */}

              
  <TextInput placeholder='Lens Company  Name' style={Styles.testInput} 
    value={lensCompName} onChangeText={(name)=>setLensCompName(name)}/>
 
 <TextInput placeholder='Lens Productt  Name' style={Styles.testInput} 
    value={lensProdName} onChangeText={(name)=>setLensProdName(name)}/>
 

 <View style={Styles.twoColoumnView}>
    <TextInput placeholder='INDEX' style={Styles.twoColoumnText} keyboardType='numeric'
    value={index} onChangeText={(value)=>setIndex(value)} />
       <TextInput placeholder='DIA' style={Styles.twoColoumnText} keyboardType='numeric'
    value={dia} onChangeText={(value)=>setDia(value)}/>
  <TextInput placeholder='Lens Price' style={Styles.twoColoumnText} keyboardType='numeric'
    value={lensPrice} onChangeText={(value)=>{setLensPrice(value),check1()}}    />
 </View>

              </View>
              }

</View>
)}
const check1 =()=>{
   setBalAmount(JSON.stringify(JSON.parse(lensPrice) + JSON.parse(framePrice) - advance - discount))
    return(

    console.log('a')
 

    )}
const BillDetails=()=>{
      return(
            <View>
            <TextInput placeholder='Discount' style={Styles.testInput} keyboardType='numeric'
    value={discount} onChangeText={(value)=>{setDiscount(value),check1()}}/>

<TextInput placeholder='Advance' style={Styles.testInput} keyboardType='numeric'
    value={advance} onChangeText={(value)=>{setAdvance(value),check1()}}/>

<TextInput placeholder='Balance Paymnet' style={Styles.testInput} keyboardType='numeric'
    value={balAmount} onChangeText={(value)=>{setBalAmount(value),check1()}}/>

<TextInput placeholder='Extra Details' style={Styles.testInput} multiline={true} numberOfLines={5}
    value={extraDetails} onChangeText={(value)=>setExtraDetails(value)}/>
</View>
      )}

      const parentCallbackCalendar=(date)=>{
        setCompleteDate(date)
        setCalVisible(false)
            }
//Main return
   return (
    <ScrollView>
      <Header title="NEW ORDER" />
      <View style={Styles.safeViewBelow}>

  <Symbol_Heading  title = "ORDER DETAILS" name ="profile"  />

  <View></View>
 <TextInput value={orderDate} style={Styles.testInput} />
   <View style={{margin :5}}></View>
  <View style={Styles.f_d_row}>
  <Text style={{...Styles.flex1,...Styles.touchop,padding:5,color:COLORS.white}}>Complete Date</Text>
  <Text style={Styles.flex1}> </Text>
 
  <TouchableOpacity style={Styles.touchop} onPress={()=>{console.log("Date Change"),setCalVisible(true)}}>
  <Text style={{...Styles.touchop_text,marginRight:15}}>Change Date</Text>
  </TouchableOpacity>
  </View>

  {calVisible && <Calendar parentCallbackCalendar={parentCallbackCalendar} />}    
  <TextInput style={Styles.testInput}  value={completeDate}  />


 <TextInput placeholder='Enter Customer  Name' style={Styles.testInput} 
      value={fName} onChangeText={(value)=>setFName(value)} />

<TextInput placeholder='Enter Mobile No 1' style={Styles.testInput} keyboardType="numeric" 
      value={mob1} onChangeText={(value)=>setMob1(value)} />

<TextInput placeholder='Enter Mobile No 2' style={Styles.testInput} 
      value={mob2} onChangeText={(value)=>setMob2(value)} />


{/* Dr and optician */}
<Symbol_Heading title="Eye Checked By" name="medical-bag" />
<View style={{alignSelf:'center',marginVertical:10}}>
<RadioForm radio_props={radio_props}
initial={0}
onPress={(value)=>setDr_optt(value)}
buttonColor={COLORS.red}
labelHorizontal={true}
formHorizontal={true}
/>
</View>
<View>
{dr_optt ==0? dr_showw() : opt_showw()}
</View>


{/* {right_side_details()} */}

<Symbol_Heading title="Purchase Details" name="shoppingcart" />

{frame_lens_checkbox()}

<Symbol_Heading title="Bill Details" name="profile"/>

{BillDetails()}

<View style={Styles.touchop_view}>
        <TouchableOpacity style={Styles.touchop} onPress={()=>{console.log(balAmount),console.log("generate Bill")}}>
            <Text style={Styles.touchop_text}>
                Generate Bill
            </Text>
        </TouchableOpacity>
    </View>
</View>
    </ScrollView>
  )}

  const mapStateToProps= state=>{
         userToken:state.userToken 
}

export default NewOrder