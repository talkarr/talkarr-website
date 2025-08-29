'use client';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import type SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export interface SupportElementProps {
    name: string;
    description: string;
    icon: typeof SvgIcon;
    href?: `https://${string}`;
}

const StyledLink = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        textDecoration: 'underline',
    },
    paddingBottom: theme.spacing(1),
}));

const Wrapper: FC<
    PropsWithChildren<{ href?: SupportElementProps['href'] }>
> = ({ children, href }) =>
    href ? (
        <StyledLink href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </StyledLink>
    ) : (
        <>{children}</>
    );

const SupportElement: FC<SupportElementProps> = ({
    name,
    description,
    icon: Icon,
    href,
}) => {
    return (
        <Grid size={1}>
            <Wrapper href={href}>
                <Box
                    bgcolor="background.paper"
                    p={2}
                    borderRadius={6}
                    sx={{
                        ...(href
                            ? {
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s, box-shadow 0.2s',
                                  '&:hover': {
                                      transform: 'translateY(-2px)',
                                      boxShadow: 4,
                                  },
                              }
                            : {}),
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={1}
                    >
                        <Icon />
                        <Typography variant="h6" component="h3">
                            {name}
                        </Typography>
                    </Box>
                    <Typography variant="body1">{description}</Typography>
                </Box>
            </Wrapper>
        </Grid>
    );
};

export default SupportElement;
