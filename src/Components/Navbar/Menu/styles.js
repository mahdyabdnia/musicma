import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
 menu:{
    display:'none',
    flexDirection:'column',
    boxSizing:'border-box',
    padding:'1vh 1vw',
    borderRadius:'  0 0 5px 5px' ,
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.3)', 
    position:'absolute',
    zIndex:'10000000',
    background:'rgb(229,180,237)',
    background:'linear-gradient(98deg, rgba(229,180,237,1) 1%, rgba(89,193,240,1) 40%, rgba(108,226,199,1) 100%)',
    cursor:'pointer',
    width:'auto',
    minWidth:'max-content',
    height:'auto',
    top:'40px',
     
 },
 menu_list:{
    display:'grid',
    flexDirection:'row',
    width:'100%',
   listStyleImage:`url('images/singericon.png')`,
    margin:'0px',
    padding:'0px',
    gridTemplateColumns:'auto auto auto auto ',
    columnGap:'20px',
    cursor:'pointer',
    zIndex:'10000'
    
 },
 menu_list_item:{
   display: 'flex', // تغییر به flex
   alignItems: 'center',
  color:'black',
   boxSizing:'border-box',
   padding:'1vh 1vw',
   zIndex:'1000000',
    
 
 
   '&:hover':{
      color:'red',
      transform: 'scale(1.1)'
   }
 }
})


export default useStyles;