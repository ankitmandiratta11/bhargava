import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../Screens/constants/theme";
 const Styles = StyleSheet.create({

container :{
justifyContent:'center',
alignContent:'center',
alignItems:'center',

},
f_d_row:{
    flexDirection:'row'
},
LoginText:{
    marginTop:SIZES.width*0.50,
    color:COLORS.red,
    fontSize:25

},

flex1:{
    flex:1
},

testInput:{
    borderWidth:1,
    borderColor:COLORS.red,
    borderRadius:5,
    padding:5,
    marginTop:10

},
touchop_view:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:15
},
touchop:{
    backgroundColor:COLORS.red,
     justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:5,
},
touchop_text:{
    color:COLORS.white,
    padding:5,
    fontSize:15,

},
view_picker:{
    borderColor:COLORS.red,
    marginVertical:2,
    borderWidth:1,
    borderRadius:5,
    marginTop:10,
    padding:0

}
,

error1:{
color:COLORS.red
},


hp_1:{
color:COLORS.gray
},
//Home Page
headerView:{
    
flexDirection:'row',
backgroundColor:COLORS.red,
height:SIZES.height*.06,

},
header_image:{
height:SIZES.height*.06,
width:50,

} ,
header_text :{
fontSize:SIZES.h2,
alignSelf:'center',
color:COLORS.white,
marginHorizontal:25,
padding:5
},
hp_options_View:{
marginHorizontal:10,
marginVertical:10,

},
hp_options_to:{
    flexDirection:'row',
    backgroundColor:COLORS.lightGray,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:10,
    
},
hp_options_text:{

    color:COLORS.black,
    fontSize:SIZES.h2,
    padding:SIZES.base
  
},
hp_options_icon:{
    marginRight:0,
    color:COLORS.black
},

//dialog
dialog_button :{
    backgroundColor:COLORS.red,
    color:COLORS.white,marginRight:5
},


//Login Page


//Frame Page start
safeViewBelow:{
    margin:10,

}
,
headerTextProductView:{
    marginTop:10,
    flexDirection:'row'


},
headerTextProduct:{
fontSize:20,
color:COLORS.red,
alignSelf:'center',

},
twoColoumnView:{
    flexDirection:'row',
    marginTop:10
},
twoColoumnText:{
    borderColor:COLORS.red,
    marginRight:5,
    borderWidth:1,
    borderRadius:5,
    width:SIZES.width*.45
},
twoColoumnText2:{
    borderColor:COLORS.red,
     borderWidth:1,
    borderRadius:5,
    padding:5,
    width:SIZES.width*.48
},
//errors

errors:{
color:COLORS.green,
fontWeight:"bold",
justifyContent:'center',
alignSelf:'center'
},
//New Order Page
//sph_cyl_axis_va entry 
eye_pres_bg:{
    backgroundColor:COLORS.gray,
    borderRadius:10,
    marginBottom:10,
    borderColor:COLORS.black,
    borderWidth:1
},

//eye_pres_view :{},
//eye_pres_title:{},

eye_pres_text:{
    fontSize:20,
    color:COLORS.red
},

entry_view:{
    flexDirection:'row',
    justifyContent:'space-evenly'
},
entry_text_head:{
    fontSize:20,
    marginRight:20,
    fontWeight:'bold'
},
entry_text:{
    fontSize:16,
    marginRight:20
},
entry_textInput:{
    borderBottomWidth:2,
    borderBottomColor:COLORS.red,
},

//Visit Book
cust_flatList_text_name : {
        color:COLORS.white,
        fontSize:18,
        padding:5
},
cust_flatList_text_number : {
        color:COLORS.white,
        fontSize:18,
        marginLeft:10,
        padding:5

},
orderDetails:{
    color:COLORS.black,
    backgroundColor:COLORS.gray
}




})





export default Styles