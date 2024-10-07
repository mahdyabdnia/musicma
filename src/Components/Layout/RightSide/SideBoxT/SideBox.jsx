import React from 'react'
import useStyles from './styles'
import madahi from '../../../Consts/madah'
import { useNavigate } from 'react-router-dom'
export default function SideBoxT() {
    const classes=useStyles()
    const navigate=useNavigate()
    const singers=[{id:'0',name:'مهدی یغمایی'},{id:'1',name:'علی لهراسبی'},{id:'2',name:'مهدی مقدم'},
        {id:'3',name:'مهدی یراحی'}, {id:'4',name:'علی زندوکیلی'},{id:'5',name:'مجید اخشابی'},
        {id:'6',name:'جواد یساری'}, {id:'7',name:'فریدون آسرایی'},{id:'8',name:'مهراد جم'},{id:'9',name:'فریدون بیگدلی'},
        {id:'10',name:'غلامرضا صنعتگر'},{id:'11',name:'حمید حامی'},{id:'12',name:'همایون شجریان'},{id:'12',name:'حجت اشرف زاده'},
        {id:'13',name:'سالار عقیلی '},{id:'14',name:'رضا بهرام'},{id:'15',name:'عرفان طهماسبی'},
    ]
    const artistCount = madahi.reduce((acc, { artist }) => {
        acc[artist] = (acc[artist] || 0) + 1;
        return acc;
    }, {});
    
    // مرحله 2: تبدیل به آرایه و مرتب‌سازی بر اساس تعداد آهنگ‌ها
    const sortedArtists = Object.entries(artistCount)
        .map(([artist, count]) => ({ artist, count }))
        .sort((a, b) => b.count - a.count);
    
    // مرحله 3: انتخاب ۳۰ خواننده با بیشترین آهنگ
    const topArtists = sortedArtists.slice(0, 30);
    
  return (
    <div className={classes.box}>
        <div className={classes.header}>
         <h2>اسامی مداحان</h2>
        <img src={`${process.env.PUBLIC_URL}/images/madah.png`} alt=""  className={classes.header_img}/>
        </div>

        <div className={classes.list_box}>

            <ul className={classes.singer_list}>
                {topArtists.map((item)=>{
                    return(
                        <li className={classes.singer_list_item}  onClick={()=>{navigate(`/artist/${item.artist}`)}}>{item.artist}</li>
                    )
                })}
               
                
            </ul>
        </div>
       
       
      
    </div>
  )
}
