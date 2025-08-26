'use client';
import type { Route } from 'next';

import type { FC, PropsWithChildren } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { alpha, styled } from '@mui/material';
import type SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export interface NavigationLinkProps extends PropsWithChildren {
    href: Route;
    as?: string;
    icon?: typeof SvgIcon;
}

const StyledLinkText = styled(Typography, {
    shouldForwardProp: prop => prop !== 'highlighted',
})<{ highlighted?: boolean }>(({ theme, highlighted }) => ({
    color: highlighted
        ? theme.palette.primary.contrastText
        : alpha(theme.palette.primary.contrastText, 0.6),
    '&:hover': {
        color: theme.palette.primary.contrastText,
    },
    padding: theme.spacing(1, 2),
}));

const NavigationLink: FC<NavigationLinkProps> = ({
    href,
    as,
    icon: Icon,
    children,
}) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    const isExternal = href.startsWith('http');
    const relAttribute = isExternal ? 'noopener noreferrer' : undefined;
    const target = isExternal ? '_blank' : undefined;

    return (
        <Link
            href={href}
            as={as}
            rel={relAttribute}
            passHref={isExternal}
            target={target}
        >
            <StyledLinkText
                highlighted={isActive}
                variant="body1"
                fontWeight={isActive ? 'bold' : 'normal'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {children}
                {Icon ? <Icon fontSize="small" sx={{ ml: 1 }} /> : null}
            </StyledLinkText>
        </Link>
    );
};

export default NavigationLink;
