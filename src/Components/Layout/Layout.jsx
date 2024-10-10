import React, { useEffect,useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import useStyles from './style'
import { LeftArrow } from '../Icons/Icons';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Footer from '../Footer/Footer';
import {useMediaQuery} from 'react-responsive';
import ProcessBar from '../ProcessBar/ProcessBar';
export default function Layout() {
  const classes=useStyles();
  const [view, setView] = useState(0)
  const path=useLocation();
  const params=useParams()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  useEffect(() => {
    const changeViewToOne=()=>{
      setView(1);

      setTimeout(()=>{
        setView(0)
      },4000);
    }

    const timerOut= setTimeout(changeViewToOne,0)
  
    return () => {
       clearTimeout(timerOut)
    }
  }, [path,params ])
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div>
      <Navbar/>
      {view===1 && <ProcessBar/>}
      <div className={classes.main}>
        {isTabletOrMobile &&
        <>
         <Outlet/>
         <RightSide/>
         <LeftSide/>
         </>
        }
      <RightSide/>
        
      <Outlet/>
      <LeftSide/>
      </div>
      <Footer/>
    </div>
  )
}
