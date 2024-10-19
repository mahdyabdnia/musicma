import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { useLocation, useParams } from 'react-router-dom'
import sings from '../Consts/sings'
import madahi from '../Consts/madah'
import albums from '../Consts/albums'

import Box from './Box/Box'
import MainBox from '../MainBox/MainBox'
import ProcessBar from '../ProcessBar/ProcessBar'
export default function Archive() {
  const classes=useStyles()
  const {name}=useParams()
  const path=useLocation();

  const [view, setView] = useState(0);
  const lastId=sings[sings.length-1].id;
  const singAdd=madahi.map((sing)=>({
    ...sing,
    id:lastId+1+sing.id,
album:'',
    type:'مداحی',
    singerType:'مداح',
    src:'/images/madah.png',
    track:'yes'

  }))

  useEffect(() => {
    const changeViewToOne = () => {
      setView(1);
      // بعد از 1 ثانیه setView(0) را اجرا کنید
      setTimeout(() => {
        setView(0);
      }, 4000);
    };
  
    const timerId = setTimeout(changeViewToOne, 0); 
  
    return () => {
     clearTimeout(timerId)
    }
  }, [name,path ])
  



  const newSing=[...sings.map((sing)=>({...sing,album:'',type:'ترانه',track:'yes',singerType:'خواننده عزیز',src:'/images/singer.png'})),...singAdd,
  ...albums.map((al)=>({...al,type:'ترانه',src:'/images/singer.png',track:'yes',singerType:'خواننده عزیز'}))

  ];
  const filteredSing=newSing.filter((sing)=>{
    const artistMatch=sing.artist.toLowerCase().includes(name.toLowerCase());
      return artistMatch;
  })
  return (
    <div className={classes.main}>
      {view===1 && <ProcessBar/>}
      <div className={classes.head_box}>
        <h1>آرشیو آهنگ‌های {name}</h1>
      </div>
      <div className={classes.body}>
        
        {filteredSing.map((item)=>{
          return(
            <>
            <MainBox artist={item.artist} sing={item.sing} type={item.type} singerType={item.singerType}  src={item.src} album={item.album} track={item.track} />
      
            
            </>
          )
        })
        
        }
        
      </div>
      
    </div>
  )
}

