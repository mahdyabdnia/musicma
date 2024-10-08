import React, { useState,useRef, useEffect } from 'react'
import useStyles from './styles'
import Box from './Box/Box';
import sings from '../Consts/sings';
import madahi from '../Consts/madah';
import { collapseClasses } from '@mui/material';
import { Down, LeftArrow, RightArrow } from '../Icons/Icons';
import { MoreHoriz } from '@mui/icons-material';
import ProcessBar from '../ProcessBar/ProcessBar';
import MainBox from '../MainBox/MainBox';
export default function First() {
  const classes=useStyles();
   const lastId=sings[sings.length -1 ].id;
   const singAdd=madahi.map((sing,index)=>({...sing,id:lastId+index+1,type:'مداحی',singerType:'مداح گرامی حاج',src:'/images/madah.png'}));
   const newSing=[...sings.map((sing)=>({...sing,type:'ترانه',singerType:' خواننده عزیز',src:'/images/singer.png'  })),...singAdd]
   const uniqueSings = Array.from(new Set(newSing.map(item => `${item.artist}-${item.sing}`)))
        .map(uniqueKey => {
            return newSing.find(item => `${item.artist}-${item.sing}` === uniqueKey);
        });
        

  const showMenuRef = useRef(null)
  const optionRef=useRef([])
  const pagBtnRef=useRef([])
  const nextBtnRef=useRef(null)
  const preBtnRef=useRef(null)
  const [view,setView]=useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage ,setItemsPerPage]= useState(30);
  const pageToShow=3;
  const [first, setFirst] = useState(false)
  const [last, setLast] = useState(false)
  const totalPage=Math.ceil(uniqueSings.length/itemsPerPage) 

  const handlePageClick=(page)=>{
  setCurrentPage(page);
  window.scrollTo(0,0)
  }

  const nextPage=()=>{


  if(currentPage<totalPage && currentPage!==totalPage){
    setCurrentPage(currentPage+1)
  }
  
  window.scrollTo(0,0)
  }

  const previousPage=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  
    
    if(currentPage===1){
      setFirst(true)
    }
    window.scrollTo(0,0)
  }


  useEffect(() => {
    const changeViewToOne = () => {
      setView(1);
      // بعد از 1 ثانیه setView(0) را اجرا کنید
      setTimeout(() => {
        setView(0);
      }, 4000);
    };
  
    const timerId = setTimeout(changeViewToOne, 0); 
    window.addEventListener('load',changeViewToOne)
   if(nextBtnRef.current){nextBtnRef.current.addEventListener('click',changeViewToOne)}
   if(preBtnRef.current) {preBtnRef.current.addEventListener('click',changeViewToOne)}
    if(pagBtnRef.current){pagBtnRef.current.forEach((element)=>{
   element.addEventListener('click',changeViewToOne)
    })}


   if(optionRef.current) {optionRef.current.forEach((element)=>{
    element.addEventListener('click',changeViewToOne)
    })}
  
    return () => {

      clearTimeout(changeViewToOne);
      if(nextBtnRef.current){nextBtnRef.current.removeEventListener('click',changeViewToOne)}
     if(preBtnRef.current) {preBtnRef.current.removeEventListener('click',changeViewToOne)}
      if(pagBtnRef.current){pagBtnRef.current.forEach((element)=>{
        if(element)
    {  element.removeEventListener('click',changeViewToOne)}
      })}
     window.removeEventListener('load',changeViewToOne)
      if(optionRef.current){optionRef.current.forEach((element)=>{
        if(element)
     {element.removeEventListener('click',changeViewToOne)}
      })}
   
    }
  }, [ ])
  
 
  useEffect(() => {
    const show=(event)=>{
     const menu=event.currentTarget.parentElement.lastElementChild;
      

     menu.style.display=(menu.style.display==='none' || menu.style.display==='')?'flex':'none'
    }
    const setOption=(event)=>{
      const menu=event.currentTarget.parentElement.parentElement;
      menu.style.display="none";
      setItemsPerPage(event.currentTarget.innerHTML)

    }
      
    if(showMenuRef.current){showMenuRef.current.addEventListener('click',show)}
    if(optionRef.current){optionRef.current.forEach((element)=>{
      element.addEventListener('click',setOption)
    })}
    return () => {
    if(showMenuRef.current)  {showMenuRef.current.removeEventListener('click',show)}   
     if(optionRef.current) {optionRef.current.forEach((element)=>{
      if(element){
        element.removeEventListener('click',setOption)
      }
        
      })}
       
      
    }
  }, [])
  

  const start=(currentPage -1) * itemsPerPage;
  const end= start + itemsPerPage;
  const startPage=currentPage-1;
  const endPage=currentPage+pageToShow<totalPage?currentPage+pageToShow:totalPage;
  const renderPagintion=()=>{
    const pageLinks=[];
    for(let i=1;i<=totalPage;i++){
      pageLinks.push(
        <span
            key={i}
            className={currentPage===i ?classes.pag_cr:classes.pag_btn}
            onClick={() => handlePageClick(i)}
            ref={(el)=>(pagBtnRef.current[i]=el)}
          
        >
            {i}
        </span>
    );
    }
   return <> <button className={  currentPage===1?classes.pag_block:  classes.pag_btn} ref={preBtnRef} onClick={previousPage}   disabled={currentPage===1} > <LeftArrow/>  </button>{currentPage!==1 ? pageLinks.slice(0,1) : ''} {currentPage===2 || currentPage===1? '':<span className={classes.pag_between}><MoreHoriz/></span>} {pageLinks.slice(startPage,endPage)} {currentPage===totalPage || currentPage===totalPage-1 ||currentPage===totalPage-2 || currentPage===totalPage-3 || currentPage===totalPage-4  ? '': <span className={classes.pag_between}><MoreHoriz/></span>} {currentPage===totalPage || endPage===totalPage ? '' : pageLinks.slice(totalPage-1,totalPage)}     <button className={currentPage===totalPage?classes.pag_block: classes.pag_btn} onClick={nextPage} ref={nextBtnRef} disabled={currentPage===totalPage} ><RightArrow/></button> </>;
     
      
  }
  return (
    <div className={classes.main}>
      {view===1 && <ProcessBar/>}
      <div className={classes.set_show}><span>تعداد نمایش در صفحه:</span>
      <div className={classes.num_option_box}><span className={classes.num_option } ref={showMenuRef}> <span>{itemsPerPage}</span> <span><Down/></span></span>
      <div className={classes.select_box}>
        <ul className={ classes.option_list}>
          <li className={classes.option_list_item} ref={(el)=>(optionRef.current[0]=el)}>15</li>
          <li className={classes.option_list_item} ref={(el)=>(optionRef.current[1]=el)}>20</li>
          <li className={classes.option_list_item} ref={(el)=>(optionRef.current[2]=el)}>30</li>
          <li className={classes.option_list_item} ref={(el)=>(optionRef.current[3]=el)}>40</li>
        </ul>
      </div>
      </div>
      
      
      </div>
       
       {uniqueSings.slice(start,end).map((item,index)=>{ 
      return(
        <>
      <MainBox artist={item.artist} sing={item.sing}   type={item.type} singerType={item.singerType} src={item.src}/>
      </>
      )
      
    })}
    <div className={classes.pag_box}>
   
    
    {renderPagintion()}

    </div>

  

   
        
    </div>
  )
}
