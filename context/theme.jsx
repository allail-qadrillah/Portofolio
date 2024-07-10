'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';

export default function ThemeProviderContext({ children }) {
  return (
    <ThemeProvider attribute='class' defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
