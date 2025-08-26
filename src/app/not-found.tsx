import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFoundPage: NextPage = () => (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            404 - Page Not Found
        </Typography>
        <Typography variant="body1">
            The page you are looking for does not exist.
        </Typography>
    </Box>
);

export default NotFoundPage;
