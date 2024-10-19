import React, { useRef,useEffect,useState } from 'react'
import useStyles from './styles'
 
 
import MiniMusicPlayer from '../MiniMusicPlayer/MusicPlayer';
import Modal from '../Modal/Modal';
import { User } from '../Consts/Icons';
import { Email } from '@mui/icons-material';
 import { useParams ,useNavigate} from 'react-router-dom';
import albums from '../Consts/albums';
 
export default function Album() {
    const classes=useStyles();
    const menuRef=useRef([]);
    const {singername}=useParams();
    const {albumname}=useParams()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [text,setText]=useState('');
    const navigate=useNavigate()
    const getMusicFile = (index) => {
      if (index % 4 === 0) return 'aboozar.mp3';
      if (index % 4 === 1) return 'nariman.mp3';
      if (index % 4 === 2) return 'rafighShahid.mp3';
      if (index % 4 === 3) return 'salamFarmandeh.mp3';
    };
   const [comment, setComment] = useState([ ])
   const handleClick=(e)=>{
e.preventDefault();
setComment([...comment,{name:name,email:email,text:text}])
setText('')
setEmail('')
setName('')
   }
    useEffect(() => {
        const openModal=(event)=>{
            if(event.currentTarget){   event.currentTarget.nextElementSibling.style.display="flex";}
      
        }
      if(menuRef.current){
        for(var i=0;i<menuRef.current.length;i++){
            menuRef.current[i].addEventListener('click',openModal )
        }
      }
    
      return () => {
        if(menuRef.current){
            for(var i=0;i<menuRef.current.length;i++){
                if(menuRef.current[i])
                {menuRef.current[i].removeEventListener('click',openModal)}
            }
        }
      }
    }, [])
    
    const open=()=>{
        document.getElementsByClassName('modal')[0].style.display="flex"
        
    }

    const filteredSings=albums.filter((al)=>{
      const artist=al.artist.toLowerCase().includes(singername.toLowerCase());
      const album=al.album.toLowerCase().includes(albumname.toLowerCase());

      return artist && album;
    })
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
                <h1 className={classes.info_title}>دانلود آلبوم    {albumname} از خواننده عزیز  {singername}</h1>
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
                          {filteredSings.map((item,index)=>{
                            return(
                              <li className={classes.music_list_item}>
                              <span className={classes.music_name}>  آهنگ {item.sing} </span>
                              <MiniMusicPlayer src={`${process.env.PUBLIC_URL}/media/${getMusicFile(index)}`}/>
                              <span className={classes.music_dl}   ref={(el)=>(menuRef.current[index]=el)}>دانلود </span>
                              <Modal src={`${process.env.PUBLIC_URL}/media/${getMusicFile(index)}`} className='modal'/>
                             
                              <span className={classes.music_page_link} onClick={()=>{navigate(`/sing/${item.artist}/${item.sing}`)}}>صفحه موزیک</span>
                              <span className={classes.music_divider}></span>
                            </li>
                            )
                          })}
                            
                         </ul>
                      </div>


                <div>───┤ ♩♬♫♪♭ ├───</div>


            </div>
        </div>
      </div>

      
      <div className={classes.comment_box}>
        <div className={classes.comment_box_body}>
            <div className={classes.comment_header}>
                <div className={classes.hr}></div> 
                <div className={classes.head}>کامنت خود را وارد کنید</div>
                <div className={classes.hr}></div>
            </div>

            <div className={classes.comment_main_box}>
               <div className={classes.user_email_box}>
                <div className={classes.user_input_box}>
                  <span><User/></span>
                  <input type="text" className={classes.user_input} value={name} onChange={(event)=>{setName(event.target.value)}} placeholder='نام کاربری'/>
                </div>

                <div className={classes.email_input_box}>
                  <span><Email/></span>
                  <input type="email" className={classes.email_input} placeholder='ایمیل' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
               </div>
               <div className={classes.text_send_box}>
                <textarea name="" id="" className={classes.comment_text} onChange={(event)=>{setText(event.target.value)}} placeholder='لطفا نظر خود را وارد کنید'></textarea>
                <button className={classes.set_comment} onClick={handleClick}>ثبت نظر</button>
               </div>


               <div className={classes.comments_block_box}>
                {comment.map((item)=>{
                  return(
                    <div className={classes.comment_block}>
                    <span><User/></span>
                    <span>{item.name}</span>
                    <span className={classes.ver_divider}> </span>
                    <span className={classes.sd_comment}>{item.text}</span>
                     
                  </div>
                  )
                })}
                
               </div>
            </div>

        </div>
      </div>


    </div>
  )
}
