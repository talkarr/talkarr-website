'use client';

import { createTheme } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';

const theme = createTheme({
    typography: {
        fontFamily: 'Geist, Arial, sans-serif',
    },
    cssVariables: {
        colorSchemeSelector: 'class',
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
                    default: '#232728',
                    paper: '#3a3e44',
                },
            },
        },
    },
});

export default theme;
