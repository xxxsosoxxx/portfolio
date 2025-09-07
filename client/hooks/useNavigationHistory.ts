import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavigationHistory() {
  const location = useLocation();
  const navigationHistory = useRef<string[]>([]);

  useEffect(() => {
    navigationHistory.current.push(location.pathname);
    if (navigationHistory.current.length > 3) {
      navigationHistory.current.shift();
    }
  }, [location]);

  return {
    history: navigationHistory.current,
    previousPath: navigationHistory.current[navigationHistory.current.length - 2],
    currentPath: location.pathname
  };
}
