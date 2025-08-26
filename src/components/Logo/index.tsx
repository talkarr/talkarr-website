import type { FC } from 'react';

import Image from 'next/image';

import LogoImage from '@/assets/logo.png';

export interface LogoProps {
    width?: number;
    height?: number;
    shadow?: boolean;
}

const Logo: FC<LogoProps> = ({ width = 56, height = 56, shadow }) => {
    return (
        <Image
            src={LogoImage}
            alt="Talkarr Logo"
            width={width}
            height={height}
            style={{
                filter: shadow
                    ? 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))'
                    : 'none',
            }}
        />
    );
};

export default Logo;
