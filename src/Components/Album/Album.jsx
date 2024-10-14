import React from 'react'
import useStyles from './styles'
 
 
import MiniMusicPlayer from '../MiniMusicPlayer/MusicPlayer';
import Modal from '../Modal/Modal';
 

export default function Album() {
    const classes=useStyles();

    const open=()=>{
        document.getElementsByClassName('modal')[0].style.display="flex"
        
    }
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.header_info}>
            <div className={classes.info_one}>1</div>
            <div className={classes.info_two}>2</div>
            <div className={classes.info_the}>3</div>
        </div>

        <div className={classes.body}>
            <div className={classes.info_box}>
                <h1 className={classes.info_title}>دانلود آلبوم جدید  ... ........</h1>
                <h2 className={classes.info_sec_title}>ّهم اکنون از رسانه موزیک ما</h2>
            </div>

            <div className={classes.image_box}>
                <div className={classes.img_card}>
                    <img src={`${process.env.PUBLIC_URL}/images/singer.png`} alt=""  className={classes.img}/>
                </div>
            </div>

            <div className={classes.music_box}>
                <div>───┤ ♩♬♫♪♭ ├───</div>
                      <div className={classes.music_box_body}>
                         <ul className={classes.music_list}>
                            <li className={classes.music_list_item}>
                              <span className={classes.music_name}>  آهنگ ... </span>
                              <MiniMusicPlayer src={`${process.env.PUBLIC_URL}/media/aboozar.mp3`}/>
                              <span className={classes.music_dl} onClick={open}>دانلود </span>
                              <Modal src={`${process.env.PUBLIC_URL}/media/aboozar.mp3`} className='modal'/>
                             
                              <span className={classes.music_page_link}>صفحه موزیک</span>
                              <span className={classes.music_divider}></span>
                            </li>
                            <li className={classes.music_list_item}>
                              <span className={classes.music_name}>  آهنگ ... </span>
                              <MiniMusicPlayer src={`${process.env.PUBLIC_URL}/media/rafighShahid.mp3`}/>
                              <span className={classes.music_dl}>دانلود </span>
                              <Modal src={`${process.env.PUBLIC_URL}/media/rafighShahid.mp3`} />
                            
                              
                              <span className={classes.music_page_link}>صفحه موزیک</span>
                              <span className={classes.music_divider}></span>
                            </li>

                            <li className={classes.music_list_item}>
                              <span className={classes.music_name}>  آهنگ ... </span>
                              <MiniMusicPlayer src={`${process.env.PUBLIC_URL}/media/salamFarmandeh.mp3`}/>
                              <span className={classes.music_dl}>دانلود </span>
                              <Modal src={`${process.env.PUBLIC_URL}/media/salamFarmandeh.mp3`}/>
                              
                              <span className={classes.music_page_link}>صفحه موزیک</span>
                              <span className={classes.music_divider}></span>
                            </li>
                         </ul>
                      </div>


                <div>───┤ ♩♬♫♪♭ ├───</div>


            </div>
        </div>
      </div>
    </div>
  )
}
