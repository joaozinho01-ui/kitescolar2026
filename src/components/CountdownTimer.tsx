import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 5, minutes: 47, seconds: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          // Reset to a new random time when it reaches zero
          return { hours: 5, minutes: 59, seconds: 59 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <div className="countdown-box rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center min-w-[60px] sm:min-w-[80px]">
        <span className="block text-2xl sm:text-4xl font-bold text-primary-foreground font-heading">
          {formatNumber(timeLeft.hours)}
        </span>
        <span className="text-xs sm:text-sm text-primary-foreground/80 uppercase tracking-wider">Horas</span>
      </div>
      <span className="text-2xl sm:text-4xl font-bold text-primary-foreground">:</span>
      <div className="countdown-box rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center min-w-[60px] sm:min-w-[80px]">
        <span className="block text-2xl sm:text-4xl font-bold text-primary-foreground font-heading">
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className="text-xs sm:text-sm text-primary-foreground/80 uppercase tracking-wider">Min</span>
      </div>
      <span className="text-2xl sm:text-4xl font-bold text-primary-foreground">:</span>
      <div className="countdown-box rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center min-w-[60px] sm:min-w-[80px]">
        <span className="block text-2xl sm:text-4xl font-bold text-primary-foreground font-heading urgency-pulse">
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className="text-xs sm:text-sm text-primary-foreground/80 uppercase tracking-wider">Seg</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
