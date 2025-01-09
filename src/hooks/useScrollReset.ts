import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);
}