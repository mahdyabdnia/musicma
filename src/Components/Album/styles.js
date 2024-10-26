import { makeStyles } from "@mui/styles";
import { back1, blue1, blue2, blue3, darkPink, darkRed } from "../Consts/colors";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    
    width:'100%',
    rowGap:'20px'

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
    '@media(min-width:320px)':{
        '@media(max-width:720px)':{
            display:'flex',
            flexDirection:'column'
        }
    }
  

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
},
'@media(min-width:320px)':{
    '@media(max-width:720px)':{
        width:'60%'
    }
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
    alignItems:'center',
    justifyContent:'flex-start',
    rowGap:'20px',
    borderRadius:'6px',
    border:'1px solid rgba(0,0,0,0.3)',
    padding:'2vh 1vmax',
    boxSizing:'border-box',
        background: 'rgb(48,80,202)', 
background: 'linear-gradient(98deg, rgba(48,80,202,1) 0%, rgba(143,69,223,1) 46%, rgba(71,60,228,1) 100%)',
textAlign:'center',
color:'black',
minHeight:'100px',
width:'100%'

},
send_comment_box:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    color:'black',
    padding:'1vh 1vmax',
    boxSizing:'border-box',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)',
    minHeight:'50px',
    width:'100%',
    borderRadius:'5px',
    rowGap:'30px'
},
comment_header:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    boxSizing:'border-box',
    color:'rgba(0,0,0,0.6)',
    fontSize:'20px',
    fontWeight:'bolder',
    columnGap:'10px'
},
hr:{
    height:'5px',
    color:'rgba(0,0,0,0.5)',
    backgroundColor:'rgba(0,0,0,0.6)',
    width:'100%',
    boxSizing:'border-box',
    fontSize:'20px',
    fontWeight:'bolder',
},
sender_info_box:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    columnGap: '20px',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box',
    color:'black',
    padding:'1vh 1vmax',
    '@media(min-width:320px)':{
        '@media(max-width:620px)':{
            gridTemplateColumns:'1fr',
            rowGap:'10px'
        }
    }

},
info_input_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
columnGap:'10px',
borderRadius:'5px',
 
 
width:'100%',
height:'50px',
padding:'1vh 1vmax',
backgroundColor:'whtie',
boxSizing:'border-box',
border:'1px solid rgba(0,0,0,0.4)'

},
info_icon:{
display:'flex',
alignItems:'center',
justifyContent:'center',
color:'rgba(0,0,0,0.5)'
},
info_input:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 border:'none',
 outline:'none',
 height:'100%',
backgroundColor:'white',
boxSizing:'border-box',
fontSize:'18px',
color:'black',  
 '&:focus':{
    outline:'none',
    border:'none'
 }
 
},
comment_text_box:{
display:'flex',
flexDirection:'column',
justifyContent:'space-between',
rowGap:'10px',
boxSizing:'border-box',
width:'100%',
height:'auto',
padding:'1vh 1vmax'




},
comment_text:{
    resize:'none',
   
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'justify',
    border:'1px solid rgba(0,0,0,0.5)',
    boxSizing:'border-box',
    
    width:'100%',
    padding:'1vh 1vmax',
    fontSize:'18px',
    fontWeight:'bolder',
    color:'rgba(0,0,0,0.7)',
    borderRadius:'6px',

},
comment_send_btn:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 border:'1px solid rgba(0,0,0,0.6)',
 borderRadius:'5px',
 color:'black',
 backgroundColor:'#456356',
 boxSizing:'border-box',
 padding:'2vh 1vmax',
 width:'max-content',
 justifySelf:'left',
 color:'white'
},
comments_show_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    backgroundColor:'inherit',
    padding:'1vh 1vmax',
    justifyContent:'space-between',
    rowGap:'14px',
    width:'100%',
    height:'auto'

},
comments_list:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
    rowGap:'10px',
    margin:'0px',
    padding:'0px',
    boxSizing:'border-box',
    width:'100%',
    height:'auto',
    backgroundColor:'inherit',
    alignItems:'center',
    justifyContent:'space-between'
},
comment_list_item:{
    display:'grid',
    flexDirection:'row',
    alignItems:'center',
    gridTemplateColumns:'1.5fr 1fr 12fr',
    
    width:'100%',
    backgroundColor:'whtie',
    color:'black',
    border:'1px solid rgba(0,0,0,0.5)',
    borderRadius:'3px',
    padding:'1vh 1vmax',
    boxSizing:'border-box',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)',
    backgroundColor:'white',
    textAlign:'right',
     
},
comment:{
    whiteSpace:'break-spaces',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    fontSize:'18.5px'

},
sender_name:{
    color:'rgba(0,0,0,0.7)',
    fontSize:'16px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    color:'rgba(0,0,0,0.9)',
    columnGap:'10px',
    '& svg':{
        color:'rgba(0,0,0,0.6)'
    }
},
col:{
    width:'2px',
    margin:'0px 10px',
    color:'black',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.7)'
}

})


export default useStyles;