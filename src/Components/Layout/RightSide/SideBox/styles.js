import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
box:{
    display:'flex',
    flexDirection:'column',
    boxSizing: 'border-box',
    padding:'2vh 2vw',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.5)',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.6)',
    background:' rgb(182,141,235)',
    background: 'linear-gradient(180deg, rgba(182,141,235,1) 0%, rgba(101,226,218,1) 47%, rgba(232,178,109,1) 100%)'
},
header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:'30px',

},
header_name:{
fontSize:'20px'
},
header_img:{
   width:'100px',
   aspectRatio:'1/1'
},
divider_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border-box',
padding:'2vh 0.1vmax',

},
divider:{
 width:'100%',
 height:'2px',
 border:'none',
 backgroundColor:'rgba(0,0,0,0.5)'
},
list_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxSizing:'border-box',
    padding:'1vh 1vmax'
},
singer_list:{
    display:'grid',
    gridTemplateColumns:'50% 50%',
    justifyContent:'space-between',
    listStyleType:'disc',
    padding:'0',
    margin:'0',
    width:'100%',
    rowGap:'20px',
   columnGap:'20px'

},
singer_list_item:{
    fontWeightl:'border',
    fontSize:'18px',
    cursor:'pointer',
    color:'rgba(0,0,0,0.7)',
    '&:hover':{
        color:'#de072b',
        transform: 'scale(1.1)'
    }

}
})

export default useStyles;