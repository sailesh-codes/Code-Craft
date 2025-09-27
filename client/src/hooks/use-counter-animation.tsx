import { useRef, useEffect } from "react";

export function useCounterAnimation(target: number, duration: number = 2000, decimalPlaces: number = 0) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              const displayValue = decimalPlaces > 0 
                ? current.toFixed(decimalPlaces)
                : Math.floor(current).toString();
              
              element.textContent = displayValue + (element.textContent?.includes('+') ? '+' : '');
            }, 16);
            
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, decimalPlaces]);

  return elementRef;
}
