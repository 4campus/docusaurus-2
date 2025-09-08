import React, { useEffect } from 'react';

const RefreshOnFirstLoad = () => {
  useEffect(() => {
    if (!localStorage.getItem('hasVisited')) {
      // Mark as visited
      localStorage.setItem('hasVisited', 'true');
      // Trigger a page reload
      window.location.reload();
    }
  }, []);

  return null; // This component does not render anything
};

export default RefreshOnFirstLoad;
