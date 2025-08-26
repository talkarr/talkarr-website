import type { FC } from 'react';

import IconSvg from '@/svg/logo.svg?react';

export interface LogoProps {
    width?: number;
    height?: number;
}

const Logo: FC<LogoProps> = ({ width = 64, height = 64 }) => {
    return <IconSvg width={width} height={height} />;
};

export default Logo;
