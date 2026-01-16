import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const PromoTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 11, seconds: 53 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const totalSeconds = prev.minutes * 60 + prev.seconds - 1;

                if (totalSeconds <= 0) {
                    return { minutes: 15, seconds: 0 }; // Reset loop
                }

                return {
                    minutes: Math.floor(totalSeconds / 60),
                    seconds: totalSeconds % 60
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="w-full bg-[#FF3B30] text-white py-3 px-4 shadow-md font-bold text-center z-50">
            <div className="flex items-center justify-center gap-3 text-sm sm:text-base tracking-wide">
                <span className="uppercase">Esta oferta termina em:</span>
                <div className="flex items-center gap-2 bg-black/10 px-3 py-1 rounded-md">
                    <Timer className="w-5 h-5 animate-pulse" />
                    <span className="font-mono text-xl leading-none">
                        {formatNumber(timeLeft.minutes)} : {formatNumber(timeLeft.seconds)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PromoTimer;
