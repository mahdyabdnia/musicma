import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
 display:'grid',
 gridTemplateColumns:'50% 50%',
 justifyContent:'space-between',
 backgroundColor:'#e8f1ff',
 position:'relative'
},
left_footer:{
    width:'0',
    height:'0',
   
 display:'flex',
 flexDirection:'row',
 direction:'ltr',
    borderBottom:'220px solid #567ca3',
    borderRight:'60vw solid transparent',
    justifySelf:'left'

},
right_footer:{
    width:'0',
    height:'0',
   position:'relative',
 display:'flex',
 flexDirection:'row',
 direction:'ltr',
    borderBottom:'220px solid #56a393',
    borderLeft:'60vw solid transparent',
    justifySelf:'left',
    right:'10vw'
},
main:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    position:'absolute',
    bottom:'30px',
    width:'100%',
    color:'white',
    fontSize:'20px',
    boxSizing:'border-box',
    padding:'1vh 3vw'

},
site:{
    display:'flex',
    flexDirection:'row-reverse',
    columnGap:'20px',
    alignItems:'center',
    
    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }

},
go_up_btn:{
    position:'absolute',
    left:'50%',
    right:'50%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'max-content',
    transform:'translate( 50%, 50%)'

},
back_ic:{
    width:'100px',
    height:'100px',
    cursor:'pointer',
    transition:'0.2s transform',
    '&:hover':{
      transform:' translateY(-20px)'
    }
}
})


export default useStyles;