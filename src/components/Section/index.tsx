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
}

const Section: FC<SectionProps> = ({ id, children, sectionTitle }) => (
    <InternalSection id={id}>
        <Box>
            <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                    {sectionTitle}
                </Typography>
            </Box>
            {children}
        </Box>
    </InternalSection>
);

export default Section;
