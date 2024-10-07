import { useMediaQuery } from "react-responsive";
import React from 'react'

 

export default function MediaQuery() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' }); 
    const isTablet  = useMediaQuery({ query: '(max-width: 1224px)' });
    const isMobile  = useMediaQuery({ query: '(max-width: 720px)' });
  
   
  
    return { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina, isTablet, isMobile };
  
}


