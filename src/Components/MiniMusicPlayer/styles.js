import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({ 
    root:{
    
 
     width:'90%',
     
   
     display:'flex',
     flexDirection:'column',
     margin:'10px 0',
      
    },
 progress:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:'6px',
    border:'1px solid rgba(0,0,0,0.4)',
    backgroundColor:'rgba(0,0,0,0.4)',
    direction:'ltr',
    cursor:'pointer'
 },
 bar:{
    backgroundColor:'#b14a8b',
    height:'6px',
    width:'50%',
    cursor:'pointer'
 },
 play_pause_btn:{
 backgroundColor:'transparent',
 border:'none',
 cursor:'pointer',
 color:'white',
 '& svg':{
    color:'white'
 }
 },
 time_box:{
    display:'flex',
    flexDirection:'row',
    columnGap:'20px',
    '@media(min-width:320px)':{
      '@media(max-width:720px)':{
         '& span':{
            display:'none',
            '&:first-child':{
               display:'flex !important'
            }
         }
      }
    }
 },
 close_btn:{
    color:'rgba(0,0,0,0.7)',
    backgroundColor:'transparent',
    border:'none',
    cursor:'pointer',
    color:'white',
    '& svg':{
        color:'white'
    }
 },
 tool_bar:{
    width:'100%',
    height:'50px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.8)',
    direction:'ltr',
    color:'white',
    border:'1px solid rgba(0,0,0,0.8)',
    columnGap:'20px',
    width:'100%',
    boxSizing:'border-box',
    padding:'1vh 2vmax'
 },
 volume_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:'20px'
 },
 volume_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'transparent',
    color:'whie',
    border:'none',
    '& svg':{
        color:'white'
    }
 },
 vlm_progress:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100px',
    height:'6px',
    border:'1px solid rgba(0,0,0,0.4)',
    backgroundColor:'rgba(0,0,0,0.4)',
    direction:'ltr',
    cursor:'pointer'
 },
 vlm_bar:{
    backgroundColor:'#b14a8b',
    height:'6px',
    width:'50%',
    cursor:'pointer'
 },
})


export default useStyles;