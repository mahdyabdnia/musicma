import React from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import { ClassSharp, Download } from '@mui/icons-material';
import { Play } from 'react-feather';
import MusicPlayer from '../SingPage/MusicPlayer/MusicPlayer';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

export default function MainBox({artist,sing,type,singerType,src}) {
    const classes=useStyles();
    const navigate=useNavigate()
    const openBox=(c)=>{
      document.getElementsByClassName(c)[0].style.display="flex";
    }
  return (
    <div className={classes.root}>
        <div className={classes.head_info_box}>
            <div className={classes.head_one}>1</div>
            <div className={classes.head_two}>3</div>
            <div className={classes.head_the}>آهنگآهنگ آّنگ‌آ»گّآن»آا جدید یا درخواستی</div>
        </div>

        <div className={classes.body}>
            <div className={classes.body_info_box}>
                <h1 className={classes.info_header}>دانلود {type} {sing} {artist}</h1>  
                <h3>جدید‌ترین اثر </h3>
                <h1 className={classes.info_header}> {singerType} عزیز {artist}     ...</h1>
            </div> 

            <div className={classes.tools_box}>
            
              <div className={classes.img_box}>
                <img src={`${process.env.PUBLIC_URL}${src}`} alt="" />
              </div>
             

            <div className={classes.tool_btn_box}>

                <button className={classnames(classes.btn,classes.arch_btn)} onClick={()=>{navigate( `/archive/${artist}`)}}>آرشیو {type}  {artist} </button>
                <button  className={classnames(classes.btn,classes.dl_btn)} onClick={()=>{openBox('modal')}}> <span><Download/></span>  <span>دانلود این {type}</span> </button>
                <button className={classnames(classes.btn,classes.pl_btn)} onClick={()=>{openBox('music')}} >   <span><Play/></span> <span>پخش آنلاین {type}</span> </button>
                <MusicPlayer className='music'/>
                <Modal className='modal'/>
            </div>
        </div>
        </div>

        
      
    </div>
  )
}
