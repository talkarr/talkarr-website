import vike from 'vike/plugin';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default {
    plugins: [react(), vike(), svgr()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
};
