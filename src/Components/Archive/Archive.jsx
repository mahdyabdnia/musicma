import React from 'react'
import useStyles from './styles'
import { useParams } from 'react-router-dom'
import sings from '../Consts/sings'
import madahi from '../Consts/madah'

import Box from './Box/Box'
import MainBox from '../MainBox/MainBox'
export default function Archive() {
  const classes=useStyles()
  const {name}=useParams()
  const lastId=sings[sings.length-1].id;
  const singAdd=madahi.map((sing)=>({
    ...sing,
    id:lastId+1+sing.id,
    type:'مداحی',
    singerType:'مداح',
    src:'/images/madah.png'

  }))



  const newSing=[...sings.map((sing)=>({...sing,type:'ترانه',singerType:'خواننده',src:'/images/singer.png'}))];
  const filteredSing=newSing.filter((sing)=>{
    const artistMatch=sing.artist.toLowerCase().includes(name.toLowerCase());
      return artistMatch;
  })
  return (
    <div className={classes.main}>
      <div className={classes.head_box}>
        <h1>آرشیو آهنگ‌های {name}</h1>
      </div>
      <div className={classes.body}>
        
        {filteredSing.map((item)=>{
          return(
            <>
            <MainBox artist={item.artist} sing={item.sing} type={item.type} singerType={item.singerType}  src={item.src} />
      
            
            </>
          )
        })
        
        }
        
      </div>
      
    </div>
  )
}

