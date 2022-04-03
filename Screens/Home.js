import { View, Text,Image,Button,TouchableOpacity,ScrollView } from 'react-native'
import React,{useContext, useState,useEffect} from 'react'
import appTheme, { COLORS } from './constants/theme'
import Styles from '../GlobalStyle/Styles';
import images from './constants/images';
import Iconn from '../Components/Iconn';
import Dialog from "react-native-dialog";
import Icon from 'react-native-vector-icons/AntDesign';
import Links from '../Components/Links';
import { AuthContext } from '../Components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../Components';

const Home = (props) => {
   const {navigation} = props
   
   const [userId,setUserID] = useState()
  useEffect(()=>{
  valuePut()
   }
,[])

const valuePut =async() =>{
  let ID = await AsyncStorage.getItem('userID')
  setUserID(JSON.parse(ID))

}


  const [new_edit,setNew_edit] = useState(false)
  const [new_stock,setNew_stock] = useState(false)
  const [lens_dialog,setLens_dialog]= useState(false)
  const [edit_dialog,setEditDialog] = useState(false)
  
  const {signOut} = useContext(AuthContext)
 
const New_edit_dialog =()=>{
   return (
      <View>
        <Dialog.Container visible={new_edit}>
          <Dialog.Title style={{color:COLORS.red,alignSelf:'center'}}>New or Edit  </Dialog.Title>
          <Dialog.Description>
        For adding new data click on "NEW"  and for changes click on "EDIT"
          </Dialog.Description>
          <Dialog.Button label="New Stock"  style={Styles.dialog_button} onPress={()=>{setNew_edit(false),setLens_dialog(false),setNew_stock(true)}}  />
          <Dialog.Button label="View Stock" style={Styles.dialog_button} onPress={()=>{setEditDialog(true),setNew_edit(false)}} />
          <Dialog.Button label="Cancel" style={Styles.dialog_button} onPress={()=>setNew_edit(false)}/>
        </Dialog.Container>
      </View>
    );
    }



    const New_stock_dialog =()=>{
      return (
         <View>
           <Dialog.Container visible={new_stock}>
             <Dialog.Title style={{color:COLORS.red,alignSelf:'center'}}>Add New Stock   </Dialog.Title>
             <Dialog.Description style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
             <Dialog.Button label="Frame"  style={Styles.dialog_button}  onPress={()=>{setNew_stock(false),navigation.navigate("new_frame")}} />
             <Dialog.Button label="Lens" style={Styles.dialog_button} onPress={()=>{setLens_dialog(true),setNew_stock(false)}}/>
             <Dialog.Button label="Cancel" style={Styles.dialog_button} onPress={()=>{setNew_stock(false),setNew_edit(true)}}/>
           </Dialog.Description>
           </Dialog.Container>
         </View>
       );
       }
   
//Lens Stock

const edit_view =()=>{
return(
  <View>
    <Dialog.Container visible={edit_dialog}>
    <Dialog.Title style={{color:COLORS.red,alignSelf:'center'}}>Edit/View  Stock   </Dialog.Title>
             <Dialog.Description style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
             <Dialog.Button label="Frame"  style={Styles.dialog_button}  onPress={()=>{setEditDialog(false),navigation.navigate("frame_stock")}} />
             <Dialog.Button label="Lens" style={Styles.dialog_button} onPress={()=>{setEditDialog(false),navigation.navigate('lens_stock')}}/>
             <Dialog.Button label="Cancel" style={Styles.dialog_button} onPress={()=>{setEditDialog(false)}}/>
           </Dialog.Description>
      </Dialog.Container> 
  </View>
)}
const Lens_dialog =()=>{
  return (
     <View>
       <Dialog.Container visible={lens_dialog}>
         <Dialog.Title style={{color:COLORS.red,alignSelf:'center'}}>Select Lens   </Dialog.Title>

         <View style={{flexDirection:'column'}}>
           <View style={{flexDirection:'row',margin:10}}>
         <Dialog.Button label="SINGLE VISION "  style={Styles.dialog_button} onPress={()=>{navigation.navigate('single_vision')}}  />
         <Dialog.Button label="BIFOCAL LENS" style={Styles.dialog_button} onPress={()=>{navigation.navigate('bifocal')}}/>
         </View>
        <View style={{flexDirection:'row',margin:10}} >
         <Dialog.Button label="CONTACT LENS" style={Styles.dialog_button} onPress={()=>{navigation.navigate('contact_lens')}} />
         <Dialog.Button label="PROGRESSIVE" style={Styles.dialog_button} onPress={()=>{navigation.navigate('progressive')}} />
         </View>
         <View style={{flexDirection:'row',margin:10,justifyContent:'center'}} >
         <Dialog.Button label="CANCEL" style={Styles.dialog_button} onPress={()=>{setLens_dialog(false)}}/>

         </View>
         </View>

       
       </Dialog.Container>

     </View>
   );
   }

  //main function
  return (
    <ScrollView>
      <Header title="Home Page" />
      {/* header View Logo and name */}
      
{New_edit_dialog()}
{New_stock_dialog()}
{Lens_dialog()}
{edit_view()}
{/* New Order */}

        
  <View style={{marginTop:10}}></View>
  <Links title="New Order" onPress={()=>navigation.navigate("new_order")} ion={"2"} name="pluscircle" />
  <Links title="All Orders" onPress={()=>navigation.navigate("pending_order")} ion={"1"} name="reorder-three-sharp" />
  <Links title="Pending Payment" onPress={()=>{navigation.navigate("pending_payment")}} ion={"2"} name="warning"/>
  <Links title="Stock" onPress={()=>setNew_edit(true)} ion={2} name={"shoppingcart"} />
  <Links title="Search " onPress={()=>{navigation.navigate("reports")}} ion={2} name={"search1"} />
  <Links title="Customers" onPress={()=>{navigation.navigate("visit_book")}} ion={1} name={"people"} />
    <Links title="Order Lens" onPress={()=>{navigation.navigate("order_lens")}}  />
  <Links title="Data Management" onPress={()=>{navigation.navigate("data_management")}}  />
  <Links title="Sign Out" onPress={()=>{signOut()}} ion={2} name={"logout"} />

  {/* <Links title="Trial" onPress={()=>{navigation.navigate("trial")}}  /> */}
    </ScrollView>
  )}

export default Home