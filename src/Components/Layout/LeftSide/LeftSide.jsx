import React from 'react'
import useStyles from './styles'
import { Divider } from '@mui/material'
import classnames from 'classnames'
export default function LeftSide() {
    const classes=useStyles()
  return (
    <aside className={classes.aside}>
      <div className={classes.side_bar}>
        <div className={classes.header}>
            <Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
<h1 className={classes.head}>پرطرفدارترین‌ها</h1>
<Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/> 
        </div>

      <ul className={classes.music_list}>
        <li className={classnames(classes.music_list_item,classes.music_item_songs)} style={{  backgroundImage:`url('${process.env.PUBLIC_URL}/images/back.png') !important`,}}> دانلود آهنگ </li>



      </ul>




      </div>

      <div className={classes.side_bar}>
        <div className={classes.header}>
            <Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
<h1 className={classes.head}>پرطرفدارتین آلبوم‌ها</h1>
<Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
        </div>

      <ul className={classes.music_list}>
        <li className={classnames(classes.music_list_item,classes.music_item_album)}  > دانلود آهنگ </li>



      </ul>




      </div>

      <div className={classes.side_bar}>
        <div className={classes.header}>
            <Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
<h1 className={classes.head}>جدید‌ترین آهنگ‌ها</h1>
<Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
        </div>

      <ul className={classes.music_list}>
        <li className={classnames(classes.music_list_item,classes.music_item_songs)}  > دانلود آهنگ </li>
        <li className={classnames(classes.music_list_item,classes.music_item_songs)}  > دانلود آهنگ </li> 
         <li className={classnames(classes.music_list_item,classes.music_item_songs)}  > دانلود آهنگ </li>
         <li className={classnames(classes.music_list_item,classes.music_item_songs)}  > دانلود آهنگ </li>
         <li className={classnames(classes.music_list_item,classes.music_item_songs)}  > دانلود آهنگ </li>
         <li className={classnames(classes.music_list_item,classes.music_item_songs)}  > دانلود آهنگ </li>



      </ul>




      </div> 
 
    </aside>
  )
}
