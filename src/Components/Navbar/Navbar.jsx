import React, { useEffect, useRef,useState } from 'react'
import useStyles from './styles'
import sings from '../Consts/sings';
import madahi from '../Consts/madah';
import {AccountIcon, Down, Menu, MoreHorz, Search, ShopCart} from '../Icons/Icons'
import { useNavigate,useLocation ,useParams} from 'react-router-dom';
import MenuBox from './Menu/MenuBox';
import { useMediaQuery } from 'react-responsive';
export default function Navbar() {
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const uniqueArtists = [...new Set(sings.map(song => song.artist))];
  const artistsArray = uniqueArtists.map((artist, index) => ({
    id: index + 1,  // شناسه منحصر به فرد
    name: artist
}));

const uniqueMadah = [...new Set(madahi.map(song => song.artist))];
const madahArray = uniqueMadah.map((artist, index) => ({
  id: index + 1,  // شناسه منحصر به فرد
  name: artist
}));
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const classes=useStyles();
    const menuButton = useRef([])
    const menu = useRef(null) 
    const inputRef = useRef( null)
    const navigate=useNavigate();
    const location=useLocation()
    const [value, setvalue] = useState('')
    const placeholder = 'جستجوی نام ترانه، خواننده'
    const handleInput=(event)=>{
    setvalue(event.target.value);
    }
    const params=useParams()

   
       


    useEffect(() => {
      const show = (event) => {
        const menu = event.currentTarget.lastElementChild;
        const arrow=event.currentTarget.children[1];
        const siblings = event.currentTarget.parentElement.children;
        
  
        // بستن همه منوها
        for (let i = 0; i < siblings.length; i++) {
          if (siblings[i] !== event.currentTarget) {
            siblings[i].lastElementChild.style.display = 'none';
          }
        }
  
        // toggle منوی انتخاب شده
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
        arrow.style.transform = (menu.style.display === 'none' || menu.style.display === '') ? 'rotate(360deg)' : 'rotate(180deg)';
      };
     if(menuButton.current) {menuButton.current.forEach((element)=>{
      if(element)
        {element.addEventListener('mouseenter',show)}
      })
      menuButton.current.forEach((element)=>{
       if(element) {element.addEventListener('mouseleave',show)}
      })}
    
      return () => {
        
       
      if(menuButton.current)  {menuButton.current.forEach((element)=>{
        if(element)
        {element.removeEventListener('mouseleave',show) }
      })}
      if(menuButton.current){menuButton.current.forEach((element)=>{
       if(element) {element.removeEventListener('mouseenter',show) }
      })}
      }
    }, [])

    useEffect(() => {
      // Close all menus when the route changes
    if(menuButton.current)  {menuButton.current.forEach((element) => {
        if (element.lastElementChild) {
          element.lastElementChild.style.display = 'none'; 
        }
      });}
    }, [location,params]);
    
  return (
    <header className={classes.header}>
     <div className={classes.nav_top}>
     <div className={classes.nav_right}> 
        
        <img  src={`${process.env.PUBLIC_URL}/images/brand.png`}   alt="" className={classes.logo} onClick={()=>{navigate('/')}}/>

     <div className={classes.search_box}>
            <input type="text" className={classes.search_input} ref={inputRef} value={value} onChange={handleInput} placeholder={placeholder} onKeyPress={(e) => { if (e.key === 'Enter') navigate(`/search/${value}`); }} />
          <span onClick={()=>{navigate(`/search/${value}`)}}  >  <Search onClick={()=>{alert('hello')}}/></span>
         
            
         </div >
     </div>
     <div className={classes.nav_left}>
     

       

     </div>
     </div>
     <div className={classes.nav_bottom}>
      <ul className={classes.nav_list}>
        <li className={classes.nav_list_item} ref={(el)=>(menuButton.current[0]=el)}>
    <span>     مداحی</span> 
    <span><Down/></span>
    <MenuBox list={madahArray} />

        </li>
        <li className={classes.nav_list_item} ref={(el)=>(menuButton.current[1]=el)}>
        <span>     موسیقی پاپ</span> 
        <span><Down/></span>
        <MenuBox  list={artistsArray}/>
        

        </li>
       
      </ul>
     </div>
    



 
      




   



      

    </header>
  )
}
