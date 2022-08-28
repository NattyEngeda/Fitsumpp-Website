import React from 'react'
import ModalTest from '../tests/ModalTest'
import CountUp, { useCountUp } from "react-countup";
// import './styles.css';

export default function Test() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000
  });

  return (
    <div className="App">
      <div className="content" />
      <CountUp end={100} enableScrollSpy />
      <br />
      <span id="counter" />
    </div>
  );
}