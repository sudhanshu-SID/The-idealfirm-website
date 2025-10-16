
import { useState, useEffect, RefObject } from 'react';

const useCountUp = (end: number, ref: RefObject<HTMLElement>, duration: number = 2000): number => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frameId: number;
        let startTimestamp: number | null = null;
        let startCount = 0;

        const animate = (timestamp: number) => {
            if (!startTimestamp) {
                startTimestamp = timestamp;
            }
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = startCount + (end - startCount) * progress;
            setCount(currentCount);

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCount = 0; // Reset on re-entry if desired
                    setCount(0);
                    startTimestamp = null;
                    frameId = requestAnimationFrame(animate);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [end, duration, ref]);

    return count;
};

export default useCountUp;