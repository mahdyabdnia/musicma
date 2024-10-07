import { makeStyles } from "@mui/styles";
const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.4)'
},
header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    textAlign:'center',

},
head_right:{
width:'50%',
display:'flex',
flexDirection:'row',
alignItems:'center',
textAlign:'center',
padding:'10px',
backgroundColor:'#547fa1',
boxSizing:'border-box',
color:'white',
justifyContent:'center'
},
head_left:{
width:'50%',
display:'flex',
flexDirection:'row',
alignItems:'center',
textAlign:'center',
justifyContent:'center'

}
,
head_time:{
    width:'50%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#7298b5',
    boxSizing:'border-box',
    padding:'10px',
    color:'white',
    justifyContent:'center'

},
head_type:{
    width:'50%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
   
    boxSizing:'border-box',
    padding:'10px',
    color:'white',
    backgroundColor:'#90bde0',
},
body:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    borderRadius:'5px 5px 5px 5px',
    color:'rgba(0,0,0,0.7)',
    boxSizing:'border-box',
    backgroundColor:'#d7e8f5',
    padding:'20px'
},
sing_en_name:{
    fontSize:'15px'
},
tools_box:{
display:'flex',
flexDirection:'row',
justifyContent:'center',
columnGap:'40px',
boxSizing:'border-box',
direction:'ltr',
alignItems:'center'
},
right:{
display:'flex',
flexDirection:'column'
},
left:{
display:'flex',
flexDirection:'column',
rowGap:'10px'
},
btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:'5px',
    justifyContent:'center',
    padding:'2vh 5vw',
    border:'1px solid rgba(0,0,0,0.4)',
    fontWeight:'bolder',
    fontSize:'17px',
    cursor:'pointer',
    columnGap:'20px',
    'svg':{
        display:'flex',
        alignItems:'center'
    }

},
btnA:{
backgroundColor:'#a3a5d1',
color:'rgba(0,0,0,0.7)'
},
btnB:{
    color:'white',
    backgroundColor:'#139185',

},
img_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'5px',
    aspectRatio:'1/1',
    width:'150px',
    border:'1px solid rgba(0,0,0,0.5)',
    backgroundColor:'#9d9fcf'

},
singer_img:{
    objectFit:'contain',
    width:'100%',
    height:'100%'
}


})


export default useStyles;