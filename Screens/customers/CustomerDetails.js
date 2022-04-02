import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import { firebase } from '@react-native-firebase/firestore'
import { Header } from '../../Components';
import Styles from '../../GlobalStyle/Styles';
import { COLORS } from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Symbol_Heading from '../../Components/Symbol_Heading';
const CustomerDetails = (props) => {
const {route,navigation} = props
    
const item = route.params.item

const [mobile,setMobile] =useState(item.mobile)
const [name,setName] = useState(item.name)
const [email,setEmail]= useState(item.email)
const [error,setError] =useState('')

//right side

//right d
const [r_sph_d,setR_sph_d] = useState(item.r_sph_d)
const [r_cyl_d,setR_cyl_d] = useState(item.r_cyl_d)
const [r_axis_d,setR_axis_d] = useState(item.r_axis_d)
const [r_va_d,setR_va_d] = useState(item.r_va_d)

//right n
const [r_sph_n,setR_sph_n] = useState(item.r_sph_n)
const [r_cyl_n,setR_cyl_n] = useState(item.r_cyl_n)
const [r_axis_n,setR_axis_n] = useState(item.r_axis_n)
const [r_va_n,setR_va_n] = useState(item.r_va_n)
//right add
const [r_sph_add,setR_sph_add] = useState(item.r_sph_add)
//right cl
const [r_sph_cl,setR_sph_cl] = useState(item.r_sph_cl)
const [r_cyl_cl,setR_cyl_cl] = useState(item.r_cyl_cl)
const [r_axis_cl,setR_axis_cl] = useState(item.r_axis_cl)
const [r_va_cl,setR_va_cl] = useState(item.r_va_cl)

//left   d
const [l_sph_d,setL_sph_d] = useState(item.l_sph_d)
const [l_cyl_d,setL_cyl_d] = useState(item.l_cyl_d)
const [l_axis_d,setL_axis_d] = useState(item.l_axis_d)
const [l_va_d,setL_va_d] = useState(item.l_axis_d)

//left   n
const [l_sph_n,setL_sph_n] = useState(item.l_sph_n)
const [l_cyl_n,setL_cyl_n] = useState(item.l_cyl_n)
const [l_axis_n,setL_axis_n] = useState(item.l_axis_n)
const [l_va_n,setL_va_n] = useState(item.l_va_n)

//left add
const [l_sph_add,setL_sph_add] = useState(item.l_sph_add)

//left   cl
const [l_sph_cl,setL_sph_cl] = useState(item.l_sph_cl)
const [l_cyl_cl,setL_cyl_cl] = useState(item.l_cyl_cl)
const [l_axis_cl,setL_axis_cl] = useState(item.l_axis_cl)
const [l_va_cl,setL_va_cl] = useState(item.l_va_cl)

//PD adjustement

const [pd_right,setPd_right]= useState(item.pd_right);
const [pd_left,setPd_left] =useState(item.pd_left);
const [pd_total,setPd_total]=useState(item.pd_total);

const update_document =()=>{

 const dataRef = firebase.firestore().collection('customers').doc(item.mobile);

                return  dataRef.update({

                  name:name,
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
                  Alert.alert('','Document Updated Successfully')
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
              });
  
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
      


return (
    <ScrollView>
<Header title="Customer Details" />
<View style={{marginTop:10}}></View>
<View style={Styles.f_d_row}>
   <Text style={Styles.flex1}> </Text>
  <TouchableOpacity style={{marginRight:15,flexDirection:'row',borderWidth:1,padding:5,borderRadius:5,borderColor:COLORS.red}} onPress={()=>{navigation.navigate('customer_history',{item:mobile})}}>
  <Icon name="library-books" size={25} color={COLORS.red}  />
<Text style={{top:7,color:COLORS.red,fontWeight:'bold',marginLeft:5 }}>Order History</Text>
  </TouchableOpacity>
  </View>


<View style={{margin:10}}>

<TextInput style={{...Styles.testInput,color:COLORS.black,fontWeight:'bold',backgroundColor:COLORS.gray}} editable={false} value={mobile} keyboardType={'numeric'} placeholder="Enter the Mobile"/>
<TextInput style={Styles.testInput} value={name}  onChangeText={(value)=>{setName(value)}} placeholder="Enter the Name" />
<TextInput style={Styles.testInput} value={email}  onChangeText={(value)=>{setEmail(value)}} placeholder="Enter the Email" />
     </View>

<View>
    {right_side()}
    {left_side()}
    {pd_adjustement()}
    </View>

    <View style={Styles.touchop_view}>
        <TouchableOpacity style={Styles.touchop} onPress={()=>{update_document()}}>
            <Text style={Styles.touchop_text}>
Update Details
            </Text>
        </TouchableOpacity>
    </View>
<View style={{marginTop:10}}></View>
    </ScrollView>
  )}
  export default CustomerDetails
