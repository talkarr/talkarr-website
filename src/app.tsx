import type { FC } from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const App: FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Typography variant="h1">Vite + React</Typography>
            <Box className="card">
                <Button onClick={() => setCount(c => c + 1)}>
                    count is {count}
                </Button>
                <Typography>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </Typography>
            </Box>
            <Typography className="read-the-docs">
                Click on the Vite and React logos to learn more
            </Typography>
        </>
    );
};

export default App;
