import { makeStyles } from "@mui/styles";
import { blue1, blue2 } from "../Consts/colors";

const useStyles=makeStyles({
 root:{
    display:'flex',
    flexDirection:'column',
 
    rowGap:'10px',
    boxSizing:'border-box',

 },
 header:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.3)',
    boxSizing:'border-box',
    backgroundColor:blue2,
    color:'white',
    width:'100%',
    padding:'2vh 1vmax',
    fontSize:'20px',
    textShadow:'0px 0px 4px rgba(0,0,0,0.7)', 
    fontWeight:'bolder'
 },
 filter_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    border:'1px solid rgba(0,0,0,0.5)',
    padding:'1vh 1vmax',
    borderRadius:'5px',
background:'rgb(141,228,234)',
background:'linear-gradient(98deg, rgba(141,228,234,1) 1%, rgba(124,180,238,1) 40%, rgba(126,180,238,1) 100%)',
justifyContent:'space-between',
width:'100%',
boxSizing:'border-box',
'@media(min-width:320px)':{
  '@media(max-width:720px)':{
    display:'flex',
    flexDirection:'column',
    padding:'1vh 2vmax !important'
  }
}
    
 },
 filter:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.4)',
    backgroundColor:'white',
    minWidth:'100px',
    width:'max-content',
    padding:'1vh 1vw',
    position:'relative',
    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    '@media(min-width:320px)':{
      '@media(max-width:720px)':{
        width:'100%'
      }
    }

 },
 show_filter_select:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 width:'100%',
 justifyContent:'space-between'
 },
 filters_box:{
    display:'none',
    flexDirection:'column',
    borderRadius:'5px',
    zIndex:'10',
    backgroundColor:'white',
    padding:'1vh 1vw',
    position:'absolute',
    border:'1px solid rgba(0,0,0,0.3)',
    width: '100%',
    right:'0',
    top:'100%',
    boxSizing:'border-box',
    height:'auto'
 },
 option_list:{
   display:'flex',
   flexDirection:'column',
   alignItems:'center',
   justifyContent:'center',
   rowGap:'20px',
   listStyleType:'none',
   boxSizing:'border-box',
   padding:'0px',
   margin:'0px'
 },
 option_list_item:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   boxSizing:'border-box',
   padding:'0px',
   margin:'0px'
 },
 filter_btn:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   border:'1px solid rgba(0,0,0,0.4)',
   borderRadius:'5px',
   fontSize:'18px',
   color:'black',
   padding:'1vh 1vw',
   justifySelf:'left' ,
   cursor:'pointer',
   fontWeight:'bolder',
   color:'white',
   background:'#5a8f87',
   '@media(min-width:320px)':{
    '@media(max-width:720px)':{
      width:'100%'
    }
   }
 },
 show_filter:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  columnGap:'10px',
  padding:'1vh 1vmax',
  boxSizing:'border-box',
  '@media(min-width:320px)':{
    '@media(max-width:720px)':{
      width:'100%',
      padding:'1vh 0px',
      display:'grid',
      gridTemplateColumns:'auto auto'
    }
  }
   
   
 },
 filter_menu_btn:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
width:'100%'
 },
 pag_box:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   columnGap:'5px',
   boxSizing:'border-box',
   overflow:'hidden',
   justifyContent:'center',
   direction:'ltr'
 },
 pag_btn:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   padding:'1vh 1vw',
   boxSizing:'border-box',
   border:'1px solid rgba(0,0,0,0.4)',
   borderRadius:'5px',
   color:'white',
   backgroundColor:'#0887a1',
   cursor:'pointer'

 },
 pag_cr:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   border:'1px solid rgba(0,0,0,0.4)',
   borderRadius:'5px',
   boxSizing:'border-box',
   backgroundColor:'white',
   color:'black',
   padding:'1vh 1vw',
   cursor:'pointer'
 },
 pag_between:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  border:'none',
  boxSizing:'border-box',
  padding:'none',
  color:'black',
  backgroundColor:'transparent',

 },
 pag_block:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  padding:'1vh 1vw',
  boxSizing:'border-box',
  border:'1px solid rgba(0,0,0,0.4)',
  borderRadius:'5px',
  color:'white',
  backgroundColor:'#0887a1',
  cursor:'not-allowed'

},
})

export default useStyles;