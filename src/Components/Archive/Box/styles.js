import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
main:{
    display:'flex',
    flexDirection:'column',
    boxShadow:'0px 0px 1px 3px rgba(0,0,0,0.1)',
    boxSizing:'border-box',
    border:'1px solid rgba(0,0,0,0.1)',
    borderRadius:'5px',
    width:'100%',
    height:'auto',
    cursor:'pointer',
},
head_date_box:{
    display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      boxSizing:'border-box',
      minHeight:'max-content',
      borderTopRightRadius:'5px',
      borderTopLeftRadius:'5px'
      
} ,
header:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 boxSizing:'border-box',
 padding:'1vh 1vmax',
 color:'white',
 minWidth:'50%',
 width:'max-content',
 cursor:'pointer',
 backgroundColor:'#679ee0',
 color:'white',
 textAlign:'center',
 borderTopRightRadius:'5px'



},
date:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
padding:'1vh 1vmax',
boxSizing:'border-box',
minWidth: '25%',
width:'auto',
cursor:'pointer',
backgroundColor:'#12848c',
textAlign:'center',
color:'white',


},
type_service:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 width:'auto',
 minWidth:'25%',
 height:'max-content',
  textAlign:'center',
  color:'white',
  fontWeight:'normal',
  cursor:'pointer',
 
  boxSizing:'border-box',
  padding:'1vh 1vmax',
  backgroundColor:'#6585e6',
  borderTopLeftRadius:'5px'
},
body:{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  borderBottomLeftRadius:'5px',
  borderBottomRightRadius:'5px',
 
  boxSizing:'border-box',
  padding:'1vh 1vmax 3vmax 1vmax',
  background: 'rgb(222,141,234)' ,
background: 'linear-gradient(98deg, rgba(222,141,234,1) 1%, rgba(137,124,238,1) 65%, rgba(126,130,238,1) 100%)' 
},
music_info_box:{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  textAlign:'center',
  padding:'1vh 1vmax',
  boxSizing:'border-box',
  cursor:'pointer',
  width:'100%',
  height:'auto',
  color:'white',
  fontWeight:'normal'
,

},
music_main_info:{
  fontSize: '1.5vmax',
  color:'rgba(255,255,255,0.9)',
  margin:'1vh 0',
  transition:'0.1s color 0.1s text-shadow 0.1s font-size',
  '&:hover':{
   color:'white',
    textShadow: '0px 0px 4px rgba(0,0,0,0.4)',
    fontSize:'18px'
  }
},
add_info:{
  margin:'1vh 0',
  fontSize:'1.1vmax',
  color:'rgba(255,255,255,0.9)',
  transition:'0.1s color 0.1s text-shadow 0.1s font-size',

  '&:hover':{
   color:'white',
   textShadow: '0px 0px 4px rgba(0,0,0,0.4)',
   fontSize:'18px'
  }
 
},
struct_box:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
  columnGap:'1vmax',
  direction:'ltr'
  
},
buttons_box:{
display:'flex',
flexDirection:'column',
width:'50%',
alignItems:'flex-end',
rowGap:'20px',


},
btn:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 
 
 color:'white',
 fontWeight:'bolder',
 fontSize:'1.15vmax',
 justifyContent:'center',
 cursor:'pointer',
 columnGap:'20px',
 borderRadius:'5px',
 border:'1px solid rgba(0,0,0,0.4)',
 backgroundColor:'#a83275',
 padding:'1.5vh 4vmax',
 width:'18vmax',
 whiteSpace:'break-spaces',
 transition:'0.1s background-color',
 '&:hover':{
  backgroundColor:'  rgba(0,0,0,0.3)'
 },
 
 '& span':{
  display:'flex',
  flexDirection:'row',
  alignItems:'center'
 }

 
},
btn_arch:{
backgroundColor:'white',
color:'rgba(0,0,0,0.6)',
 transition:'0.1s background-color',
whiteSpace:'break-spaces',
'&:hover':{
  backgroundColor:'rgba(255,244,244)'
}
 
},
images_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
width:'50%',
marginLeft:'30px'
},
image_block:{
  display:'flex',
  flexDirection:'column',
  aspectRatio:'1/1',
  width:'50%',
  borderRadius:'7px',
  border:'1px solid rgba(0,0,0,0.4)',
  alignItems:'center',
  justifyContent:'center',
  transition:'0.1s transform',
  '&:hover':{
    transform: 'scale(1.1)'
  }

  },
  singer_img:{
   objectFit:'contain',
    width:'100%',
    height:'100%'
  }
 
})


export default useStyles;