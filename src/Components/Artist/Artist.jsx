import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import Box from './Box/Box';
import { useLocation, useParams } from 'react-router-dom';
import sings from '../Consts/sings';
import madahi from '../Consts/madah';
import albums from '../Consts/albums';
import { LeftArrow, RightArrow } from '../Icons/Icons';
import ProcessBar from '../ProcessBar/ProcessBar';
import MainBox from '../MainBox/MainBox';
export default function Artist() { 
    const classes=useStyles();
    const {name}=useParams();
    const path=useLocation()
    const [view, setView] = useState(0)  
    const lastId=sings[sings.length -1].id;
    const singsAdd=madahi.map((sing,index)=>({
      ...sing,
      id:lastId+index+1,
      type:'مداحی',
      singerType:'مداح',
      src:'/images/madah.png',
      album:'',
      track:'yes'
    }))
    const combineSing=[...sings.map((sing)=>({...sing,type:'ترانه',album:'',track:'yes',singerType:'خواننده',src:'/images/singer.png'})),...singsAdd,
      ...albums.map((al)=>({...al,track:'yes',src:'/images/singer.png',type:'ترانه',singerType:'خواننده عزیز'}))
    ];
    const filteredSings=combineSing.filter((sing)=>{
      const artistMatch=sing.artist.toLowerCase().includes(name.toLowerCase());
      return artistMatch;

    })

    const uniqueSings = Array.from(new Set(filteredSings.map(item => `${item.artist}-${item.sing}`)))
        .map(uniqueKey => {
            return filteredSings.find(item => `${item.artist}-${item.sing}` === uniqueKey);
        });
    useEffect(() => {
      const changeViewToOne = () => {
        setView(1);
        // بعد از 1 ثانیه setView(0) را اجرا کنید
        setTimeout(() => {
          setView(0);
        }, 4000);
      };
    
      const timerId = setTimeout(changeViewToOne, 0); 
     window.scrollTo(0,0)
      
    
      return () => {
         clearTimeout(changeViewToOne)
      }
    }, [name,path])
    
    const [currentPage, setcurrentPage] = useState(1)
    const [itemPerPage,setItemsPerPage]=useState(30);
    const [pageToShow,setPageToShow]=useState(3)
    const pagBtnRef = useRef( null)
    const totalPage=Math.ceil(uniqueSings.length/itemPerPage);
    const start=(currentPage -1) * itemPerPage;
    const end=start+ itemPerPage;
    const startPage=currentPage-1
    const endPage=currentPage+pageToShow<totalPage?currentPage+pageToShow:totalPage;
    const handlePageClick=(i)=>{
      setcurrentPage(i);
    }
   

    const renderPag=()=>{
      const pageLinks=[]
      for(let i=1;i<=totalPage;i++){
        pageLinks.push(
          <span className={currentPage===i?classes.pag_cr:classes.pag_btn}  onClick={()=>{handlePageClick(i)}}
          key={i}
           

          >{i}</span>
        )
      }

      return(<> <button className={currentPage===1?classes.pag_block:classes.pag_btn} disabled={currentPage===1}><RightArrow/></button>
      {pageLinks.slice(startPage,endPage)}
      <button className={currentPage===totalPage?classes.pag_block:classes.pag_btn} disabled={currentPage===totalPage}><LeftArrow/></button>
      </>)
    }
  return (
    <div className={classes.root}>
      {view===1 && <ProcessBar/>}
        <div className={classes.header_box}>
            <h1 className={classes.header}>جدید‌ترین اهنگ‌های {name}</h1>
            <p className={classes.desc}>جدید‌ترین آهنگ‌ها  {name}  آهنگ‌های جدید از آلبوم ایکس همینگ در رسانه موزیک ما</p>
        </div>
        {uniqueSings.slice(start,end).map((item,index)=>{
          return(
            <MainBox artist={item.artist} sing={item.sing} type={item.type} singerType={item.singerType} src={item.src} track={item.track} album={item.album}/>
          )
        })}
    
      <div className={classes.pag_box}>
     
      {renderPag()}
     
      </div>
    </div>
  )
}
