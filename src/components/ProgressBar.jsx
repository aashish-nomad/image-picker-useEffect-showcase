import { useEffect, useState } from "react";

export default function ProgressBar({TIMER}) {

    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime(prevTimer => {
          return prevTimer - 100
        });
      }, 100);

      return () => {
        clearInterval(interval);
      }
    }, []);

  return <progress value={remainingTime} max={TIMER} />
}