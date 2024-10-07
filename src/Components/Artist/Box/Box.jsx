import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import { collapseClasses } from '@mui/material';
import classnames from 'classnames'
import MusicPlayer from '../../SingPage/MusicPlayer/MusicPlayer'
import { Download,  } from '../../Consts/Icons';
import { PlayMusic } from '../../Icons/Icons';
import Modal from '../../Modal/Modal';
import { useNavigate } from 'react-router-dom';
export default function Box({artist,sing,type,singerType,src}) { 
    const classes=useStyles();
    const btnRef=useRef(null)
    const [view, setView] = useState(0)
    const navigate=useNavigate()
    useEffect(() => {
        const changeViewToOne = () => {
            setView(1);
            // بعد از 1 ثانیه setView(0) را اجرا کنید
            setTimeout(() => {
              setView(0);
            }, 4000);
          };
          const goTo=()=>{
            window.scrollTo(0,0)
          }

          const nav=()=>{
            navigate(`/archive/${artist}`)
          }
        
          const timerId = setTimeout(changeViewToOne, 0); 
          if(btnRef.current)
          {btnRef.current.addEventListener('click',changeViewToOne)
          btnRef.current.addEventListener('click',goTo)
          btnRef.current.addEventListener('click',nav)}
    
      return () => {
        if(btnRef.current) {btnRef.current.removeEventListener('click',changeViewToOne)
         btnRef.current.removeEventListener('click',goTo)
         btnRef.current.removeEventListener('click',nav)}
         clearTimeout(timerId)
      }
    }, [ ])
    
  
    const openDownloadModal=()=>{
        document.getElementsByClassName('modal')[0].style.display="flex"
    }
    const openMusicPlayer=()=>{
        document.getElementsByClassName('music')[0].style.display="flex"
    }
  return (
    <>
    <Modal className='modal'/>
    <div className={classes.root}>
        <div className={classes.header}>
            <div className={classes.head_right}>دانلود {type} {sing} از {artist}</div>
            <div className={classes.head_left}>
                <div className={classes.head_time}>تاریخ</div>
                <div className={classes.head_type}>فوریت آهنگ</div>
            </div>
        </div>
        <div className={classes.body}>
            <h2 className={classes.sing_name}> {type} {sing}  </h2>
            <h2 className={classes.sing_name}>  {type} از {singerType} عزیز {artist}  </h2>
            <h3 className={classes.sing_en_name}>Download the music of the artist</h3>

            <div className={classes.tools_box}>
                <div className={classes.left}>
                    <button className={classnames(classes.btn,classes.btnA)} ref={btnRef}>آرشیو {type}های {artist}  </button>
                    <button className={classnames(classes.btn,classes.btnA)} onClick={openMusicPlayer}>پخش همین آهنگ <PlayMusic/>  </button>
                    <button className={classnames(classes.btn,classes.btnB)} onClick={openDownloadModal}>دانلود آهنگ <Download/></button>
                </div>
                <div className={classes.right}>
                    <span className={classes.img_box}>
                        <img src={`${process.env.PUBLIC_URL}${src} `} alt="" className={classes.singer_img}/>
                    </span>
                </div>
            </div>
        </div>
        <MusicPlayer className='music'/>
      
    </div>
    </>
  )
}
