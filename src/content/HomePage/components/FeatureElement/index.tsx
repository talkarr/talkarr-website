'use client';
import type { Route } from 'next';
import type { StaticImageData } from 'next/image';

import type { FC } from 'react';

import Image from 'next/image';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export interface FeatureElementProps {
    title: string;
    description: string;
    image: StaticImageData;
    icon: typeof SvgIcon;
    action?: {
        label: string;
        icon?: typeof SvgIcon;
        link: `https://${string}` | Route;
    };
}

const StyledImage = styled(Image)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('sm')]: {
        maxWidth: 450,
    },
    height: 'auto',
    borderRadius: 16,
}));

const FeatureElement: FC<FeatureElementProps> = ({
    title,
    description,
    image,
    icon: Icon,
    action,
}) => (
    <Box
        bgcolor="background.paper"
        display="flex"
        borderRadius={8}
        flexWrap="wrap"
        width="100%"
        sx={{
            flexDirection: 'row',
            // every 2nd reverse
            '&:nth-of-type(even)': {
                flexDirection: { xs: 'column', md: 'row-reverse' },
            },
            justifyContent: 'left',
        }}
    >
        <Box display="flex" flexDirection="column">
            <StyledImage src={image} alt={title} sizes="100vw" />
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            px={{ xs: 4, sm: 6 }}
            py={{ xs: 2, sm: 6 }}
            gap={1}
            flex={1}
        >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={2}
                width="fit-content"
            >
                <Icon />
                <Typography variant="h4">{title}</Typography>
            </Box>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                    textWrap: 'balance',
                    maxWidth: 600,
                }}
            >
                {description}
            </Typography>
            {action ? (
                <a
                    href={action.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: 'fit-content', marginTop: 16 }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            borderRadius: 8,
                            minWidth: 200,
                        }}
                        startIcon={action.icon ? <action.icon /> : undefined}
                    >
                        {action.label}
                    </Button>
                </a>
            ) : null}
        </Box>
    </Box>
);

export default FeatureElement;
