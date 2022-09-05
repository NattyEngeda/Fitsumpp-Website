import React,{useState} from 'react'
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

export default function MiniCardSection8(props) {
  const [counterOn, setCounterOn] = useState(false)
  let nid = 'counter' + props.id;

  return (
    <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
      <div className="flex flex-row gap-1">
        {counterOn &&   
        <CountUp start={0} end={props.num} duration={props.duration} delay={1}/>
        }
        <span>+</span>
      </div>
    </ScrollTrigger>

    
  );
}