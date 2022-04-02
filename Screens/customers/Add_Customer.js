import { StyleSheet, Text, View,ScrollView,TextInput,Alert } from 'react-native'
import React,{useState} from 'react';
import { Header } from '../../Components';
import { COLORS,SIZES } from '../constants/theme';
import Styles from '../../GlobalStyle/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '@react-native-firebase/firestore';
import Symbol_Heading from '../../Components/Symbol_Heading';
import RNDateTimeSelector from 'react-native-date-time-scroll-picker';
import { SelectSph } from '../selectable';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Add_Customer = () => {
    const [mobile,setMobile] =useState('')
    const [name,setName] = useState('')
    const [email,setEmail]= useState('')
    const [error,setError] =useState('')

//right side

//right d
const [r_sph_d,setR_sph_d] = useState("")
const [r_cyl_d,setR_cyl_d] = useState("")
const [r_axis_d,setR_axis_d] = useState("")
const [r_va_d,setR_va_d] = useState("")

//right n
const [r_sph_n,setR_sph_n] = useState("")
const [r_cyl_n,setR_cyl_n] = useState("")
const [r_axis_n,setR_axis_n] = useState("")
const [r_va_n,setR_va_n] = useState("")
//right add
const [r_sph_add,setR_sph_add] = useState("")
//right cl
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









const [displaySph,setDisplaySph] = useState(false)

    const checkDetails =()=>{
        if(mobile.length == 10 && name != '' ){       
          database_entry()      
        }
        else{
            Alert.alert(' Mobile and Name is mandatory','Mobile Number must be 10 digits ',[{text:"Dismiss"}])
        }
    }


    const right_side =()=>{
        return(
            <View style={Styles.eye_pres_bg}>
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
{/* VIew of first line d  */}
<View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>D</Text>
</View>


<TextInput style={Styles.entry_textInput} value={r_sph_d}  keyboardType={'numeric'}  onChangeText={(value)=>{setR_sph_d(value)}} />
             <TextInput style={Styles.entry_textInput}   value={r_cyl_d} keyboardType={'numeric'} onChangeText={(value)=>{setR_cyl_d(value)}} />
             <TextInput style={Styles.entry_textInput} keyboard={'numeric'} keyboardType={'numeric'} value={r_axis_d} onChangeText={(value)=>{setR_axis_d(value)}} />
            <TextInput style={Styles.entry_textInput}  value={r_va_d} keyboardType={'numeric'}  onChangeText={(value)=>{setR_va_d(value)}}/>
</View>
<View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>N</Text>
                </View>
      <TextInput style={Styles.entry_textInput} value={r_sph_n} keyboardType={'numeric'} onChangeText={(value)=>{setR_sph_n(value)}}  />
       <TextInput style={Styles.entry_textInput} value={r_cyl_n} keyboardType={'numeric'}  onChangeText={(value)=>{setR_cyl_n(value)}}/>
      <TextInput style={Styles.entry_textInput} value={r_axis_n} keyboardType={'numeric'} keyboard={'numeric'}  onChangeText={(value)=>{setR_axis_n(value)}}/>
      <TextInput style={Styles.entry_textInput} value={r_va_n} keyboardType={'numeric'}  onChangeText={(value)=>{setR_va_n(value)}}/>
 </View>
 <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>ADD</Text>
                </View>
      <TextInput style={Styles.entry_textInput} value={r_sph_add} keyboardType={'numeric'} onChangeText={(value)=>{setR_sph_add(value)}}  />
       <TextInput editable={false}  />
       <TextInput editable={false}  />
       <TextInput editable={false}  />
 </View>
 <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>CL</Text>
                </View>
       <TextInput style={Styles.entry_textInput} value={r_sph_cl} keyboardType={'numeric'}  onChangeText={(value)=>{setR_sph_cl(value)}} />
       <TextInput style={Styles.entry_textInput} value={r_cyl_cl} keyboardType={'numeric'} onChangeText={(value)=>{setR_cyl_cl(value)}} />
      <TextInput style={Styles.entry_textInput} value={r_axis_cl} keyboardType={'numeric'} onChangeText={(value)=>{setR_axis_cl(value)}} />
      <TextInput style={Styles.entry_textInput} value={r_va_cl} keyboardType={'numeric'} onChangeText={(value)=>{setR_va_cl(value)}}/>
 </View>
<View style={{marginBottom:20}}></View>
        </View>
            )}

const left_side =()=>{
return(


    <View style={Styles.eye_pres_bg}>
    
    <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginVertical:5}}>
    <Symbol_Heading name="eye" title="Left Side" />
    </View>
            <View style={Styles.entry_view}>    
             <TextInput placeholder=" XYZ " placeholderTextColor={COLORS.gray} style={Styles.entry_text_head} />
             <TextInput placeholder="SPH" placeholderTextColor={"red"} style={Styles.entry_text_head} />
             <TextInput placeholder="CYL" placeholderTextColor={"red"} style={Styles.entry_text_head} />
            <TextInput placeholder="AXIS" placeholderTextColor={"red"} style={Styles.entry_text_head} />
            <TextInput placeholder="VA" placeholderTextColor={"red"} style={Styles.entry_text_head} />
      </View>

      <View style={Styles.entry_view}>
        {/* VIew of first line d  */}
        <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
        <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>D</Text>
        </View>
            <TextInput style={Styles.entry_textInput} value={l_sph_d}  keyboardType={'numeric'}  onChangeText={(value)=>{setL_sph_d(value)}} />
            <TextInput style={Styles.entry_textInput}   value={l_cyl_d} keyboardType={'numeric'} onChangeText={(value)=>{setL_cyl_d(value)}} />
            <TextInput style={Styles.entry_textInput} keyboard={'numeric'} keyboardType={'numeric'} value={l_axis_d} onChangeText={(value)=>{setL_axis_d(value)}} />
            <TextInput style={Styles.entry_textInput}  value={l_va_d} keyboardType={'numeric'}  onChangeText={(value)=>{setL_va_d(value)}}/>        
</View>


<View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>N</Text>
                </View>
      <TextInput style={Styles.entry_textInput} value={l_sph_n} keyboardType={'numeric'} onChangeText={(value)=>{setL_sph_n(value)}}  />
       <TextInput style={Styles.entry_textInput} value={l_cyl_n} keyboardType={'numeric'}  onChangeText={(value)=>{setL_cyl_n(value)}}/>
      <TextInput style={Styles.entry_textInput} value={l_axis_n} keyboardType={'numeric'} keyboard={'numeric'}  onChangeText={(value)=>{setL_axis_n(value)}}/>
      <TextInput style={Styles.entry_textInput} value={l_va_n} keyboardType={'numeric'}  onChangeText={(value)=>{setL_va_n(value)}}/>
 </View>


 <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>ADD</Text>
                </View>
      <TextInput style={Styles.entry_textInput} value={l_sph_add} keyboardType={'numeric'} onChangeText={(value)=>{setL_sph_add(value)}}  />
       <TextInput editable={false}  />
       <TextInput editable={false}  />
       <TextInput editable={false}  />
 </View>

  <View style={Styles.entry_view}>
 <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
                    <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>CL</Text>
                </View>
       <TextInput style={Styles.entry_textInput} value={l_sph_cl} keyboardType={'numeric'} onChangeText={(value)=>{setL_sph_cl(value)}}  />
       <TextInput style={Styles.entry_textInput} value={l_cyl_cl} keyboardType={'numeric'} onChangeText={(value)=>{setL_cyl_cl(value)}} />
      <TextInput style={Styles.entry_textInput} value={l_axis_cl} keyboardType={'numeric'} onChangeText={(value)=>{setL_axis_cl(value)}} />
      <TextInput style={Styles.entry_textInput} value={l_va_cl} keyboardType={'numeric'} onChangeText={(value)=>{setL_va_cl(value)}}/>
 </View>
<View style={{marginBottom:20}}></View>

    </View>

)}

const pd_adjustement=()=>{
    return(
        <View style={Styles.eye_pres_bg}>
    <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginVertical:5}}>
    <Symbol_Heading name="eye" title="PD Adjustement" />
    </View>

    <View style={Styles.entry_view}>    
             <TextInput placeholder=" XYZ " placeholderTextColor={COLORS.gray} style={Styles.entry_text_head} />
             <TextInput placeholder="RIGHT" placeholderTextColor={"red"} style={Styles.entry_text_head} />
             <TextInput placeholder="LEFT" placeholderTextColor={"red"} style={Styles.entry_text_head} />
            <TextInput placeholder="TOTAL" placeholderTextColor={"red"} style={Styles.entry_text_head} />
      </View>
      <View style={Styles.entry_view}>
        {/* VIew of first line d  */}
        <View style={{alignSelf:'flex-end',top:3,justifyContent:'center'}}>
        <Text style={[Styles.entry_text_head,{color:'red',alignSelf:'center'}]}>PD</Text>
        </View>
        <TextInput style={Styles.entry_textInput} value={pd_right}  keyboardType={'numeric'}  onChangeText={(value)=>{setPd_right(value)}} />
            <TextInput style={Styles.entry_textInput}   value={pd_left} keyboardType={'numeric'} onChangeText={(value)=>{setPd_left(value)}} />
            <TextInput style={Styles.entry_textInput} value={pd_total} keyboard={'numeric'} keyboardType={'numeric'}  onChangeText={(value)=>{setPd_total(value)}} />

</View>
<View style={{marginBottom:20}}></View>
        </View>
    )
}
    const database_entry =async()=>{

        firebase.firestore().collection('customers').doc(mobile).get().then((doc)=>{
            if(doc.exists){
                Alert.alert('Customer Already in Database','The given mobile is already in database',[{text:"dismiss"}] )
                
            }
            else{
                 firebase.firestore().collection('customers').doc(mobile).set({
                     name:name,
                     mobile:mobile,
                     email:email,
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
                            
                             l_sph_d:l_sph_d,
                             l_cyl_d:l_cyl_d,
                             l_axis_d:l_axis_d,
                             l_va_d:l_va_d,
                     
                             l_sph_n:l_sph_n,
                             l_cyl_n:l_cyl_n,
                             l_axis_n:l_axis_n,
                             l_va_n:l_va_n,
                     
                             l_sph_add:l_sph_add,
                             
                             l_sph_cl:l_sph_cl,
                              l_cyl_cl:l_cyl_cl,
                              l_axis_cl:l_axis_cl,
                              l_va_cl:l_va_cl,

                            pd_right:pd_right,
                            pd_left:pd_left,
                            pd_total:pd_total 
                
                    }).then(()=>{
                    Alert.alert('','Customer Added in Database',[{text:"Dismiss"}])
                  //  navigation.navigate('visit_book')
                    setName('')
                    setEmail('')
                    setMobile('')
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
            
                     setL_sph_d('');
                     setL_cyl_d('');
                     setL_axis_d('');
                     setL_va_d('');
             
                     setL_sph_n('');
                     setL_cyl_n('');
                     setL_axis_n('');
                     setL_va_n('');
             
                     setL_sph_add('');
                     
                     setL_sph_cl('');
                     setL_cyl_cl('');
                      setL_axis_cl('');
                      setL_va_cl('');
             
                      setPd_left('')
                      setPd_right('')
                      setPd_total('')



                    setError('')
                
                
                
                
                }) 

            }
        })

    }

    return (
    <ScrollView>
        <Header title="ADD CUSTOMER " />
        <View style={{margin:10}}>

        <TextInput style={Styles.testInput} value={mobile} keyboardType={'numeric'} onChangeText={(value)=>{setMobile(value)}} placeholder="Enter the Mobile"/>
        <TextInput style={Styles.testInput} value={name}  onChangeText={(value)=>{setName(value)}} placeholder="Enter the Name" />
        <TextInput style={Styles.testInput} value={email}  onChangeText={(value)=>{setEmail(value)}} placeholder="Enter the Email" />
             
        </View>
    <View>
    {right_side()}
    {left_side()}
    {pd_adjustement()}
    </View>
        <View style={Styles.touchop_view}>
        <TouchableOpacity style={Styles.touchop} onPress={()=>{console.log("add customer console"),checkDetails()}}>
            <Text style={Styles.touchop_text}>
                Add Customer
            </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Add_Customer

const styles = StyleSheet.create({})