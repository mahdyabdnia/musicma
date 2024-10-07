import React from 'react'
import useStyles from './styles'
import { Instagram, Twitter } from '../Icons/Icons';
import { PhoneAndroid, WhatsApp } from '@mui/icons-material';
import { Phone } from '../Consts/Icons';

export default function Footer() {
    const classes=useStyles();
    const scel=()=>{
        window.scrollTo(0,0);
    }
  return (
    <div className={classes.root}>
        <div className={classes.right_footer}></div>
        <div className={classes.left_footer}></div>
        <div className={classes.main}>
            <div className={classes.left}>کلیه حقوق این سایت برای رسانه موزیک ‌ما محفوظ است</div>
            <div className={classes.right}>
                <div>راه‌های ارتباطی با ما: </div>
                <div className={classes.site}>
                    <span><Instagram/></span>
                    <span>@music_ma</span>
                </div>

                <div className={classes.site}>
                    <span><Twitter/></span>
                    <span>@music_ma</span>
                </div>

                <div className={classes.site}> 
                    <span><Phone/></span>
                    <span>0930-42-45-455</span>
                </div>
            </div>
        </div>
        <div className={classes.go_up_btn} onClick={scel}>
            <h4>برگشت به اول صفحه</h4>
            <img src={`${process.env.PUBLIC_URL}/images/backtoup.png`} alt=""  className={classes.back_ic}/>
        </div>
      
    </div>
  )
}
