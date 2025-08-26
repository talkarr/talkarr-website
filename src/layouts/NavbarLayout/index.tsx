import type { Route } from 'next';

import type { FC, PropsWithChildren } from 'react';

import Link from 'next/link';

import Logo from '@/components/Logo';
import NavigationLink from '@/layouts/NavbarLayout/components/NavigationLink';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface NavbarConfig {
    height: number;
    routesToShow: {
        path: Route;
        label: string;
    }[];
}

const navbar: NavbarConfig = {
    height: 64,
    routesToShow: [
        {
            path: '/',
            label: 'Home',
        },
    ],
};

const NavbarLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box>
            <Box
                bgcolor="primary.main"
                height={navbar.height}
                display="flex"
                alignContent="center"
                justifyContent="space-between"
                px={2}
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
                        <NavigationLink href={route.path} key={route.path}>
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
                </Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    );
};

export default NavbarLayout;
