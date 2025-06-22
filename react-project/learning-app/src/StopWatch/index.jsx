import "./styles.css";
import { useState, useEffect, useRef, Fragment } from "react";

const StopwatchTimer = ({ timer }) => {
  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60000);
    const seconds = Math.floor((timer % 60000) / 1000);
    // const millisecond = Math.floor((timer % 1000) / 10);
    const millisecond = Math.floor((timer % 1000) / 10);

    return `${minutes} : ${seconds} : ${millisecond}`;
  };

  return (
    <Fragment>
      <h1 data-testid="stop_watch_timer">{formatTime(timer)}</h1>
    </Fragment>
  );
};

export default function Stopwatch() {
  //mm:ss:m
  const [timer, setTimer] = useState(0);
  const [isRunnning, setIsRunnning] = useState(false);
  const intervalRef = useRef(null);
  const currentTimeRef = useRef(null);

  const toggleStartStop = () => {
    setIsRunnning((prev) => !prev);
  };

  const reset = () => {
    setIsRunnning(false);
    setTimer(0);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    currentTimeRef.current = new Date().getTime();
    if (isRunnning) {
      intervalRef.current = setInterval(() => {
        const newTimeStamp = new Date().getTime();
        const diff = newTimeStamp - currentTimeRef.current;
        setTimer(diff);
        // setTimer((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunnning]);

  return (
    <div className="Stopwatch">
      <h1>Stopwatch</h1>
      <StopwatchTimer timer={timer}></StopwatchTimer>
      <StartButton onClick={toggleStartStop} />
      <ResetButton onClick={reset} />
    </div>
  );
}

const StartButton = (props) => (
  <button type="button" data-testid="start_button" {...props}>
    Start / Stop
  </button>
);

// const PauseButton = (props) => (
//   <button type="button" data-testid="pause_button" {...props}>
//     Pause
//   </button>
// );

const ResetButton = (props) => (
  <button type="button" data-testid="reset_button" {...props}>
    Reset
  </button>
);
