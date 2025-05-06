import { useContext } from 'react';

import { ThemeContext } from '@/app/providers/context/Theme/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
