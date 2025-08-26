import type { Metadata } from 'next';

import type { FC, PropsWithChildren } from 'react';

import { Geist, Geist_Mono } from 'next/font/google';

import NavbarLayout from '@/layouts/NavbarLayout';
import theme from '@/theme';

import '@/global.css';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: {
            absolute: 'Talkarr',
            template: `%s | Talkarr`,
        },
        description:
            'Download and manage your personal collection of chaos talks.',
    };
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
    return (
        <html lang="en" /*lang={i18n.language}*/>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <NavbarLayout>{children}</NavbarLayout>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;
