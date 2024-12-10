'use client';

import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/redux/provider'
import { ThemeProvider } from '@/components/providers/theme-provider'

export function RootProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </Providers>
    </ClerkProvider>
  );
}
