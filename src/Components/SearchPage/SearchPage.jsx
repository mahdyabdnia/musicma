import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import { useParams } from 'react-router-dom'
import { Down, LeftArrow, RightArrow } from '../Icons/Icons';
import Box from './Box/Box';
import sings from '../Consts/sings'
import madahi from '../Consts/madah';
import { MoreHoriz, Spa } from '@mui/icons-material';
import ProcessBar from '../ProcessBar/ProcessBar';
export default function SearchPage() {
  const {text}=useParams();
  const selectRef=useRef(null);
  const selectShowRef=useRef(null);
  const nextBtnRef = useRef(null)
  const preBtnRef=useRef(null)
  const pagBtnRef=useRef([]);
  const [view, setView] = useState(0)
  const optionRef=useRef([]);
  const optionShowRef=useRef([]); 
  const [optionText, setOptionText] = useState('همه')
  const [filterType, setFilterType] = useState('all')
  const lastId=sings[sings.length-1].id;
  const singAdd=madahi.map((sing,index)=>({
    ...sing,
    id:lastId+index+1,
    type:'مداحی',
    singerType:'مداح اسلام',
    src:'/images/madah.png'
  }))
  const newSing=[...sings.map((sing)=>({...sing,type:'ترانه',singerType:'خواننده عزیز',src:'/images/singer.png'})),...singAdd]
  const filteredSings=newSing.filter((sing)=>{
    const artistMatch=sing.artist.toLowerCase().includes(text.toLowerCase());
    const singMatch=sing.sing.toLowerCase().includes(text.toLowerCase());
    if (filterType === 'all') {
      return artistMatch || singMatch;
  } else if (filterType === 'artist') {
      return artistMatch;
  } else if (filterType === 'sing') { 
      return singMatch;
  }
  return false;

  }) 

  const uniqueSings = Array.from(new Set(filteredSings.map(item => `${item.artist}-${item.sing}`)))
        .map(uniqueKey => {
            return filteredSings.find(item => `${item.artist}-${item.sing}` === uniqueKey);
        });
    const classes=useStyles()
  
   
    const [itemPerPage, setItemPerPage] = useState(30);
    const [pageToShow,setPageToShow]=useState(5);
    const totalPage=Math.ceil(uniqueSings.length/itemPerPage)

   const [currentPage,setCurrentPage]=useState(1)
   const start=(currentPage-1)*itemPerPage;
   const end=start+itemPerPage;
    
   const nextPage=()=>{
    if(currentPage<totalPage){
      setCurrentPage(currentPage+1)
      window.scrollTo(0,0)
      

    
    }
    
   }
   const lastPage=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
      window.scrollTo(0,0)
    }
   
   }
 
    const reset=()=>{
      setFilterType('all');
      setOptionText('همه')
    }
    useEffect(() => {
         const openClose=(event)=>{
          const option=  event.currentTarget.nextElementSibling;
          option.style.display = (option.style.display === 'none' || option.style.display === '') ? 'flex' : 'none';
         }
         
        if(selectRef.current){  selectRef.current.addEventListener('click',openClose);}
    
      return () => {
     if(selectRef.current){   selectRef.current.removeEventListener('click',openClose)}
      }
    }, [])

    useEffect(() => {
      const openAndClose=(event)=>{
        const menu=event.currentTarget.nextElementSibling;
        menu.style.display=(menu.style.display==='none' || menu.style.display==='')? 'flex' : 'none';
      }
      const close=(event)=>{
     const menu=event.currentTarget.parentElement.parentElement;
     menu.style.display=(menu.style.display==='none' || menu.style.display==='')? 'flex' : 'none';
     setItemPerPage(event.currentTarget.innerHTML);
      }
     if(selectShowRef.current){  selectShowRef.current.addEventListener('click',openAndClose);}
     if(optionShowRef.current){
      optionShowRef.current.forEach((element)=>{
      if(element) {element.addEventListener('click',close)}
      }) }
    
      return () => {
        if(selectShowRef.current){   selectShowRef.current.removeEventListener('click',openAndClose);}
       if(optionShowRef.current) { optionShowRef.current.forEach((element)=>{
        if(element)  {element.removeEventListener('click',close)}
         })}
      }
    }, [ ])
    

    useEffect(() => {
      const setOption=(event)=>{
      const op=event.currentTarget.parentElement.parentElement.previousElementSibling.firstElementChild;
      const opMenu=event.currentTarget.parentElement.parentElement;
      setOptionText(event.currentTarget.innerHTML);
      opMenu.style.display="none";
      }
      if(optionRef.current){
      optionRef.current.forEach((element)=>{
      if(element) {element.addEventListener('click',setOption)}
      }) }
    
      return () => {
        if(optionRef.current){
       optionRef.current.forEach((element)=>{
        if(element) {element.removeEventListener('click',setOption)}
       }) }
      }
    }, [])
    
    const handlePage=(i)=>{
      setCurrentPage(i)
      window.scrollTo(0,0)
    }
    const startPage=currentPage-1;
    const endPage= startPage+pageToShow<totalPage?startPage+pageToShow:totalPage;

    const renderingPagging=()=>{
      const pushLink=[];
      for(let i=1;i<=totalPage;i++){
        pushLink.push(
          <span className={currentPage===i ?classes.pag_cr:classes.pag_btn} key={i} ref={(el)=>(pagBtnRef.current[i]=el)} onClick={()=>{handlePage(i)}}>
            {i}
          </span>
        )
      }
      const renderMoreIndicator = (condition) => (
        condition ? <span className={classes.pag_between}><MoreHoriz /></span> : null
      );

      return(<>
      <button disabled={currentPage===1} className={currentPage===1?classes.pag_block:classes.pag_btn} onClick={lastPage} ref={preBtnRef}><LeftArrow/></button>
      {(currentPage!==1?pushLink.slice(0,1):'')}
      {currentPage===1 ||currentPage===2?'':<span className={classes.pag_between}><MoreHoriz/></span>}
      {currentPage!==1||currentPage!==2? pushLink.slice(startPage,endPage):pushLink.slice(startPage,endPage+2)}
      {currentPage===totalPage || currentPage ===totalPage-1 ||endPage===totalPage ?'':<span className={classes.pag_between}><MoreHoriz/></span>}
      {currentPage===totalPage || endPage===totalPage?'':pushLink.slice(totalPage-1,totalPage)} 
       <button className={currentPage===totalPage?classes.pag_block: classes.pag_btn} onClick={nextPage} ref={nextBtnRef} disabled={currentPage===totalPage}><RightArrow/></button>
       </>)
    }

    useEffect(() => {
      const changeViewToOne = () => {
        setView(1);
        // بعد از 1 ثانیه setView(0) را اجرا کنید
        setTimeout(() => {
          setView(0);
        }, 4000);
      };
    
      const timerId = setTimeout(changeViewToOne, 1000); // ذخیره شناسه تایمر
    
     if(nextBtnRef.current) {nextBtnRef.current.addEventListener('click', changeViewToOne);}
      if(preBtnRef.current) {preBtnRef.current.addEventListener('click', changeViewToOne);} // اضافه کردن لیسنر
     if(pagBtnRef.current) {pagBtnRef.current.forEach((element)=>{
      if(element)  {element.addEventListener('click',changeViewToOne)}
      }) }  

     if(optionRef.current) {optionRef.current.forEach((element)=>{
  if(element) {element.addEventListener('click',changeViewToOne)}
      })}
     if(optionShowRef.current) {optionShowRef.current.forEach((element)=>{
  if(element){element.addEventListener('click',changeViewToOne)}
      })}
      return () => {
        clearTimeout(timerId); // پاک کردن تایمر
       if(nextBtnRef.current) {nextBtnRef.current.removeEventListener('click', changeViewToOne);}
       if(preBtnRef.current) {preBtnRef.current.removeEventListener('click', changeViewToOne);}  // حذف لیسنر
       if( pagBtnRef.current) {pagBtnRef.current.forEach((element)=>{
        if(element)  {element.removeEventListener('click',changeViewToOne)}
        })}
        
       if(optionRef.current) {optionRef.current.forEach((element)=>{
         if(element) {element.removeEventListener('click',changeViewToOne)}
             })}
      if(optionShowRef.current)      { optionShowRef.current.forEach((element)=>{

      if(element)   {element.removeEventListener('click',changeViewToOne)}
             }) }
      };
    }, []);
    
   
    
  return (
    <div className={classes.root}>
   {view===1 &&  <ProcessBar/>} 
        <div className={classes.header}>
            <h1>جستجوی:{text} </h1>
        </div>
        <div className={classes.filter_box}>
            <div className={classes.filter}>
              <span ref={selectRef}>
              <span> فیلتر براساس : {optionText}</span>
              <span><Down/></span></span>  
                <div className={classes.filters_box}>
                    <ul className={classes.option_list}>
                        <li className={classes.option_list_item} ref={(el)=>(optionRef.current[0]=el)} onClick={()=>{setFilterType('artist')}}>نام خواننده</li>
                        <li className={classes.option_list_item} ref={(el)=>(optionRef.current[1]=el) } onClick={()=>{setFilterType('sing')}}>نام آهنگ</li>
                        
                    </ul>
                </div>
            </div>
            <div className={classes.show_filter}>
             <span>تعداد نمایش:</span>
             <div className={classes.filter}>
              <span ref={selectShowRef} className={classes.show_filter_select}>
                <span>{itemPerPage}</span>
                <span><Down/></span>
              </span>
              <div className={classes.filters_box}>
                <ul className={classes.option_list}>
                  <li className={classes.option_list_item} ref={(el)=>(optionShowRef.current[0]=el)}>15</li>
                  <li className={classes.option_list_item} ref={(el)=>(optionShowRef.current[1]=el)}>20</li>
                  <li className={classes.option_list_item} ref={(el)=>(optionShowRef.current[2]=el)}>30</li>
                  <li className={classes.option_list_item} ref={(el)=>(optionShowRef.current[3]=el)}>40</li>
                   </ul>
              </div>
             </div>
            </div>

            <button className={classes.filter_btn} onClick={reset}>بازنشانی فیلتر</button>
        </div>
        {view===0 && <>
         {uniqueSings.slice(start,end).map((item)=>{
          return(
            <>
            <Box artist={item.artist} sing={item.sing} type={item.type} singerType={item.singerType} src={item.src}/>
            </>
          )
         })}

         <div className={classes.pag_box}>
          
          {renderingPagging()}
        
         </div>
         {endPage}/{startPage}/{currentPage}/{totalPage}/{start}/{end}
         </> }
      
    </div>
  )
}
