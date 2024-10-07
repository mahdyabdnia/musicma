import React, { useRef } from 'react'
import useStyles from './styles'
import { Close } from '../Icons/Icons';
import { Download } from '../Consts/Icons';
import classnames from 'classnames'
export default function Modal({className}) {
    const classes=useStyles();
    const closeModal=()=>{
       if(modalRef.current) {modalRef.current.style.display="none" }
    }
    const modalRef=useRef();
    const handleDownloadLink=()=>{
        const link = document.createElement('a');
    link.href = 'media/nariman.mp3'; // Replace with your file path
    link.download = 'nariman.mp3'; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
  return (
    <div className={classnames(classes.modal,className)} ref={modalRef}>
      <div className={classes.modal_content}>
        <button className={classes.close_btn} onClick={closeModal}><Close/></button>
        <div className={classes.head}>لینک‌های دانلود </div>
        <div className={classes.button_box}>
            <button className={classes.btn} onClick={handleDownloadLink}><Download/> دانلود با کیفیت ۱۲۸</button>
            <button className={classes.btn} onClick={handleDownloadLink}><Download/>دانلود با کیفیت ۳۲۰ </button>
        </div>
      </div>
    </div>
  )
}