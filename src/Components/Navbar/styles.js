import { Rowing } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    header:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        minHeight:'100px',
        height:'auto',
        background: 'rgb(62,58,180)',
background:' linear-gradient(90deg, rgba(62,58,180,1) 1%, rgba(14,12,144,1) 21%, rgba(60,180,192,1) 52%)',
        boxSizing:'border-box',
        padding:'1vh 1vw',
        zIndex:'10000000',
        
        width:'100%',
        '@media(max-width:1000px)':{
            width:'100vw',
            display:'flex',
            flexDirection:'column',
            padding:'1vh 5vw',
            boxSizing:'border-box'
        }
   
    },
    nav_top:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
boxSizing:'border-box',
zIndex:'10000000',
width:'100%',
'@media(max-width:1200px)':{
    display:'flex',
    flexDirection:'column',

}


    },
    nav_bottom:{
display:'flex',
flexDirection:'row',

boxSizing:'border-box',
alignItems:'center',
width:'100%',
zIndex:'10000000',
'@media(max-width:1000px)':{
    display:'none'
}

    },
    nav_list:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     listStyleType:'none',
     boxSizing:'border-box',
     padding:'0',
     margin:'0',
     columnGap:'20px', 
     zIndex:'10000000',
     position:'relative',
    
    },
    nav_list_item:{
   display:'flex',
   flexDirection:'row',
  
   boxSizing:'border-box',
   alignItems:'center',
   padding:'1vh 1vw',
   fontWeight:'bolder',
   columnGap:'10px',
   zIndex:'10000000',
   '& span':{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
   },
   '&:hover':{
    color:'#960541',
    transform: 'scale(1.2)'
   }
    },

    nav_right:{
    display:'flex',
    flexDirection:'row',
    columnGap:'20px',
    alignItems:'center',
    zIndex:'10000000',
    boxSizing:'border-box',
    '@media(max-width:1200px)':{
        display:'flex',
        flexDirection:'column',
        rowGap:'20px',
        boxSizing:'border-box',
         
    }

    },
    nav:{
     display:'flex',
     flexDirection:'row',
     zIndex:'10000000',
    },
    navbar:{
    position:'absolute',
    backgroundColor:'white',
    zIndex:'10000000',
 
width:'97vw',
borderRadius:'5px',
minHeight:'100px',
height:'auto',
border:'1px solid black',
margin:'auto',
top:'45px',
boxShadow:'0px 0px 1px 3px rgba(0,0,0,0.1)'

    },
    nav_menu:{
position:'relative',

    },
    search_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
borderRadius:'5px',
border:'1px solid rgba(0,0,0,0.5)',
boxSizing:'border-box',
padding:'1vh 1vw',
backgroundColor:'white',
width: '200%',
zIndex:'10000000',
 
justifyContent:'space-between',
'@media(max-width:1200px)':{
    width:'100%',
    
    
}


    },
    search_input:{
     display:'flex',
     flexDirection:'row',
     border:'none',
     outline:'none',
     zIndex:'10000000',
     backgroundColor:'inherit',
     transition:'width 1s',
     width:'100%',
     '&:focus':{
        width:'300px',
         

     },
     
    },
    nav_left:{
        display:'flex',
        flexDirection:'row',
        columnGap:'20px'
    },
    cart_btn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#e39d9d',
        border:'1px solid rgba(0,0,0,0.3)',
        columnGap:'10px',
        boxSizing:'border-box',
        padding:'1vh 1vw',
        borderRadius:'5px',
        fontWeight:'bold',
        transition:'0.1s transform',
        '&:hover':{
transform:'rotate(180deg)'
        }
        
        
    },
    account_btn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#e39d9d',
        fontWeight:'bolder',
        boxSizing:'border-box',
        columnGap:'10px',
        border:'1px solid rgba(0,0,0,0.4)',
        borderRadius:'5px',
        padding:'1vh 1vw',
        transition:'0.1s transform',
        '&:hover':{
      transform:'rotate(180deg)'


    }},
    logo:{
        height:'10vh',
        width:'40vw'

         
    }
});
export default useStyles;