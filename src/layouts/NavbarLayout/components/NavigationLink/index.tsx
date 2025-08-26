'use client';
import type { Route } from 'next';

import type { FC, PropsWithChildren } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { alpha, styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export interface NavigationLinkProps extends PropsWithChildren {
    href: Route;
    as?: string;
}

const StyledLinkText = styled(Typography, {
    shouldForwardProp: prop => prop !== 'highlighted',
})<{ highlighted: boolean }>(({ theme, highlighted }) => ({
    color: highlighted
        ? theme.palette.primary.contrastText
        : alpha(theme.palette.primary.contrastText, 0.6),
    '&:hover': {
        color: theme.palette.primary.contrastText,
    },
    padding: theme.spacing(2, 3),
}));

const NavigationLink: FC<NavigationLinkProps> = ({ href, as, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href} as={as}>
            <StyledLinkText
                highlighted={isActive}
                variant="body1"
                fontWeight={isActive ? 'bold' : 'normal'}
            >
                {children}
            </StyledLinkText>
        </Link>
    );
};

export default NavigationLink;
