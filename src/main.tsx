import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import theme from './theme';

import '@fontsource/geist/300.css';
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';
import '@fontsource/geist/700.css';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.querySelector('#root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        </ThemeProvider>
    </StrictMode>,
);
