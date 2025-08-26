import type { FC, PropsWithChildren } from 'react';
import React from 'react';

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

const Wrapper: FC<
    PropsWithChildren<{ href?: SupportElementProps['href'] }>
> = ({ children, href }) =>
    href ? (
        <a
            href={href}
            style={{ color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
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
        <Grid size={3}>
            <Wrapper href={href}>
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
            </Wrapper>
        </Grid>
    );
};

export default SupportElement;
