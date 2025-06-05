import { createContext, useContext, useState, useEffect } from 'react';

import { getUserPreferredTheme } from './utils';

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [activePage, setActivePage] = useState('home');
  const [galleryPagination, setGalleryPagination] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(9);
  const [isDark, setIsDark] = useState(getUserPreferredTheme());

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('darkTheme', isDark);
  }, [isDark]);

  const globalContextValues = {
    activePage,
    setActivePage,
    galleryPagination,
    setGalleryPagination,
    imagesPerPage,
    setImagesPerPage,
    isDark,
    setIsDark,
  };

  return (
    <GlobalContext.Provider value={globalContextValues}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
