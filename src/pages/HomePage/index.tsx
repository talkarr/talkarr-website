import type { FC } from 'react';
import { Link } from 'react-router';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage: FC = () => {
    return (
        <Box>
            <Typography>Home Page</Typography>
            <Link to="/foo">Go to Foo Page</Link>
        </Box>
    );
};

export default HomePage;
