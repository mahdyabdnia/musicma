import React from 'react'
import useStyles from './styles'
import { Download, PlayMusic } from '../../Consts/Icons';
import MusicPlayer from '../../SingPage/MusicPlayer/MusicPlayer';
import Modal from '../../Modal/Modal'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Box({artist,sing,type,singerType,src}) {
  const navigate=useNavigate();
    const classes=useStyles();
    const openMusicPlayer=(c)=>{
      document.getElementsByClassName(c)[0].style.display="flex";
    }
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.header_right_side}>دانلود {type} {sing}</div>
        <div className={classes.header_left_side}>
            <div className={classes.date_box}>تاریخ آپلود آهنگ </div>
            <div className={classes.type_music}>آهنگ جدید یا آهنگ درخواستی</div>
        </div>
      </div>

      <div className={classes.body}>
        <h1 className={classes.title}>   دانلود {type} {sing}  از {singerType} عزیز {artist} </h1>
        <div className={classes.singer_mix}>
            <span>شعر: شاعر</span>
            <span>ملودی: آهنگ‌ساز</span>
            <span>تنظیم: تنظیم‌کننده</span>
        </div>
        <h2 className={classes.sec_title}> {sing}  </h2>
        <h3 className={classes.eng_title}>Download music from this singer. It's his new song. It's so perfect</h3>
        <div className={classes.section}>
            <div className={classes.section_img}>
                <img src={`${process.env.PUBLIC_URL}${src}`} alt="" /> 
            </div>
            <div className={classes.section_box}>
            <button   className={classes.btnB} onClick={()=>{navigate( `/archive/${artist}`)}}>
                    <span>     آرشیو‌ {type} های {artist}</span>  
                </button>
                <button className={classes.btn} onClick={()=>{openMusicPlayer('modal')}}>
                    <span>  دانلود آهنگ</span> <span><Download/></span>
                </button>
                <button  className={classes.btn} onClick={()=>openMusicPlayer('music')}> 
                    <span> پخش آهنگ</span>  <span><PlayMusic/></span>
                </button>
                <MusicPlayer className='music'/>
                <Modal className='modal'/>

               
            </div>
        </div>

      </div>
    </div>
  )
}
