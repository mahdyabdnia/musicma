import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useStyles=makeStyles({
modal:{
    position:'fixed',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0)',
    backgroundColor:'rgba(0,0,0,0.3)',
    zIndex:'20',
    display:'none', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    top:'0',
    left:'0',
    bottom:'0',
    right:'0'
},
modal_content:{
    display:'flex',
    flexDirection:'column',
  direction:'ltr',
    position:'relative',
    backgroundColor:'white',
    width:'50%',
    height:'20%',
    borderRadius:'5px',
    '@media(max-width:1224px)':{
       width:'80vw',
       height:'30vmax'
    },
    '@media(max-width:1224px)':{
        height:'15vmax'
    }

},
close_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    border:'none',
    backgroundColor:'transparent',
    position:'relative',
    left:'10px',
    top:'10px',
    cursor:'pointer',
    color:'black'

},
head:{
    display:'flex',
    flexDirection:'row',
    direction:'rtl',
    boxSizing:'border-box',
    padding:'10px',
    fontSize:'20px'
},
button_box:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    columnGap:'30px',
    '@media(max-width:600px)':{
        flexDirection:'column',
        alignItems:'center',
        rowGap:'20px'
    },
    '@media(max-width:1224px)':{
        flexDirection:'row'
    }
},
btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    columnGap:'20px',
    backgroundColor:'#7f62a3',
    color:'white',
    borderRadius:'10px',
    border:'1px solid #7f62a3',
    boxSizing:'border-box',
    padding:'10px',
   
    fontSize:'18px',
    cursor:'pointer',
    fontWeight:'normal'


}
})


export default useStyles;