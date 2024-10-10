import React, { useRef, useState,useEffect } from 'react'
import { PlayCircle } from 'react-feather'
import { MuteIcon, Pause, VolumeIcon } from '../../Icons/Icons'
import useStyles from './styles'
import { Close } from '../../Consts/Icons'
import classnames from 'classnames'

export default function MusicPlayer({className}) {
    const [progress, setProgress] = useState(0);
    const [progressVlm, setProgressVlm] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume,setVolume]=useState(0.5);
    const [percentBar,setPercentBar]=useState(0)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };
    const timePerBar=(time,max)=>{
        const percent=Math.ceil((time*100)/max)
        setProgress(percent)
    }
    const barToTime=(bar)=>{
        const time=Math.ceil((bar * duration) /100)
        setCurrentTime(time)
        if(music.current){
            music.current.currentTime=time;
        }
       
       
    }
    let isDragging = false;
    let isDrag=false;

    const handleLoadedMetadata = () => {
        if (music.current) {
            setDuration(music.current.duration);
        }
    };

    const handleTimeUpdate = () => {
        if (music.current) {
            setCurrentTime(music.current.currentTime);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (music.current) {
                setCurrentTime(music.current.currentTime);
                timePerBar(music.current.currentTime,music.current.duration);
              
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
   
   

    const updateProgressBar = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const width = Math.min((offsetX / rect.width) * 100, 100);
        setProgress(width);
        barToTime(width)

    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            updateProgressBar(e);
        }
    };
    const updateVlmProgressBar = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const width = Math.min((offsetX / rect.width) * 100, 100);
        setProgressVlm(width);
        const vlm=offsetX/rect.width;
        setVolume(vlm);
        if(music.current
        ){
            music.current.volume=volume;
        }
       
    };

    const handleVlmMouseMove = (e) => {
        if (isDrag) {
            updateVlmProgressBar(e);
        }
    };
   
    const classes=useStyles()
    const music = useRef(null)
    const musicPlayerCom = useRef(null)
   
    const [plyBtn, setPlyBtn] = useState(true)
    const [muteBtn , setMuteBtn]=useState(false)

    const closeMusicPlayer=()=>{
        if(music.current){
            music.current.pause();
        }
        if(musicPlayerCom.current){
   
     musicPlayerCom.current.style.display="none"}
    }
     
    const playSound=()=>{
        if(music.current){
        if(music.current.paused){
            music.current.play()
            setPlyBtn(false)
            
        }
        else if(music.current.ended){
            setPlyBtn(true)
        }
        else{
            music.current.pause()
            setPlyBtn(true)
        } }
            }

    const muteSound=()=>{
        if(music.current){
        if(music.current.muted===true){
            music.current.muted=false
            setMuteBtn(false)

        }
        else{
            music.current.muted=true
            setMuteBtn(true)
        } }
    }

    
    
  return (
    <div className={classnames(classes.root,className)} ref={musicPlayerCom}>
      <audio   ref={music}  onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}>
      <source  src={`${process.env.PUBLIC_URL}/media/nariman.mp3`}   type="audio/mpeg"/>
      </audio>
     
      <div className={classes.progress}  onMouseDown={() => (isDragging = true)}
            onMouseUp={() => (isDragging = false)}
            onMouseMove={handleMouseMove}>
        <div className={classes.bar} style={{ width: `${progress}%` }}></div>
      </div>
     

   
     <div className={classes.tool_bar}>
      
     <button className={classes.close_btn} onClick={closeMusicPlayer}><Close/></button>

     <button onClick={playSound} className={classes.play_pause_btn}>
        {plyBtn===true &&  <PlayCircle/>}
        {plyBtn===false &&  <Pause/>}
       
      </button>

      <div className={classes.volume_box}>
        <button className={classes.volume_btn} onClick={muteSound}>
            {muteBtn===false &&  <VolumeIcon/> }
            {muteBtn===true &&  <MuteIcon/> }
           
        </button>

        <div className={classes.vlm_progress} onMouseDown={() => (isDrag = true)}
            onMouseUp={() => (isDrag = false)}
            onMouseMove={handleVlmMouseMove}>
        <div className={classes.vlm_bar} style={{ width: `${progressVlm}%` }}></div>
      </div>

      </div>

      <div className={classes.time_box}>
        <span>{currentTime ? formatTime(currentTime) : ' 0:00'}

        </span>
        <span>/</span>
        <span>{duration ? formatTime(duration) : '0:00'}</span>
      </div>

     </div>
       
    </div>
  )
}