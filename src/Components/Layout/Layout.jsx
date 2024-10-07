import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import useStyles from './style'
import { LeftArrow } from '../Icons/Icons';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Footer from '../Footer/Footer';
import {useMediaQuery} from 'react-responsive';
export default function Layout() {
  const classes=useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div>
      <Navbar/>
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
