import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import theme from './theme';

import '@fontsource/geist/300.css';
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';
import '@fontsource/geist/700.css';
import { ThemeProvider } from '@mui/material';

createRoot(document.querySelector('#root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
);
