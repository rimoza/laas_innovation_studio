'use client';

import { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (!target || target.tagName !== 'A') return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Use a more specific type for the event listener
    const handleClick = (e: Event) => {
      if (e instanceof MouseEvent) {
        smoothScroll(e);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;