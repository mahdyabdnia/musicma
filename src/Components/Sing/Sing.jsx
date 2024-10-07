import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import { useParams } from 'react-router-dom';
import sings from '../Consts/sings';
import madahi from '../Consts/madah';
import { PlayMusic } from '../Icons/Icons';
import { Download } from '../Consts/Icons';
import { Email, Person } from '@mui/icons-material';
import ProcessBar from '../ProcessBar/ProcessBar';
export default function Sing() {
    const classes=useStyles();
    const {name}=useParams();
    const [comments, setComment] = useState([ ])
    const [username, setName] = useState('')
    const [email,setEmail]=useState('')
    const btnRef = useRef(null)
    const [textArea,setText]=useState('')
    const {singname}=useParams()
    const [view,setView]=useState(0);
    const handleClick=(e)=>{
      e.preventDefault();
     setComment([...comments,{name:username,email:email,comment:textArea}]);
     setName('');
     setEmail('');
     setText('')

    }

    useEffect(() => {
      const changeViewToOne = () => {
         setView(1);
         // بعد از 1 ثانیه setView(0) را اجرا کنید
         setTimeout(() => {
           setView(0);
         }, 1000);
       };
     
       const timerId = setTimeout(changeViewToOne, 0); 
       btnRef.current.addEventListener('click',changeViewToOne);
    
      return () => {
        clearTimeout(timerId)
        btnRef.current.removeEventListener('click',changeViewToOne);
      }
    }, [ ])
    
    const lastId=sings[sings.length-1].id;
    const singsAdd=madahi.map((sing)=>({...sing,id:lastId+1+sing.id,type:'مداحی',singerType:'مداحی',src:'/images/madadh.png'}))

    const combineSings=[...sings.map((si)=>({...si,type:'ترانه',singerType:'خواننده',src:'/images/singer.png'})),...singsAdd]

     const filteredSings=combineSings.filter((sing)=>{
        const artistMatch=sing.artist.toLowerCase().includes(name.toLowerCase());
        const singMatch=sing.sing.toLowerCase().includes(singname.toLowerCase());

        return artistMatch && singMatch;
     })
    
   
  return (
    <div className={classnames('flex flex-col box-border items-center w-full',classes.root)}>
      {view===1 && <ProcessBar/>}
       <div className={classnames('flex flex-col box-border items-center rounded-sm min-h-28 w-full',classes.main)}>
        <div className={classnames('grid items-center box-border w-full ' ,classes.header)}>
            <div className={classnames(classes.header_name)}>1</div>
            <div className={classnames(classes.header_date_inf0)}>2</div>
            <div className={classnames(classes.header_up_type)}>3</div>
        </div>

        <div className={classes.body}>
            <div className={classes.info_box}>
                 {filteredSings.map((item)=>{
                    return(
                        <>
                        <h1 className={classes.info_title}> دانلود {item.type} جدید {item.artist}   </h1>
                        <h3 className={classnames(classes.info_add,'flex-row flex text-center box-border font-normal  ')}>{item.type} {item.sing} از {item.singerType} عزیز به همراه متن {item.type}</h3>
                        
                        </>
                    )
                 })}
                
            </div>

            {filteredSings.map((sing)=>{return(
              <div className={classnames(classes.image_box,'flex flex-row justify-center items-center')}>
              <div className={classes.img_block}>
                 <img src={`${process.env.PUBLIC_URL}${sing.src}`} alt="" className={classes.img}/>
              </div>
         </div>
            )})}



           {filteredSings.map((sing)=>{
            return(
                <div className={classes.btn_box}>
                <button  className={classes.btn} style={{backgroundColor:'#0f8a8a'}}>آرشیو {sing.type} های {sing.artist} </button>
                <button className={classes.btn} style={{backgroundColor:'#0f6d8a'}}><span>پخش آنلاین </span> <span> <PlayMusic/></span></button>
                <button className={classes.btn} style={{backgroundColor:'#8a0f32'}}>
                <span className='border-yellow-100 border-x-4 border-solid'>
               <Download/>
              </span>
                  
                  <span>
                   دانلود با کیفیت ۱۲۸
                  </span>
                 
                

                  
                </button>
                <button className={classes.btn} style={{backgroundColor:'#8a0f32'}}><span ><Download/></span>دانلود با کیفیت ۳۲۰ </button>
            </div>
            )
           })}


           <div className={classes.sing_text_box}>
              <div className={classes.text_box_header}>
              ───┤ ♩♬♫♪♭ ├──────┤ ♩♬♫♪♭ ├──────┤ ♩♬♫♪♭ ├───      
              </div>
              <div className={classes.text_box}>
               <p className={classes.text}>
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه متن ترانه
               </p>
              </div>

              <div className={classes.text_box_header}>
              ───┤ ♩♬♫♪♭ ├──────┤ ♩♬♫♪♭ ├──────┤ ♩♬♫♪♭ ├───   
              </div>
           </div>

            
            
        </div>
       </div>

       <div className={classes.sug_box}>
         <div className={classes.sug_head}>پیشنهاد موزیک ما</div>
         <div className={classes.sug_body}>
             <ul className={classes.sug_list}>
               <li className={classes.sug_list_item}>
                  <div className={classes.sug_img_box}>
                     <img src={`${process.env.PUBLIC_URL}/images/singer.png`} alt=""  className={classes.sug_img} />
                  </div>
                  <div className={classes.sug_item_desc}>
                       دانلود آهنگ جدید از خواننده عزیز کشور آقای


                  </div>
               </li>
             
             </ul>
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
                  <input type="text" className={classes.info_input} placeholder='نام ' value={username} onChange={(e)=>{setName(e.target.value)}}/>
               </div>

               <div className={classes.info_input_box}>
                  <span className={classes.info_icon}>
                     <Email/>
                  </span>
                  <input type="email" className={classes.info_input} placeholder='ایمیل' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               </div>
            </div>

            <div className={classes.comment_text_box}>
               <textarea name="" id="" className={classes.comment_text} value={textArea} onChange={(e)=>{setText(e.target.value)}}></textarea>
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
