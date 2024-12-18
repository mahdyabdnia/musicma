import { makeStyles } from "@mui/styles";
import { back1, back2, blue1, blue2, blue3, darkBlue, darkestBlue, darkPink, darkRed, darkRedT, darkwarmblue } from "../Consts/colors";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    border:'1px solid rgba(0,0,0,0.3)',
    borderRadius:'5px ',
    boxShadow:'0px 0px 4px 2px rgba(0,0,0,0.6)', 
    color:'black',
    width:'100%',
    whiteSpace:'break-spaces',
    fontSize:'18px',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'flex-start',
    minHeight:'100px',
    transition:'0.1s box-shadow',
    '&:hover':{
        boxShadow:'0px 0px 7px 4px rgba(0,0,0,0.7)'
    }


},
head_info_box:{
    display:'flex',
     alignItems:'stretch',
    boxSizing:'border-box',
    
    justifyContent:'center',
    columnGap:'0px',
    width:'100%',
    minHeight:'max-content',
    whiteSpace:'break-spaces',
    textAlign:'center',
    '@media(min-width:320px)':{
        '@media(max-width:720px)':{
            flexDirection:'column'
        }
    },
    

},
col:{
flex:'1',
minHeight:'max-content',
padding:'2vh 1vmax !important',
cursor:'pointer'
},
head_one:{
backgroundColor:blue1,
color:'white',
boxSizing:'border-box',
padding:'1vh 1vmax',
whiteSpace:'break-spaces',
display:'flex',
flexDirection:'row',
alignItems:'center',
lineHeight:'1.5',
flex:'2',
justifyContent:'center',
textAlign:'center',
fontWeight:'600',
gridColumn:'span 2',
 
fontSize:'17px',
transition:'0.1s text-shadow',
'&:hover':{
    textShadow:'0px 0px 3px rgba(0,0,0,0.7)'
}
},
head_two:{
backgroundColor:blue2,
color:'white',
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
padding:'1vh 1vmax',
boxSizing:'border-box',
fontSize:'16px',
color:'white',
fontWeight:'600',
whiteSpace:'break-spaces',
lineHeight:'1.5',
textAlign:'center',
transition:'0.1s text-shadow',
gridColumn:'span 2',
flex:'1',

'&:hover':{
    textShadow:'0px 0px 3px rgba(0,0,0,0.7)'
}

},
head_the:{
backgroundColor:blue3,
textAlign:'center',
whiteSpace:'break-spaces',
lineHeight:'1.5',
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border',
fontSize:'16px',
color:'white',
padding:'1vh 1vmax',
fontWeight:'600',
transition:'0.1s text-shadow',
gridColumn:'span 2',
flex:'1',
'&:hover':{
    textShadow:'0px 0px 3px rgba(0,0,0,0.7)'
}



},
body:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    padding:'3vh 1vmax',
    alignItems:'center',
    justifyContent:'flex-start',
    background :back1,
    background:back2,
    color:'white',
    fontSize:'20px',
    whiteSpace:'break-spaces',
    lineHeight:'1.5',
    width:'100%',
    textAlign:'center'

},
body_info_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    rowGap:'10px',
    textAlign:'center',
    color:'white',
    fontWeight:'500',
    fontSize:'17px',
    width:'100%',
    whiteSpace:'break-spaces',
    textShadow:'0px 0px 4px rgba(0,0,0,0.5)'
},
info_header:{
    display:'flex',
    flexDirection:'row',
     
    margin:'0px',
    textAlign:'center',
    fontSize:'20px !important',
    color:'white',
    cursor:'pointer',
    boxSizing:'border-box',
    '&:hover':{
        textShadow:'0px 0px 2px rgba(0,0,0,0.6)',
        color:'rgba(0,0,0)'
    }
    
   
     
    
    

},
tools_box:{
    display:'flex',
    
    alignItems:'center',
    justifyContent:'center',
    columnGap:'20px',
    boxSizing:'border-box',
    width:'100%',
    padding:'1vh 1vmax',
    justifySelf:'center',
    alignSelf:'center',
    '@media(min-width:320px)':{
        '@media(max-width:720px)':{
            flexDirection:'column',
            rowGap:'20px',
           
        }
    },
    '@media (orientation: landscape)':{
       '@media(min-width:320px)':{
        '@media(max-width:900px)':{
            flexDirection:'column',
            rowGap:'20px'
        }
    },
    }

},
sing_img_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'left',
  
    boxSizing:'border-box',
    width:'50%',
    '@media (orientation: landscape)':{
        
    }

},
img_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    cursor:'pointer',
    borderRadius:'5px',
    boxShadow:'0px 0px 4px 2px rgba(0,0,0,0.5)',
    width:'150px',
    aspectRatio:'1/1',
    '&:hover':{
    boxShadow:'0px 0px 7px 3px rgba(0,0,0,0.4)' 
    },
    '& img':{
        objectFit: 'contain'
    },
    '@media(min-width:320px)':{
        '@media(max-width:620px)':{
            width:'200px'
        }
    }
},

tool_btn_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    rowGap:'10px',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    width:'50%',
    '@media(min-width:320px)':{
        '@media(max-width:620px)':{
            width:'100%',
            
        }
    },
    '@media (orientation: landscape)':{
        '@media(min-width:320px)':{
            '@media(max-width:900px)':{
                width:'100%',
                
            }
        },
    }
},
btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:'5px',
    boxSizing:'border-box',
    padding:'1vh 3vmax',
    border:'1px solid rgba(0,0,0,0.5)',
    justifyContent:'center',
    columnGap:'20px',
    color:'white',
    fontSize:'19px',
    textShadow:'0px 0px 1px rgba(0,0,0,0.7)',
     
    whiteSpace:'break-spaces',
    width:'min-content',
     boxShadow:'0px 0px 3px 1px rgba(0,0,0,0.7)',
    minWidth:'20vmax',
    '&:hover':{
        boxShadow:'0px 0px 7px 3px rgba(0,0,0,0.7)',
        color:'rgba(244,232,234)'
    },
    '@media(min-width:320px)':{
        '@media(max-width:620px)':{
            width:'100% !important'
        }
    },
    '@media (orientation: landscape)':{
        width:'50%'
    }
    



},
arch_btn:{
backgroundColor:darkPink,
'&:hover':{
    backgroundColor:'#b0435e'
}
},
dl_btn:{
backgroundColor:darkBlue,
'&:hover':{
    backgroundColor:darkwarmblue
}
},
pl_btn:{
backgroundColor:darkestBlue,
'&:hover':{
    backgroundColor:darkwarmblue
}
}
})


export default useStyles;