import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
 '@global':{
    body:{
         scroll:'none',
        margin: '0',
        overflow:'hidden'
    }
 } ,
process_root:{

    display:'flex',
    flexDirection:'column',
    position:'fixed',
    width:'100%',
    height:'100%',
    top:'0',
    bottom:'0',
    right:'0',
    left:'0',
     backgroundColor:'white',
     opacity:'1',
     justifyContent:'center',
     alignItems:'center',
     zIndex:'10000000',
     overflow:'hidden'
},
spiner:{
    width:'100px',
    height:'100px',
    borderRadius:'50%',
    border:'20px solid rgba(0,0,0,0.4)',
    alignSelf:'center',
    justifySelf:'center',
    borderTop:'20px solid red !important',
    opacity:'1',
    animation:`$anime infinite 1s`,
    
   
},
wait_text:{
    animation:`$text  infinite 1s`
    },
"@keyframes anime":{
    "0%":{
        transform:'rotate(0deg)'
    },
    "100%":{
        transform:'rotate(360deg)'
    }
},


"@keyframes text":{
    "0%":{
       transform:'translateX(-10px)',
    },
    "25%":{
        transform:'translateX(10px)',
    },"50%":{
        transform:'translateX(-10px)',
    },
    "75%":{
        transform:'translateX(10px)',
    },
    "100%":{
        transform:'translateX(-10px)',
    }
}

})


export default useStyles;