import React, { useRef } from 'react'
import useStyles from './styles'
import { Download, PlayMusic } from '../Consts/Icons'
import classnames from 'classnames'
import MusicPlayer from './MusicPlayer/MusicPlayer';
export default function SingPage() { 
    const classes=useStyles();
    const music = useRef(null)
    const openMusicPlayer=()=>{
         document.getElementsByClassName('music')[0].style.display="flex"
    }
  return (
    <div className={classes.root}>
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.header_right_side}>دانلود آهنگ </div>
        <div className={classes.header_left_side}>
            <div className={classes.date_box}>تاریخ آپلود آهنگ </div>
            <div className={classes.type_music}>آهنگ جدید یا آهنگ درخواستی</div>
        </div>
      </div>

      <div className={classes.body}>
        <h1 className={classes.title}>دانلود آهنگ  تایتل</h1>
        <div className={classes.singer_mix}>
            <span>شعر: شاعر</span>
            <span>ملودی: آهنگ‌ساز</span>
            <span>تنظیم: تنظیم‌کننده</span>
        </div>
    <div className={classes.title_box}>   <h2 className={classes.sec_title}>نام آهنگ</h2></div> 
        <h3 className={classes.eng_title}>Download music from this singer. It's his new song. It's so perfect</h3>
         
            <div className={classes.section_img}>
                <img src="images/singer.png" alt="" className={classes.img}/>
            </div>
            <div className={classes.section_box}>
                
                <button  className={classes.btn} onClick={openMusicPlayer}>
                    <span> پخش آللاین آهنگ</span>  <span><PlayMusic/></span>
                </button>
                <button className={classnames(classes.btn,classes.dwn_btn)}>
                    <div className={classes.btn_btn}> <span>  دانلود آهنگ با کیفیت ۳۲۰</span> <span><Download/></span></div>
                    
                   
                </button>
                <button className={classnames(classes.btn,classes.dwn_btn)}>
                  <div className={classes.btn_btn}><span>  دانلود آهنگ با کیفیت ۱۲۸</span> <span><Download/></span></div> 
                  
                </button>

               
            </div>

            <div><h3>آرشیو آهنگ‌های این خواننده</h3></div>

            <div className={classes.sing_text}><span>
            <img src="images/xx.png" alt="" />
            <img src="images/xx.png" alt="" />
            <img src="images/xx.png" alt="" />
            <img src="images/xx.png" alt="" /></span> 
            <h2>متن این ترانه</h2> 
            <span><img src="images/xx.png" alt="" />
            <img src="images/xx.png" alt="" />
            <img src="images/xx.png" alt="" />
            <img src="images/xx.png" alt="" /></span></div>

            <div className={classes.sing_text_box}>
                <p>متن ترانه متن ترانه  متن ترانه 
                    متن ترانه متن ترانه متن ترانه متن ترانه متن تران   
                    
                        
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                  
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                </p>
               <div className={classes.banner}>
                <span>رسانه موزیک ما</span>
               <img src="images/brand.png" alt="" />
               </div>

               <p>متن ترانه متن ترانه  متن ترانه 
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه 
            
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                  
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                     
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                   
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                    
                    متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
                </p>
                
            </div>
       

      </div>
    </div>
    <div className={classes.other_song_box}>
    <div className={classes.other_song}>
        <img src="images/singer.png" alt="" className={classes.avatar}/>
        <h5>نام آهنگ</h5>
    </div>
    <div className={classes.other_song}><img src="images/singer.png" alt="" className={classes.avatar}/>
    <h5>نام آهنگ</h5></div>
    <div className={classes.other_song}><img src="images/singer.png" alt="" className={classes.avatar}/>
    <h5>نام آهنگ</h5></div>
    <div className={classes.other_song}><img src="images/singer.png" alt="" className={classes.avatar}/>
    <h5>نام آهنگ</h5></div>
    </div>
    <MusicPlayer className='music'/>
    </div>
  )
}
