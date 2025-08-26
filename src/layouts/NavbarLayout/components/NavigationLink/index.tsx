import type { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

import { alpha, styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export interface NavigationLinkProps extends PropsWithChildren {
    to: string;
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
    textDecoration: 'none',
    padding: theme.spacing(2, 3),
}));

const NavigationLink: FC<NavigationLinkProps> = ({ to, children }) => (
    <NavLink
        to={to}
        style={{
            textDecoration: 'none',
            padding: 0,
        }}
    >
        {({ isActive }) => (
            <StyledLinkText
                highlighted={isActive}
                variant="body1"
                fontWeight={isActive ? 'bold' : 'normal'}
            >
                {children}
            </StyledLinkText>
        )}
    </NavLink>
);

export default NavigationLink;
