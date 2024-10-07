import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
main:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
      rowGap:'20px',
    alignItems:'center',
    overflow:'hidden'
    

},
pag_box:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  columnGap:'20px',
  direction:'ltr',
  overflow:'hidden'
},
pag_btn:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:'5px',
  border:'1px solid rgba(0,0,0,0.4)',
  backgroundColor:'#0887a1',
  color:'white',
  boxSizing:'border-box',
  padding:'1vh 1vw',
  cursor:'pointer'
   
},
pag_cr:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:'5px',
  border:'1px solid rgba(0,0,0,0.4)',
  backgroundColor:'white',
  color:'black',
   boxSizing:'border-box',
  padding:'1vh 1vw',
  cursor:'pointer'
},
pag_between:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  border:'none',
  backgroundColor:'transparent',
  color:'black',
  padding:'1vh 1vw',
  margin:'0',
  

},
pag_block:{
  display:'flex',
  flexDirection:'row', 
  alignItems:'center',
  justifyContent:'center',
  padding:'1vh 1vw',
  boxSizing:'border-box',
  border:'1px solid rgba(0,0,0,0.3)',
  borderRadius:'5px',
  backgroundColor:'#0887a1',
  color:'white',
  cursor:'not-allowed'
},
set_show:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'right',
  columnGap:'20px',
  boxSizing:'border-box',
  padding:'1vh 1vw',
  border:'1px solid rgba(0,0,0,0.4)',
  borderRadius:'5px',
  width:'100%'
},
num_option_box:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  boxSizing:'border-box',
 
  borderRadius:'5px',
  columnGap:'20px',
  border:'1px solid rgba(0,0,0,0.4)',
  position:'relative',
  backgroundColor:'white'
},
num_option :{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  boxSizing:'border-box',
  padding:'1vh 1vw',
  borderRadius:'5px',
  columnGap:'20px',
   
  position:'relative',
  backgroundColor:'white'
},
select_box:{
  top:'100%',
  left:'0',
  position:'absolute',
  display:'none',
  flexDirection:'column',
  borderRadius:'5px',
  width:'100%',
  backgroundColor:'white',
  zIndex:'1',
  border:'1px solid rgba(0,0,0,0.4)',
boxSizing:'border-box'

},
 
option_list:{
  display:'flex',
  flexDirection:'column',
  listStyleType:'none',
  margin:'0px',
  padding:'0px',
  rowGap:'10px',
  boxSizing:'border-box'
},
option_list_item:{
  display:'flex',
  flexDirection:'row',
  boxSizing:'border-box',
  padding:'1vh 1vw'
}
 
})

export default useStyles;