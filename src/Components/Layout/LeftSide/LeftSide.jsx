import React from 'react'
import useStyles from './styles'
import { Divider } from '@mui/material'
import classnames from 'classnames'
import sings from '../../Consts/sings'
import madahi from '../../Consts/madah'
import { useNavigate } from 'react-router-dom'
export default function LeftSide() {
    const classes=useStyles()
    const navigate=useNavigate();
    const combineArray=(arr1,arr2)=>{
      const combine=[];
      const maxLength=Math.max(arr1.length,arr2.length);
      for(let i=0;i<maxLength;i++){
        if(i%2===0){
          combine.push({...arr1[i],id:i,type:'ترانه',singerType:'خواننده'});
        }
        else{
          combine.push({...arr2[i],id:i,type:'مداحی',singerType:'مداح گرامی حاج '});
        }
      }

      return combine;

    }

    const finalSings=combineArray(sings,madahi);


  return (
    <aside className={classes.aside}>

      <div className={classes.side_bar}>
        <div className={classes.header}>
            <Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
<h1 className={classes.head}>پرطرفدارترین‌ها</h1>
<Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/> 
        </div>

      <ul className={classes.music_list}>
        

        {finalSings.slice(200,206).map((item)=>{
          return(
            <li className={classnames(classes.music_list_item,classes.music_item_songs)}
            onClick={()=>{navigate(`/sing/${item.artist}/${item.sing}`)}}
            style={{  backgroundImage:`url('${process.env.PUBLIC_URL}/images/back.png') !important`,}}>
              
               دانلود    &nbsp;
               {item.type}&nbsp;
               {item.sing}
             
            
            </li>
          )
        })}

      </ul>




      </div>

      <div className={classes.side_bar}>
        <div className={classes.header}>
            <Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
<h1 className={classes.head}>پرطرفدارتین آلبوم‌ها</h1>
<Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
        </div>

      <ul className={classes.music_list}>
       {finalSings.slice(1,6).map((item)=>{
          return(
            <li className={classnames(classes.music_list_item,classes.music_item_album)}   onClick={()=>{navigate(`/sing/${item.artist}/${item.sing}`)}}>
                  <span> دانلود </span> &nbsp;
                  {item.type}&nbsp;
             {item.sing}
      </li>
          )
        })} 



      </ul>




      </div>

      <div className={classes.side_bar}>
        <div className={classes.header}>
            <Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
<h1 className={classes.head}>جدید‌ترین آهنگ‌ها</h1>
<Divider orientation='horizontal' style={{width:'70px',border:'4px solid rgba(0,0,0,0.3)'}}/>
        </div>

      <ul className={classes.music_list}>
        {finalSings.slice(1000,1005).map((item)=>{
          return(
            <li className={classnames(classes.music_list_item,classes.music_item_songs)}   onClick={()=>{navigate(`/sing/${item.artist}/${item.sing}`)}}>
              
               دانلود    &nbsp;
               {item.type}&nbsp;
               {item.sing}
             
            
            </li>
          )
        })}
        
       



      </ul>




      </div> 
 
    </aside>
  )
}
