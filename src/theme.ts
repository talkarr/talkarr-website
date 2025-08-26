'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Geist, Arial, sans-serif',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#8f64eb',
                },
                secondary: {
                    main: '#5710e6',
                },
                background: {
                    default: '#ede9ff',
                    paper: '#ffffff',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#8f64eb',
                },
                secondary: {
                    main: '#5710e6',
                },
                background: {
                    default: '#181a1b',
                    paper: '#343536',
                },
            },
        },
    },
});

export default theme;
