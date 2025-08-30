'use client';

import type { FC, PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';

import { alpha, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
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

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [showJavascriptButtons, setShowJavascriptButtons] =
        useState<boolean>(false);

    useEffect(() => {
        setShowJavascriptButtons(true);
    }, []);

    const closeDrawer = (): void => {
        setDrawerOpen(false);
    };

    const openDrawer = (): void => {
        setDrawerOpen(true);
    };

    return (
        <>
            <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
                <Box
                    role="presentation"
                    onClick={() => setDrawerOpen(false)}
                    onKeyDown={() => setDrawerOpen(false)}
                    sx={{ width: 250, py: 2 }}
                >
                    <Box px={2}>
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
                    <List>
                        {navbar.routesToShow.map(route => (
                            <MenuItem key={route.path} disableGutters>
                                <NavigationLink
                                    href={route.path}
                                    icon={route.icon}
                                >
                                    {route.label}
                                </NavigationLink>
                            </MenuItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box bgcolor="background.default" sx={{ minHeight: '100vh' }}>
                <Box
                    component="nav"
                    display="flex"
                    alignContent="center"
                    justifyContent="space-evenly"
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
                        justifyContent={{ xs: 'flex-start', md: 'center' }}
                        alignItems="center"
                    >
                        {/* Left section */}
                        {showJavascriptButtons ? (
                            <IconButton
                                sx={theme => ({
                                    display: { md: 'none' },
                                    color: theme.palette.primary.contrastText,
                                })}
                                onClick={openDrawer}
                                aria-label="Open navigation menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : null}
                        <Box display={{ xs: 'none', md: 'block' }}>
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
                    </Box>
                    <Box
                        flex={1}
                        display={{ xs: 'none', md: 'flex' }}
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
                        justifyContent={{ xs: 'flex-end', md: 'center' }}
                        alignItems="center"
                    >
                        {/* Right section */}
                        {showJavascriptButtons ? <ThemeSwitcher /> : null}
                    </Box>
                </Box>
                <Box
                    component="main"
                    height={`calc(100vh - ${navbar.navHeight + navbar.padding}px)`}
                    mb={`${navbar.footerHeight + navbar.padding}px`}
                    pb={`${navbar.padding + navbar.pageBottomPadding}px`}
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
                    bgcolor={alpha(theme.palette.primary.dark, navbar.opacity)}
                    boxShadow={4}
                    zIndex={theme.zIndex.appBar - 1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <a
                        href={githubLicenseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography
                            variant="body2"
                            color="primary.contrastText"
                        >
                            &copy;
                            {yearDisplay}
                            Talkarr. All rights reserved.
                        </Typography>
                    </a>
                </Box>
            </Box>
        </>
    );
};

export default NavbarLayout;
