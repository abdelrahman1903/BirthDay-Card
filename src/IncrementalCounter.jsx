// src/IncrementalCounter.js
import React, { useState, useEffect } from 'react';

const IncrementalCounter = ({ startDate }) => {
  const [timeDifference, setTimeDifference] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeDifference = () => {
      const start = new Date(startDate).getTime();
      const now = Date.now();
      const diffInSeconds = Math.floor((now - start) / 1000);

      const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
      const remainingSecondsAfterYears = diffInSeconds % (3600 * 24 * 365);

      const days = Math.floor(remainingSecondsAfterYears / (3600 * 24));
      const remainingSecondsAfterDays = remainingSecondsAfterYears % (3600 * 24);

      const hours = Math.floor(remainingSecondsAfterDays / 3600);
      const remainingSecondsAfterHours = remainingSecondsAfterDays % 3600;

      const minutes = Math.floor(remainingSecondsAfterHours / 60);
      const seconds = remainingSecondsAfterHours % 60;

      setTimeDifference({ years, days, hours, minutes, seconds });
    };

    calculateTimeDifference(); // Initial calculation
    const interval = setInterval(calculateTimeDifference, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [startDate]);

  return (
    <div>

      {/* <p>Counting from {startDate}:</p> */}
      <strong>
        {timeDifference.years} years : {timeDifference.days} days : {timeDifference.hours} hours :{' '}
        {timeDifference.minutes} minutes : {timeDifference.seconds} seconds
      </strong>
    </div>
  );
};

export default IncrementalCounter;
