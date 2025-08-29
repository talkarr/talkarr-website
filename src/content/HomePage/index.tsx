import type { NextPage } from 'next';

import WikiIcon from '@mui/icons-material/Book';
import GithubIcon from '@mui/icons-material/GitHub';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Section from '@/components/Section';
import { githubIssuesLink, wikiLink } from '@/constants';
import SupportElement from '@/content/HomePage/components/SupportElement';

const HomePage: NextPage = () => (
    <Container>
        <Section id="support" sectionTitle="Support">
            <Typography variant="body1" mb={2}>
                Because Talkarr is an open-source project, we rely on our
                community for support. Here are some ways you can get help:
            </Typography>
            <Grid container spacing={4}>
                <SupportElement
                    name="Wiki"
                    description="All of the documentation about the project is hosted in the Wiki."
                    icon={WikiIcon}
                    href={wikiLink}
                />
                <SupportElement
                    name="GitHub"
                    description="You can open issues on GitHub to report bugs or request features."
                    icon={GithubIcon}
                    href={githubIssuesLink}
                />
                <SupportElement
                    name="More coming soon!"
                    description="Talkarr is still in its early stages, so keep an eye out for more in the future."
                    icon={NewReleasesIcon}
                />
            </Grid>
        </Section>
    </Container>
);

export default HomePage;
