import React, { useEffect, useRef,useState } from 'react'
import useStyles from './styles'

import {AccountIcon, Down, Menu, MoreHorz, Search, ShopCart} from '../Icons/Icons'
import { useNavigate,useLocation ,useParams} from 'react-router-dom';
import MenuBox from './Menu/MenuBox';
import { useMediaQuery } from 'react-responsive';
export default function Navbar() {
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
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
    const {name}=useParams()

   
       


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
    }, [location,name]);
    
  return (
    <header className={classes.header}>
     <div className={classes.nav_top}>
     <div className={classes.nav_right}> 
        
        <img  src={`${process.env.PUBLIC_URL}/images/brand.png`}   alt="" className={classes.logo} onClick={()=>{navigate('/')}}/>

     <div className={classes.search_box}>
            <input type="text" className={classes.search_input} ref={inputRef} value={value} onChange={handleInput} placeholder={placeholder} />
          <span onClick={()=>{navigate(`/search/${value}`)}}>  <Search onClick={()=>{alert('hello')}}/></span>
         
            
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
    <MenuBox  />

        </li>
        <li className={classes.nav_list_item} ref={(el)=>(menuButton.current[1]=el)}>
        <span>     موسیقی سنتی</span> 
        <span><Down/></span>
        <MenuBox  />
        

        </li>
        <li className={classes.nav_list_item} ref={(el)=>(menuButton.current[2]=el)}> <span>     موسیقی رپ </span> 
        <span><Down/></span>  <MenuBox /></li>
        <li className={classes.nav_list_item} ref={(el)=>(menuButton.current[3]=el)}> <span>     موسیقی پاپ</span> 
        <span><Down/></span>  <MenuBox  /></li>
        <li className={classes.nav_list_item} ref={(el)=>(menuButton.current[4]=el)}> <span>     سایر سبک‌ها</span> 
        <span><Down/></span>  <MenuBox/></li>
      </ul>
     </div>
    



 
      




   



      

    </header>
  )
}
