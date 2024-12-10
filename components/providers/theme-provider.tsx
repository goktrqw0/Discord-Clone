'use client';

import { useAppSelector } from "@/redux/hooks";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
}
