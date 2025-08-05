"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    
    // Don't observe if ref not set or already frozen at visible
    if (!node || (freezeOnceVisible && isVisible)) {
      return;
    }

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, observerParams);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return [ref, isVisible];
}