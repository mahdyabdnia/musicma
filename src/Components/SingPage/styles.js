import { hexToRgb } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
display:'flex',
flexDirection:'column',
rowGap:'20px',
 
boxSizing: 'border-box'
},    
main:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'3px',
   
    boxSizing:'border-box',
     boxShadow:'0px 0px 1px 4px rgba(0,0,0,0.3)',
    minHeight:'100px',
    
  
    

},
header:{
    display:'flex',
    flexDirection:'row',
    boxSizing:'border-box',
    justifyContent:'space-between',
    color:'white',
    fontWeight:'bolder'

},
header_left_side:{
    display:'flex',
    flexDirection:'row',
     boxSizing: 'border-box',
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
   
    borderTopRightRadius:'5px'
},
date_box:{
backgroundColor:'#2279a8',
width:'50%',
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border-box',
padding:'10px'
},
type_music:{
backgroundColor:'#5c91ad',
width:'50%',
borderTopLeftRadius:'5px',
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border-box',
padding:'10px'
},
body:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',

    background: 'rgb(154,171,241)',
    background: 'linear-gradient(98deg, rgba(154,171,241,1) 1%, rgba(202,234,250,1) 75%, rgba(176,180,240,1) 100%)',
      paddingBottom:'3vh',
      boxSizing:'border-box',
       
},
title:{
    textAlign:'center',
    fontSize:'20px',
    color:'rgba(0,0,0,0.6)',
    boxSizing:'border-box'
},
singer_mix:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'center',
    columnGap:'20px',
    columnCount:'3',
    color:'rgba(0,0,0,0.6)',
    boxSizing:'border-box'
},
sec_title:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    color:'white',
    fontSize:'19px',
    margin:'0',
    boxSizing:'border-box'
},
title_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border-box',
padding:'5px 3vw',
backgroundColor:'#7792ba',
color:'white',
borderRadius:'5px',
margin:'20px 0px',
width:'100%',
boxSizing:'border-box'
},
section:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    columnGap:'30px',
    boxSizing:'border-box'
},
section_img:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    aspectRatio:'1/1',
    width:'300px',
    border:'1px solid rgba(0,0,0,0.7)',
    borderRadius:'5px',
    height:'max-content',
    justifySelf:'center',
    alignSelf:'center',
    marginBottom:'20px',
    boxSizing:'border-box'
    
},

img:{
objectFit:'cover',
aspectRatio:'1/1',
width:'100%',
boxSizing:'border-box'
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
    maxWidth:'300px',
    minWidth:'300px',
    
    backgroundColor:'#0b80b3',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    columnGap:'20px',

    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        boxSizing:'border-box',
        '& svg':{
            fontSize:'30px !important'
        }

    }

},
eng_title:{
    fontSize:'18px',
    color:'rgba(0,0,0,0.5)',
    boxSizing:'border-box'
},
dwn_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box'
},
btn_btn:{
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box'
},
sing_text:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:'10px',
    boxSizing:'border-box',

    '& span':{
        display:'flex',
        alignItems:'center',
        boxSizing:'border-box',
        '& img':{
            height:'20px',
            width:'50px',
            opacity:'0.4'
        }
    }
},
sing_text_box:{
    display:'flex',
    flexDirection:'column',
    color:'rgba(0,0,0,0.5)',
    fontSize:'20px',
    textAlign:'center',
    boxSizing:'border-box'
},
banner:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    fontSize:'40px',
    '& img':{
        opacity:'0.4',
        height:'50%'
    }
},
other_song_box:{
    display:'grid',
    gridTemplateColumns:'auto auto',
    columnGap:'20px',
    rowGap:'20px',
    boxSizing:'border-box'
},
other_song:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:'5px',
    boxSizing:'border-box',
   
    
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.3)',
    backgroundColor:'#6586b8',
    color:'white',
    columnGap:'20px'
},
avatar:{
    width: 'fit-parent',
    objectFit:'cover', 
    width:'80px',
    height:'80px',
    boxSizing:'border-box'
}


})

export default useStyles;