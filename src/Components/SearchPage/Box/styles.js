import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
 
    alignItems:'center',
    boxSizing:'border-box',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.3)',
    cursor:'pointer',
    width:'100%',
    minHeight:'100px',

},
header_box:{
    display:'grid',
   gridTemplateColumns:'50% 25% 25%',
   boxSizing:'border-box',
   width:'100%',
   alignItems:'center',
   height:'min-content'
},
music_name:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#287eed',
    color:'white',
    boxSizing:'border-box',
    padding:'2vh 1vw',
    cursor:'pointer',
    fontWeight:'bolder',
      textShadow:'0px 0px 3px  rgba(0,0,0,0.5)'
},
music_date:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    boxSizing:'border-box',
    padding:'2vh 1vw',
    cursor:'pointer',
    background:'#1c8bb8',
    color:'white',
    fontWeight:'bolder',
      textShadow:'0px 0px 3px  rgba(0,0,0,0.5)'


},
upload_type:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    cursor:'pointer',
    backgroundColor:'#275e91',
    fontWeight:'bolder',
    padding:'2vh 1vw',
    boxSizing:'border-box',
      textShadow:'0px 0px 3px  rgba(0,0,0,0.5)'
},
body_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    padding:'2vh 1vw',
    width:'100%',
    background: 'rgb(141,228,234)',
background:' linear-gradient(98deg, rgba(141,228,234,1) 1%, rgba(105,170,238,1) 40%, rgba(93,158,229,1) 100%)',

},
info_box:{
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    boxSizing:'border-box',
    width:'100%',
    rowGap:'20px',
    marginBottom:'20px'
},
music_name_title:{
    fontSize:'20px',
    color:'rgba(255,255,255)',
    textShadow:'0px 0px 4px  rgba(0,0,0,0.5)',
    margin:'0'



},
music_name_en:{
    fontSize:'16px',
  color:'rgba(255,255,255)',
    textShadow:'0px 0px 4px  rgba(0,0,0,0.5)',
    margin:'0'
},
body_oper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    columnGap:'20px',
    width:'100%',
    alignItems:'center'
},
ops_box:{
    display:'flex',
    flexDirection:'column',
    rowGap:'15px',
    width:'50%',
    alignItems:'center'

},
img_box:{
display:'flex',
flexDirection:'column',
height:'min-content'

},
img_card:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
width:'150px',
aspectRatio:'1/1',
borderRadius:'5px',
border:'1px solid rgba(0,0,0,0.4)',
boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.4)',
backgroundColor:'rgba(0,0,0,0.2)'

},
img:{
objectFit:'contain',
width:'100%'
},
btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'2vh 1vw',
    border:'1px solid rgba(0,0,0,0.5)',
 
    color:'white',
    cursor:'pointer',
    borderRadius:'5px',
    fontWeight:'bolder',
    columnGap:'20px',
    fontSize:'17px',
    minWidth:'300px',
    maxWidth:'300px',
    width:'nax-content',
    direction:'ltr',
    backgroundColor:'#ba0b66',
    '&:first-child':{
    backgroundColor:'green'
    },
    '&:last-child':{
backgroundColor:'#457f96 !important',
    },
    '& span':{
        display:'flex',
        alignItems:'center',
        '& svg':{
            display:'flex',
            alignItems:'center'
        }
    },



}
})

export default useStyles;