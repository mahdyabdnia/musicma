import { makeStyles } from "@mui/styles";
import { back1, blue1, blue2, blue3, darkPink, darkRed } from "../Consts/colors";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    
    width:'100%',

},
main:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    width:'100%',
    border:'1px solid rgba(0,0,0,0.3)',
    
},
header_info:{
    display:'grid',
    gridTemplateColumns:'2fr 1fr 1fr',
    borderRadius:'5px',
    width:'100%',
    alignItems:'stretch',
  

},
info_one:{
    color:'white',
    backgroundColor:blue1,
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white'

},
info_two:{
    color:'white',
    backgroundColor:blue2,
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    color:'whtie',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white'

},
info_the:{
    color:'white',
    backgroundColor:blue3,
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white'
},
body:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:back1,
    width:'100%',
    boxSizing:'border-box',
    padding:'2vh 1vmax'
    

},
info_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    color:'white',
    boxSizing:'border-box',
    textAlign:'center',
    fontWeight:'500',
    textShadow:'0px 0px 2px rgba(0,0,0,0.5)',
    rowGap:'10px'


},
info_title:{
    fontSize:'20px',
    color:'white',
    fontWeight:'thick',
    textShadow:'0px 0px 4px rgba(0,0,0,0.5)'
},
info_sec_title:{
    fontSize:'18px',
    color:'white',
    fontWeight:'thick',
    textShadow:'0px 0px 4px rgba(0,0,0,0.5)'
},
image_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
padding:'1vh 1vmax',
boxSizing:'border-box',
width:'100%',
marginTop:'4vh'

},
img_card:{
boxSizing:'border-box',
borderRadius:'7px',
border:'1px solid rgba(0,0,0,0.6)',
boxShadow:'0px 0px 7px 3px rgba(0,0,0,0.5)',
width:'30%',
aspectRatio:'1/1',
transition:'0.1s transform',
'&:hover':{
transform: 'scale(1.1)'
}


},img:{
objectFit:'contain'
},
music_box:{
    display:'flex',
    flexDirection:'column',
    marginTop:'3vh',
    alignItems:'center',
    justifyContent:'flex-start',
    boxSizing:'border-box',
    width:'100%',

},
music_box_body:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    boxSizing:'border-box',
    width:'100%',
    marginTop:'2vh',
    marginBottom:'2vh'

},
music_list:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
    width:'100%',
    margin:'0px',
    padding:'0px',
    boxSizing:'border-box',
    rowGap:'20px'
},
music_list_item:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    width:'100%',
    padding:'1vh 1vmax',
    cursor:'pointer',
    alignItems:'center',
    justifyContent:'flex-start',
    rowGap:'10px',

},
music_divider:{
    border:'none',
    width:'70%',
    height:'3px',
    backgroundColor:'rgba(0,0,0,0.3)',
    justifySelf:'center',
    margin:'auto'
},
music_dl:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    borderRadius:'5px',
    backgroundColor:'transparent',
    color:darkPink,
    border:`3px solid ${darkPink}`,
    boxSizing:'border-box',
    padding:'1vh 5vmax',
    fontWeight:'bolder',
    fontSize:'20px',

    '&:hover':{
        backgroundColor:darkPink,
        color:'white',
        border:'3px solid transparent',
        boxSizing:'border-box'
    }


},
music_name:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    fontWeight:'bolder',
    fontSize:'20px',
    color:'rgba(254,250,247)',
    textShadow:'0px 0px 4px rgba(0,0,0,0.5)'

},
music_page_link:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    color:darkRed,
    fontSize:'20px',
    fontWeight:'bolder',
    padding:'1vh 5vmax',
    borderRadius:'5px',
    boxSizing:'border-box',
    '&:hover':{
        color:'white',
        border:`2px solid ${darkRed}`,
        backgroundColor:darkRed


    }
},
comment_box:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:blue3,
    boxSizing:'border-box',
    width:'100%',
    borderRadius:'5px',
    alignItems:'center',
    padding:'1.5vh 1vmax',
    marginTop:'20px'
},
comment_box_body:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.5)',
    backgroundColor:'white',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    width:'100%'

},
comment_header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    columnGap:'20px',

},
hr:{
    height:'1px',
    border:'none',
    backgroundColor:'rgba(0,0,0,0.5)',
    width:'100%'
},
head:{
    fontWeight:'bolder',
    fontSize:'20px',
    color:'rgba(0,0,0,0.5)',
    textAlign:'center',
    width:'100%'
},
comment_main_box:{
    display:'flex',
    flexDirection:'column',
    rowGap:'20px',
    boxSizing:'border-box',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'auto',
    rowGap:'20px'


},
user_email_box:{
   display:'grid',
   alignItems:'center',
    gridTemplateColumns:'1fr 1fr',
    justifyContent:'space-between',
   columnGap:'20px',
   boxSizing:'border-box',
   padding:'1vh 1vmax',


},
user_input_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    border:'1px solid rgba(0,0,0,0.50)',
    borderRadius:'5px',
    '&:focus':{
    border:'1px solid rgba(0,0,0,0.9)'
}

},
user_input:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    border:'none',
    outline:'none',
    width:'100%',
    height:'100%',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    cursor:'pointer',
    fontSize:'18px',
    color:'rgba(0,0,0,0.7)',
    fontWeight:'bolder',

},
email_input_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
borderRadius:'5px',
boxSizing:'border-box',
border:'1px solid rgba(0,0,0,0.6)',
padding:'1vh 1vmax',
borderRadius:'5px',
'&:focus':{
    border:'1px solid rgba(0,0,0,0.9)'
}


},
email_input:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
boxSizing:'border-box',
padding:'1vh 1vmax',
border:'none',
outline:'none',
fontSize:'18px',
color:'rgba(0,0,0,0.6)',
fontWeight:'bolder',
width:'100%',
height:'100%',
 cursor:'pointer'
},
text_send_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    width:'100%',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    rowGap:'20px'
    
},
comment_text:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'justify',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.6)',
    fontSize:'18px',
    width:'100%',
    height:'100px',
    color:'rgba(0,0,0,0.6)',
    fontWeight:'bolder',
    cursor:'pointer',
    resize:'none',
    padding:'1vh 1vmax',
    



    '&:focus':{
        boxShadow:'0px 0px 4px 1px rgba(0,0,0,0.6)'
    }
},
set_comment:{
    color:'white',
    backgroundColor:blue3,
    borderRadius:'5px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
     fontWeight:'bolrder',
    padding:'1vh 1vmax',
    fontSize:'20px',
    textShadow:'0px 0px 1px rgba(0,0,0,0.5)'
},
comments_block_box:{
    display:'flex',
    flexDirection:'column',
    marginTop:'20px',
    rowGap:'20px',
    backgroundColor:'inherit',
    width:'100%',
    boxSizing:'border-box',
    alignItems:'center',
    justifyContent:'flex-start',
    height:'auto'

},
comment_block:{
   display:'grid',
   gridTemplateColumns:'5%  10% 2% 83%',
    alignItems:'center',
    justifyContent:'flex-start',
    border:'1px solid rgba(0,0,0,0.6)',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.6)',
    boxSizing: 'border-box',
    padding:'1vh 1vmax',
    width:'100%',
    height:'auto',
    color:'black',
    fontSize:'17px',
    fontWeight:'500',
    whiteSpace:'break-spaces',
    borderRadius:'5px'

},
ver_divider:{
    display:'flex',
    flexDirection:'row',
    width:'0.5px',
    height:'20px',
    backgroundColor:'rgba(0,0,0,0.6)',
},
sd_comment:{
   color:'rgba(0,0,0,0.8)',
   textAlign:'center',
   fontSize:'17px',
   whiteSpace:'break-spaces',
   

}

})


export default useStyles;