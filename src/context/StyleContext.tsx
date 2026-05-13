import { createContext, useContext, useState, ReactNode } from 'react';

type StyleContextType = {
  activeColor: string | null;
  setActiveColor: (color: string) => void;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export function StyleProvider({ children }: { children: ReactNode }) {
  // Default to the first style's color or coastal-navy if none is set
  const [activeColor, setActiveColor] = useState<string | null>('#D83D50');

  return (
    <StyleContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyleColor() {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error('useStyleColor must be used within a StyleProvider');
  }
  return context;
}
