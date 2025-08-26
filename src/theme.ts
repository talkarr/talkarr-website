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
            },
        },
    },
});

export default theme;
