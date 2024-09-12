'use client';
import { useEffect, useRef, useState } from 'react';

export const LazyMapIframe = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={iframeRef} className="w-full h-full">
      {isInView ? (
        <iframe
          className="w-full h-full"
          loading="lazy"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7369060039cd0e80c294a106e855a50e053215a86afca235bac488aca89e6a93&amp;source=constructor"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
};
