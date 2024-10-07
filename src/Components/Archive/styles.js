import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
main:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'100%',
    boxSizing:'border',

},
head_box:{
    display:'flex',
    flexDirection:'column',
    border:'1px solid rgna(0,0,0,0.3)',
    borderRadius:'5px',
    justifyContent:'center',
    alignItems:'center',
    padding:'1vh 1vmax',
    color:'white',
    boxSizing:'border-box',
    fontFamily:'bolder',
    backgroundColor:'#3d8cba',
    width:'100%',
    minWidth:'max-content',
    height:'auto',

},
body:{
    display:'flex',
    flexDirection:'column',
    rowGap:'20px',
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
    height:'auto',
    boxSizing:'border-box',
    margin:'20px'

}
})


export default useStyles;