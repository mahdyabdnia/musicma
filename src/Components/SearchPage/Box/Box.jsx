import React from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import { PlayMusic } from '../../Icons/Icons';
import MusicPlayer from '../../SingPage/MusicPlayer/MusicPlayer'
import Modal from '../../Modal/Modal'
import { Download } from '../../Consts/Icons';
export default function Box({artist,sing,type,singerType,src}) {
    const classes=useStyles();
    const open =(c)=>{
        const music=document.getElementsByClassName(c)[0];
        music.style.display="flex"
    }
  return (
    <div className={classes.root}>
      <div className={classes.header_box}>
        <div className={classes.music_name}>  دانلود {type} {sing} از {artist}</div>
        <div className={classes.music_date}> تاریخ آپلود موزیک </div>
        <div className={classes.upload_type}> آهنگ جدید </div>
      </div>
      <div className={classes.body_box}>
         <div className={classes.info_box}>
            <h1 className={classes.music_name_title}>   دانلود {type}  {sing}</h1>
            <h4 className={classes.music_name_en}>{type}  {sing} از {artist} همراه متن {type}</h4>
            <h4 className={classes.music_name_en}>Download new music from this artist</h4>
         </div>

         <div className={classes.body_oper}>
            <div className={classes.img_box}>
                <div className={classes.img_card}>
                    <img src={`${process.env.PUBLIC_URL}${src}`} alt="" className={classes.img} />
                </div>
            </div>
            <div className={classes.ops_box}>
                <button className={classnames(classes.btn)}>آرشیو آهنگ‌های  {artist}  </button>
                <button className={classnames(classes.btn)} onClick={()=>{open('music')}}><span>پخش موسیقی</span> <span><PlayMusic/></span></button>
                <button className={classnames(classes.btn)} onClick={()=>{open('modal')}} >   <span>دانلود موزیک</span>  <span><Download/></span></button>
                <MusicPlayer className='music'/>
                <Modal className='modal'/>
        
            </div>
         </div>
      </div>
    </div>
  )
}
