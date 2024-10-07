import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
aside:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
  alignItems:'center', 
  rowGap:'20px',
  color:'rgba(0,0,0,0.7) !important'
},
side_bar:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'6px',
    boxShadow:'0px 0px 1px 2px rgba(0,0,0,0.3)', 
    boxSizing:'border-box',
    padding:'1vh 1vw',
    width:'90%',
    minHeight:'100px',
     background: 'rgb(120,178,213)',
background: 'linear-gradient(90deg, rgba(120,178,213,1) 1%, rgba(22,176,230,1) 46%, rgba(42,111,147,1) 84%)'
},
header:{
    display:'flex',
    textAlign:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    columnGap:'20px',
    color:'rgba(0,0,0,0.7) !important'
     
},
head:{
    color:'rgba(0,0,0,0.6)!important',
    fontSize:'20px',
    width:'min-content',
    fontWeight:'bolder'

},
music_list:{
    display:'flex',
    flexDirection:'column',
    rowGap:'20px',
    listStyleType:'none',
    margin:'0',
    padding:'0'

},
music_list_item:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'right',
    boxSizing:'border-box',
    padding:'1.5vh 1.5vw',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.4)',
    
    backgroundSize:'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'left top',
     
    fontSize:'20px',
    cursor:'pointer',
    background: 'rgb(120,178,213)',
background: 'linear-gradient(90deg, rgba(120,178,213,1) 1%, rgba(84,154,179,1) 31%, rgba(26,170,212,1) 100%)'
    
   
},
music_item_songs:{
    backgroundImage:`url('${process.env.PUBLIC_URL}/images/back.png') !important`,
},
music_item_album:{
    backgroundImage:`url('${process.env.PUBLIC_URL}/images/26805.png') !important`,
}

})

export default useStyles;