import type { FC } from 'react';

import NavbarLayout from '@/layouts/NavbarLayout';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFoundPage: FC = () => {
    return (
        <NavbarLayout>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    404 - Page Not Found
                </Typography>
                <Typography variant="body1">
                    The page you are looking for does not exist.
                </Typography>
            </Box>
        </NavbarLayout>
    );
};

export default NotFoundPage;
