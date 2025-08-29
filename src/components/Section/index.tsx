'use client';

import type { FC, HTMLAttributes } from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InternalSection = styled('section')(({ theme }) => ({
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
}));

export interface SectionProps
    extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    sectionTitle: string;
    /*
    @deprecated Use `sectionTitle` instead.
    */
    title?: never;
    flexbox?: boolean;
    gap?: number;
}

const Section: FC<SectionProps> = ({
    id,
    children,
    sectionTitle,
    flexbox,
    gap,
}) => (
    <InternalSection id={id}>
        <Box>
            <Typography variant="h4" component="h2" gutterBottom>
                {sectionTitle}
            </Typography>
        </Box>
        <Box
            display={flexbox ? 'flex' : undefined}
            flexWrap={flexbox ? 'wrap' : undefined}
            gap={gap}
        >
            {children}
        </Box>
    </InternalSection>
);

export default Section;
