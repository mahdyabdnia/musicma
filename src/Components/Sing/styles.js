import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    rowGap:'20px',
    boxSizing:'border-box',
},
main:{
    boxShadow:'0px 0px 1px 2px rgba(0,0,0,0.2)',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    borderRadius:'5px',
    width:'100%',
    minHeight:'112px'
    
},
header:{
    display:'grid',
    gridTemplateColumns:'2fr 1fr 1fr',
    flexDirection:'row',
    direction:'rtl',
    alignItems:'center',
    width:'100%',
    boxSizing:'border-box',
     
},
header_name:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    whiteSpace:'break-spaces',
    color:'white',
    fontSize:'18px',
    backgroundColor:'red'

},
header_date_inf0:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
     boxSizing:'border-box',
     padding:'1vh 1vmax',
     whiteSpace:'break-spaces',
     fontWeight:'bolder',
     fontSize:'18px',
     color:'white',
     backgroundColor:'blue'
},
header_up_type:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
     boxSizing:'border-box',
     padding:'1vh 1vmax',
     fontSize:'18px',
     color:'white',
     fontWeight:'bolder',
     backgroundColor:'green'

},
body:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    rowGap:'20px',
    boxSizing:'border-box',
    padding:'2vh 1vmax',
    color:'rgba(0,0,0,0.5)',
    width:'100%',
    background: 'rgb(131,175,235)', 
background: 'linear-gradient(98deg, rgba(131,175,235,1) 0%, rgba(143,139,236,1) 48%, rgba(62,138,249,1) 100%)'


},
info_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    textAlign:'center',
    boxSizing:'border-box',
    justifyContent:'center',
    width:'100%',
    rowGap:'17px'
},
info_title:{
    textAlign:'center',
    fontSize:'20px',
    color:'rgba(255,233,255)',
    fontWeight:'lighter',
    transition:'0.1 text-shadow',
    '&:hover':{
        textShadow: '0px 0px 3px rgba(255,233,255)'
    }
},
info_add:{
    display:'flex',
    flexDirection:'row',
    textAlign:'center',
    boxSizing:'border-box',
    color:'rgba(233,242,244,0.8 )',
    textAlign:'center',
    fontWeight:'lighter',
    fontSize:'18px',
    transition:'0.1 text-shadow',
    '&:hover':{
        textShadow: '0px 0px 3px rgba(255,233,255)'
    }
},
image_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    width:'100%'
},
img_block:{
    display:'flex',
    width:'33%',
    aspectRatio:'1/1',
    border:'2px solid rgba(0,0,0,0.3)',
    borderRadius:'5px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
     alignSelf:'center',
     justifySelf:'center',
     transition:'0.1s box-shadow',
     '&:hover':{
     boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)'
     }
},
img:{
    objectFit:'contain',
    width:'100%',
    height:'100%',

},
btn_box:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    rowGap:'15px',
    boxSizing:'border-box',
    fontSize:'20px',
    fontWeight:'normal'
},
btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    border:'1px solid rgba(0,0,0,0.3)',
    color:'white',
    borderRadius:'7px',
    minWidth:'min-content',
    width:'30vmax',
    minHeight:'max-content',
    backgroundColor:'green',
    padding:'1.5vh 5vmax',
    columnGap:'1vmax',
    boxSizing:'border-box',
    justifyContent:'center',
    '&:hover':{
        boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)'
    }
    


},
sing_text_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    rowGap:'20px',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    margin:'1vh 0px',
    width:'100%',

},
text_box_header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    color:'rgba(255,255,255,0.7)',
    fontSize:'20px'
},
text_box:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    fontSize:'20px',
    textAlign:'center',
    color:'white',
    lineHeight:'1.5',
    justifySelf:'center'


},
text:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'rgba(255,255,255,0.7)',
    fontSize:'20px',
    fontWeight:'normal',
    lineHeight:'1.5',
    whiteSpace:'break-spaces',
    fontWeight:'bolder',
    '&:hover':{
        color:'white'
    }
},
sug_box:{
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'flex-start',
rowGap:'20px',
boxSizing:'border-box',
padding:'1vh 1vmax',
width:'100%',
},
sug_head:{
 fontSize:'20px',
 textAlign:'center',
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 color:'rgba(0,0,0,0.8)',
 fontWeight:'bolder',

},
sug_body:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
width:'100%',
boxSizing:'border-box'


},
sug_list:{
 display:'grid',
 gridTemplateColumns:'1fr 1fr',
 alignItems:'center',
 justifyContent:'space-between',
 columnGap:'10px',
 rowGap:'10px',
 width:'100%',
 boxSizing:'border-box',
 listStyleType:'none',
 
},
sug_list_item:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-between',
 borderRadius:'6px',
 border:'1px solid rgba(0,0,0,0.4)',
 boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)',
 cursor:'pointer',
 boxSizing:'border-box',
 
 width:'100%',
 backgroundColor:'rgba(255,222,246,0.5)',
 fontSize:'20px',
 color:'rgba(0,0,0,0.5)',
 fontWeight:'bolder',
 '&:hover':{
    boxShadow:'0px 0px 1px 2px rgba(0,0,0,0.7)',

 }

},
sug_img_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    aspectRatio:'1/1',
    borderRadius:'0px 0px 6px 6px',
 
    width:'20%'
},
sug_img:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    height:'100%',
    aspectRatio:'1/1',
    borderRadius:'6px',
    objectFit:'contain',
},
sug_item_desc:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'80%',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
 
    justifyContent:'center',
    textAlign:'justify'

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

},
info_input_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
columnGap:'10px',
borderRadius:'5px',
border:'1px solid rbga(0,0,0,0.5)',
boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)',
width:'100%',
height:'50px',
padding:'1vh 1vmax',
backgroundColor:'whtie',
boxSizing:'border-box'

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
    cursor:'pointer',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'justify',
    border:'1px solid rgba(0,0,0,0.5)',
    boxSizing:'border-box',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.5)',
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