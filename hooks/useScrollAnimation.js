"use client";
import { useState, useEffect, useRef } from "react";

export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 보이면 더 이상 관찰하지 않음 (옵션에 따라)
          if (options.once !== false && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (options.once === false) {
          // once가 false일 경우 화면을 벗어나면 다시 숨김
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return { ref, isVisible };
}
