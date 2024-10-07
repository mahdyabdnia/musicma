import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import { Download, PlayMusic } from '../../Consts/Icons'
import MusicPlayer from '../../SingPage/MusicPlayer/MusicPlayer'
import Modal from '../../Modal/Modal'
import clasnames from 'classnames'
import { useNavigate } from 'react-router-dom'
import ProcessBar from '../../ProcessBar/ProcessBar'
export default function Box({artist,sing,type,singerType,src}) { 
    const classes=useStyles()
    const navigate=useNavigate()
    const btnRef=useRef(null);
    const [view, setView] = useState(0)
    const open=(c)=>{
      document.getElementsByClassName(c)[0].style.display="flex"

    }

    useEffect(() => {
      const changeViewToOne = () => {
        setView(1);
        // بعد از 1 ثانیه setView(0) را اجرا کنید
        setTimeout(() => {
          setView(0);
        }, 4000);
      };
    
      const timerId = setTimeout(changeViewToOne, 0); 
      if(btnRef.current){
      btnRef.current.addEventListener('click',changeViewToOne);}

    
      return () => {
        if(btnRef.current){
       btnRef.current.removeEventListener('click',changeViewToOne)}
       clearTimeout(timerId); 
      }
    }, [ ])
    


    const handleClick=()=>{
      navigate(`/archive/${artist}`)
      window.scrollTo(0,0)
    }
  return (
    <div className={classes.main}>
      <div className={classes.head_date_box}>
{view===1 && <ProcessBar/>}
     <div className={classes.header}>1</div>
     <div className={classes.date}>2</div>

    <div className={classes.type_service}>3</div>
      </div>
      <div className={classes.body}>
        <div className={classes.music_info_box}>
          <h1 className={classes.music_main_info} onClick={()=>{navigate(`/sing/${artist}/${sing}`)}}>{type} {sing} از {singerType} عزیز  {artist}</h1>
          <h4 className={classes.add_info}>
            دانلود {type}{sing} از رسانه موزیک ما
          </h4>
          <h4 className={classes.add_info}>{type} {sing}</h4>
          <h4>Download from MusicMa</h4>
        </div>

        <div className={classes.struct_box}>
          <div className={classes.buttons_box}>
            <button className={clasnames(classes.btn,classes.btn_arch)} onClick={handleClick} ref={btnRef}>آرشیو‌ {type}های {artist}</button>
            <button className={classes.btn} onClick={()=>{open('modal')}}> <span>دانلود آهنگ</span> <span><Download/></span>  </button>
            <button className={classes.btn} onClick={()=>{open('music')}}> <span> پخش موزیک </span>  <span> <PlayMusic/> </span> </button>
          </div>
          <MusicPlayer className='music'/>
          <Modal className='modal'/>
          <div className={classes.images_box}>
            <div className={classes.image_block}>
              <img src={`${process.env.PUBLIC_URL}${src}`} className={clasnames(classes.singer_img)} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
