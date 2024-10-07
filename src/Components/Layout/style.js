import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
main:{
    display:'grid',
    gridTemplateColumns:'1fr 2fr 1fr',
    justifyContent:'space-between',
    boxSizing:'border-box',
    minHeight:'100vh',
    padding:'3vh 1vw',
    width:'100vw',
    backgroundColor:'#e8f1ff',
    columnGap:'20px',
    '@media(max-width:1000px)':{
        display:'flex',
        flexDirection: 'column',
        width:'100vw',
        padding:'1vh 10px',
        boxSizing:'border-box'
    }
}
})


export default useStyles;