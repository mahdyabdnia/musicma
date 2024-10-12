import React,{useEffect,useRef} from 'react'
import useStyles from './styles'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import MicIcon from '@mui/icons-material/Mic';
export default function MenuBox({refer,list}) { 
    const classes=useStyles()
    const itemRef=useRef(null)
    const path=useLocation();
    const params=useParams();
    useEffect(() => {
      const close = (event) => {
          const parent = event.currentTarget.parentElement.parentElement;
          parent.style.display = "none";
      };

      if (itemRef.current) {
          itemRef.current.forEach((element) => {
              element.addEventListener('click', close);
          });
      }

      return () => {
          if (itemRef.current) {
              itemRef.current.forEach((element) => {
                  element.removeEventListener('click', close);
              });
          }
      };
  }, [path,params]);
    
    const singers=[{id:'0',name:'مهدی یغمایی'},{id:'1',name:'علی لهراسبی'},{id:'2',name:'مهدی مقدم'},
      {id:'3',name:'مهدی یراحی'}, {id:'4',name:'علی زندوکیلی'},{id:'5',name:'مجید اخشابی'},
      {id:'6',name:'جواد یساری'}, {id:'7',name:'فریدون آسرایی'},{id:'8',name:'مهراد جم'},{id:'9',name:'فریدون بیگدلی'},
      {id:'10',name:'غلامرضا صنعتگر'},{id:'11',name:'حمید حامی'},{id:'12',name:'همایون شجریان'},{id:'12',name:'حجت اشرف زاده'},
      {id:'13',name:'سالار عقیلی '},{id:'14',name:'رضا بهرام'},{id:'15',name:'عرفان طهماسبی'},]
    const navigate=useNavigate();
  return (
    <div className={classes.menu} ref={refer}>
      <ul className={classes.menu_list}>
        {list.map((item)=> {
          return(
            <li className={classes.menu_list_item}   onClick={()=>{navigate(`/artist/${item.name}`)}}> <span>
             < MicIcon/>  
            </span>  {item.name}  </li>
          )
        })}
        
      </ul>
    </div>
  )
}
