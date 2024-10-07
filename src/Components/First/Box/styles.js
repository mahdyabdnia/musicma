import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
main:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'5px',
    
    boxSizing:'border-box',
     boxShadow:'0px 0px 1px 4px rgba(0,0,0,0.3)',
    minHeight:'100px',
    width:'100%',
    '@media(max-width:1224px)':{
        width:'100%',
       
        boxSizing:'border-box'
    }
  
    

},
header:{
    display:'flex',
    flexDirection:'row',
    
    justifyContent:'space-between',
    color:'white',
    fontWeight:'bolder',

    '@media(max-width:500px)':{
        display:'none'
    }

},
header_left_side:{
    display:'flex',
    flexDirection:'row',
  
    justifyContent:'space-between',
    width:'50%'
},
header_right_side:{
    display:'flex',
    flexDirection:'row',
    width:'50%',
    border:'1px solid rgba(0,0,0,0.4)',
    backgroundColor:'#195778',
    color:'white',
    boxSizing:'border-box',
 alignItems:'center',
 justifyContent:'center',
    padding:'1vh 1vw',
    borderTopRightRadius:'5px'
},
date_box:{
backgroundColor:'#2279a8',
width:'50%',
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center'
},
type_music:{
backgroundColor:'#5c91ad',
width:'50%',
borderTopLeftRadius:'5px',
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center'
},
body:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    background: 'rgb(126,172,231)',
    background: 'linear-gradient(90deg, rgba(126,172,231,1) 1%, rgba(155,188,230,1) 50%, rgba(80,115,158,1) 94%)',
      paddingBottom:'3vh',
      boxSizing:'border-box',
      padding:'1vh 1vw',
      '@media(max-width:1224px)':{
        padding:'1vh 2vmax'
      }
},
title:{
    textAlign:'center',
    fontSize:'20px',
    color:'rgba(0,0,0,0.6)',
    '@media(max-width:1224px)':{
        fontSize:'5vw'
    }
},
singer_mix:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'center',
    columnGap:'20px',
    columnCount:'3',
    color:'rgba(0,0,0,0.6)'
},
sec_title:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    color:'rgba(0,0,0,0.5)',
    fontSize:'19px',
},
section:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    columnGap:'30px',
    boxSizing:'border-box',
    '@media(max-width:1224px)':{
        columnGap:'3vw',
        padding:'1vh 6vw'
    }
},
section_img:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    aspectRatio:'1/1',
    width:'150px',
    border:'1px solid rgba(0,0,0,0.7)',
    borderRadius:'5px',
    height:'max-content',
    justifySelf:'center',
    alignSelf:'center',
    '@media(max-width:1224px)':{
        
    }

    
},
section_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
   rowGap:'10px',
   justifyContent:'center',
   boxSizing:'border-box'
    
},
btn:{
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'5px ',
    border:'1px solid rgba(0,0,0,0.5)',
    boxSizing:'border-box',
    padding:'2vh 2vw',
    fontWeight:'bolder',
    width:'300px',
    backgroundColor:'#0b80b3',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    columnGap:'20px',
    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        '& svg':{
            fontSize:'30px !important'
        }

    },
    '@media(max-width:1224px)':{
         fontSize:'5vw',
         columnGap:'2vw',
         width: 'auto',
         minWidth:'max-content',
         fontWeight:'normal',
         boxSizing:'border-box',
         padding:'1vh 2vmax'
    }

},
btnB:{
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'5px ',
    border:'1px solid rgba(0,0,0,0.5)',
    boxSizing:'border-box',
    padding:'2vh 2vw',
    fontWeight:'bolder',
    width:'300px',
    backgroundColor:'#9c166a',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    columnGap:'20px',
    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        '& svg':{
            fontSize:'30px !important'
        }

    },
    '@media(max-width:1224px)':{
         fontSize:'5vw',
         columnGap:'2vw',
         width: 'auto',
         minWidth:'min-content',
         fontWeight:'normal',
         boxSizing:'border-box',
         padding:'1vh 2vmax'
    }

},
eng_title:{
    fontSize:'18px',
    color:'rgba(0,0,0,0.5)',
    textAlign:'center'
}


})

export default useStyles;