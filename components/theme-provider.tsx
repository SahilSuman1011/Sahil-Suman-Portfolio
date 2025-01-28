'use client'; // This line tells Next.js this is a Client Component

import * as React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

// Correct typing for props based on NextThemesProvider
export default function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
