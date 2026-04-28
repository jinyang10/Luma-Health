"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// custom wrapper component that:
// accepts the same props as next-themes' ThemeProvider
// passes those props through
// renders its children inside the provider

// used in global layout.tsx to wrap entire application in ThemeProvider
export function ThemeProvider(
    {children, 
        ...props} : React.ComponentProps<typeof NextThemesProvider>) {
        return (
        <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
        >
        {children}
        </NextThemesProvider>
        )
    }