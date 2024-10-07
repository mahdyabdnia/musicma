import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    rowGap:'20px',
},
header_box:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#6397db',
    textAlign:'center',
    alignItems:'center',
    boxSizing:'border-box',
    padding:'10px',
    borderRadius:'5px',
    color:'white'
},
header:{
    fontSize:'20px'
},
pag_box:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    columnGap:'10px',
    boxSizing:'border-box',
    color:'white'
},
pag_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'1vh 1vw',
    boxSizing:'border-box',
    border:'1px solid rgba(0,0,0,0.3)',
    borderRadius:'5px',
    backgroundColor:'#359c9a',
    color:'white',
    cursor:'pointer'
    
},pag_cr:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'1vh 1vw',
    border:'1px solid rgba(0,0,0,0.3)',
    backgroundColor:'white',
    color:'black',
    borderRadius:'5px',
    cursor:'pointer'
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
    backgroundColor:'#359c9a',
    color:'white',
    cursor:'not-allowed',
    userSelect:'none'
}
})


export default useStyles;