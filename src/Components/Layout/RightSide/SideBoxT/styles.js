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
    background :'rgb(135,48,248)',
    background:'linear-gradient(11deg, rgba(135,48,248,1) 0%, rgba(184,181,218,1) 51%, rgba(148,208,233,1) 100%)'
},
header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:'30px',

},
header_img:{
   width:'100px',
   aspectRatio:'1/1'
},
list_box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
},
singer_list:{
    display:'grid',
    gridTemplateColumns:'50% 50%',
    justifyContent:'space-between',
    listStyleType:'none',
    padding:'0',
    margin:'0',
    width:'100%',
    rowGap:'20px',
   
    columnGap:'20px'

},
singer_list_item:{
    fontWeightl:'border',
    fontSize:'20px',
    cursor:'pointer',
    '&:hover':{
        color:'#de072b',
        transform: 'scale(1.1)'
    }

}
})

export default useStyles;