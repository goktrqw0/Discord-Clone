'use client';

import { Providers } from '@/redux/provider'
import { ThemeProvider } from '@/components/providers/theme-provider'

export function RootProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Providers>
  );
}
