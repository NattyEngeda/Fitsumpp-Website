import React from 'react'
import CountUp, { useCountUp } from "react-countup";

import VisibilitySensor from 'react-visibility-sensor';

export default function MiniCardSection8(props) {
    let nid = 'counter' + props.id;
    useCountUp({
      ref: "counter"+props.id,
      end: props.num,
      enableScrollSpy: false,
      scrollSpyDelay: props.time
    });
  
    return (
      <div className="flex flex-row gap-1">
        <span id={nid} />
        <span>+</span>
      </div>
    );
  }