import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import beeps from "../assets/audio/race-start-beeps-125125.mp3";

const Timer = () => {
    const [second,setSecond] = useState(0);
    const [time,setTime] = useState(0);
    const [key,setKey] = useState(0);
    const [playing,setPlaying] = useState(false);
    const hours= String(Math.floor(second / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((second % 3600) / 60)).padStart(2, '0');
    const seconds = String(second % 60).padStart(2, '0');
    const [audio] = useState(new Audio(beeps));

  
  return (
    <div className="timer-container">
      <div className="timer-circle">
       <div className="countdown">
       <CountdownCircleTimer
          key={key}
          isPlaying={playing}
          duration={time}
          colors="rgba(255, 106, 106, 1)"
          strokeWidth={6} 
          size={210}
          onComplete={()=>{setSecond(0);setPlaying(false)}}
        >
          {({ remainingTime }) => {
            if(remainingTime<=3&&playing){
              if (audio.paused) {
                audio.play();
              }
            }
            if(remainingTime === 0){
                  return <div className="remaining-time roboto-400">Time is up</div>
               
            }else{
              const hr = String(Math.floor(remainingTime / 3600)).padStart(2, '0');
              const min = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, '0');
              const sec = String(remainingTime % 60).padStart(2, '0');
          
             return <div className="remaining-time roboto-400">{`${hr}:${min}:${sec}`}</div>
            }
          }}
        </CountdownCircleTimer>
       </div>
      </div>
      <div className="timer-set">
        <div className="time">
            <div className="hour roboto-400">
                <p className="">Hours</p>
                <BiSolidUpArrow onClick={()=>{if(playing) return ;setSecond(second+3600)}}/>
                <div className="set-timer">{hours}</div>
                <BiSolidDownArrow onClick={()=>{
                  if(playing) return ;
                  if(second>3600){
                    setSecond(second-3600);
                  }
                }}/>
            </div>
            <div className="colon">:</div>
            <div className="minute roboto-400">
                <div className="">Minutes</div>
                <BiSolidUpArrow onClick={()=>{if(playing) return ;setSecond(second+60)}}/>
                <div className="set-timer">{minutes}</div>
                <BiSolidDownArrow onClick={()=>{
                  if(playing) return ;
                  if(second>=60){
                    setSecond(second-60);
                  }
                  }}/>
            </div>
            <div className="colon">:</div>
            <div className="second roboto-400">
                <p className="">Second</p>
                <BiSolidUpArrow  onClick={()=>{if(playing) return ;setSecond(second+1)}}/>
                <div className="set-timer">{seconds}</div>
                <BiSolidDownArrow  onClick={()=>{
                  if(playing) return;
                  if(second>0){
                    setSecond(second-1);
                  }
                  }}/>
            </div>
        </div>
        <button className="start" disabled={playing} onClick={()=>{setTime(second);setPlaying(true),setKey((prev)=>prev+1)}}>Start</button>
      </div>
    </div>
  );
};

export default Timer;
