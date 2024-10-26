import React, { useRef,useEffect,useState } from 'react'
import useStyles from './styles'
 
 
import MiniMusicPlayer from '../MiniMusicPlayer/MusicPlayer'; 
import Modal from '../Modal/Modal';
import { User } from '../Consts/Icons';
import { Email,Person } from '@mui/icons-material';

 import { useParams ,useNavigate} from 'react-router-dom';
import albums from '../Consts/albums'; 
 
export default function Album() {
    const classes=useStyles();
    const menuRef=useRef([]);
    const {singername}=useParams();
    const {albumname}=useParams()
    const [username, setName] = useState('')
    const [email,setEmail]=useState('')
    const btnRef = useRef(null)
    const inputRef=useRef([])
    const [textArea,setText]=useState('')
    const [comments, setComment] = useState([ ])
   
    const navigate=useNavigate()
    const getMusicFile = (index) => {
      if (index % 4 === 0) return 'aboozar.mp3';
      if (index % 4 === 1) return 'nariman.mp3';
      if (index % 4 === 2) return 'rafighShahid.mp3';
      if (index % 4 === 3) return 'salamFarmandeh.mp3';
    };
   
   const handleClick=(e)=>{
e.preventDefault();
setComment([...comments,{name:username,email:email,text:textArea}])
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

    const newAlbum=albums.map((al)=>({...al,type:'ترانه',singerType:'خواننده',src:'images/singer.png'}))

    const filteredSings=newAlbum.filter((al)=>{
      const artist=al.artist.toLowerCase().includes(singername.toLowerCase());
      const album=al.album.toLowerCase().includes(albumname.toLowerCase());

      return artist && album;
    })
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.header_info}>
            <div className={classes.info_one}>دانلود آلبوم {albumname}</div>
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
                              <span className={classes.music_name}>  آهنگ {item.sing} از آلبوم {item.album} اثر {item.artist}</span>
                              <MiniMusicPlayer src={`${process.env.PUBLIC_URL}/media/${getMusicFile(index)}`}/>
                              <span className={classes.music_dl}   ref={(el)=>(menuRef.current[index]=el)}>دانلود {item.type} {item.sing}</span>
                              <Modal src={`${process.env.PUBLIC_URL}/media/${getMusicFile(index)}`} className='modal'/>
                             
                              <span className={classes.music_page_link} onClick={()=>{navigate(`/sing/${item.artist}/${item.sing}`)}}>صفحه {item.type} </span>
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
         <div className={classes.send_comment_box}>
            <div className={classes.comment_header}>
               <hr className={classes.hr}/>
               <h6>کامنت خود را وارد کنید </h6>
               <hr className={classes.hr} />
            </div>
            <div className={classes.sender_info_box}>
               <div className={classes.info_input_box}>
                  <span className={classes.info_icon}>
                     <Person/>
                  </span>
                  <input type="text" className={classes.info_input} placeholder='نام ' ref={(el)=>(inputRef.current[0]=el)} value={username} onChange={(e)=>{setName(e.target.value)}}/>
               </div>

               <div className={classes.info_input_box}>
                  <span className={classes.info_icon}>
                     <Email/>
                  </span>
                  <input type="email" className={classes.info_input} placeholder='ایمیل' ref={(el)=>(inputRef.current[1]=el)} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               </div>
            </div>

            <div className={classes.comment_text_box}>
               <textarea name="" id="" className={classes.comment_text} value={textArea} onChange={(e)=>{setText(e.target.value)}} placeholder='لطفا نظر خود را وارد کنید'></textarea>
               <button className={classes.comment_send_btn} onClick={handleClick} ref={btnRef}>ارسال نظر</button>
            </div>
         </div>

          
         <div className={classes.comments_show_box}>
            <ul className={classes.comments_list}>
             

               {comments.map((item)=>{
                  return(
                     <li className={classes.comment_list_item}>
                     <span className={classes.sender_name}>  <Person/>   {item.name}</span>
                     <hr className={classes.col}/>
                     <span className={classes.comment}> {item.comment}</span>
                  </li>
                  )
               })}
            </ul>
         </div>


       </div>


    </div>
  )
}
