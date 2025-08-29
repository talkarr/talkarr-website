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
                component="nav"
                display="flex"
                alignContent="center"
                justifyContent="space-between"
                position="sticky"
                top={0}
                width="100%"
                zIndex={theme.zIndex.appBar}
                px={2}
                boxShadow={2}
                bgcolor={alpha(theme.palette.primary.main, navbar.opacity)}
                height={navbar.navHeight}
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
                            <Logo shadow />
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
            <Box
                component="main"
                height={`calc(100vh - ${navbar.navHeight + navbar.footerHeight + navbar.padding * 2}px)`}
                mb={`${navbar.footerHeight + navbar.padding}px`}
                sx={{ overflowY: 'auto', scrollBehavior: 'smooth' }}
            >
                {children}
            </Box>
            <Box
                component="footer"
                position="fixed"
                width="100%"
                py={2}
                bottom={0}
                textAlign="center"
                height={navbar.footerHeight}
                bgcolor={alpha(theme.palette.background.paper, navbar.opacity)}
                boxShadow={4}
                zIndex={theme.zIndex.appBar - 1}
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
