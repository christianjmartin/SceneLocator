import { createContext, useContext, useState } from 'react';

const PageContext = createContext(null);

export function PageProvider({ children }) {
  const [currQuiz, setCurrQuiz] = useState(0);

  return (
    <PageContext.Provider value={{ currQuiz, setCurrQuiz }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (context === null) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
}