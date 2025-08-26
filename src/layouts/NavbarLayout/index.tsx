'use client';

import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import Link from 'next/link';

import { alpha, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Logo from '@/components/Logo';
import { githubLicenseLink } from '@/constants';
import NavigationLink from '@/layouts/NavbarLayout/components/NavigationLink';
import ThemeSwitcher from '@/layouts/NavbarLayout/components/ThemeSwitcher';
import navbar from '@/navigation';

const copyrightStartYear = 2025;
const currentYear = new Date().getFullYear();
const yearDisplay =
    currentYear === copyrightStartYear
        ? ` ${currentYear} `
        : ` ${copyrightStartYear} - ${currentYear} `;

const NavbarLayout: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    return (
        <Box bgcolor="background.default" sx={{ minHeight: '100vh' }}>
            <Box
                bgcolor={alpha(theme.palette.primary.main, 0.85)}
                boxShadow={2}
                height={navbar.height}
                display="flex"
                alignContent="center"
                justifyContent="space-between"
                px={2}
                component="nav"
            >
                <Box
                    flex={1}
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    {/* Left section */}
                    <Link href="/">
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap={1}
                            alignItems="center"
                        >
                            <Logo />
                            <Typography
                                variant="h6"
                                component="span"
                                color="primary.contrastText"
                                fontWeight="bold"
                            >
                                Talkarr
                            </Typography>
                        </Box>
                    </Link>
                </Box>
                <Box
                    flex={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Center section */}
                    {navbar.routesToShow.map(route => (
                        <NavigationLink
                            href={route.path}
                            icon={route.icon}
                            key={route.path}
                        >
                            {route.label}
                        </NavigationLink>
                    ))}
                </Box>
                <Box
                    flex={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    {/* Right section */}
                    <ThemeSwitcher />
                </Box>
            </Box>
            <Box component="main" pt={2}>
                {children}
            </Box>
            <Box
                component="footer"
                position="absolute"
                bottom={0}
                width="100%"
                py={2}
                textAlign="center"
                bgcolor={alpha(theme.palette.background.paper, 0.85)}
            >
                <a
                    href={githubLicenseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Typography variant="body2" color="textSecondary">
                        &copy;
                        {yearDisplay}
                        Talkarr. All rights reserved.
                    </Typography>
                </a>
            </Box>
        </Box>
    );
};

export default NavbarLayout;
