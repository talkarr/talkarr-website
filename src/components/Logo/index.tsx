import type { FC } from 'react';

import Image from 'next/image';

import LogoImage from '@/assets/logo.png';

export interface LogoProps {
    width?: number;
    height?: number;
}

const Logo: FC<LogoProps> = ({ width = 64, height = 64 }) => {
    return (
        <Image
            src={LogoImage}
            alt="Talkarr Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;
