import type { NextPage } from 'next';

import WikiIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GithubIcon from '@mui/icons-material/GitHub';
import FaqIcon from '@mui/icons-material/Help';
import ImportIcon from '@mui/icons-material/ImportContacts';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/ManageAccounts';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SettingsIcon from '@mui/icons-material/Settings';
import I18nIcon from '@mui/icons-material/Translate';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DashboardImage from '@/assets/screenshot/dashboard.png';
import ImportImage from '@/assets/screenshot/import.png';
import LanguageImage from '@/assets/screenshot/language.png';
import LoginImage from '@/assets/screenshot/login.png';
import SettingsImage from '@/assets/screenshot/settings.png';
import HomeImageCarousel from '@/components/HomeImageCarousel';
import Section from '@/components/Section';
import {
    githubIssuesLink,
    weblateLink,
    wikiFaqLink,
    wikiLink,
} from '@/constants';
import FeatureElement from '@/content/HomePage/components/FeatureElement';
import SupportElement from '@/content/HomePage/components/SupportElement';

const HomePage: NextPage = () => (
    <Container maxWidth="lg">
        <HomeImageCarousel />
        <Box height={32} />
        <Section id="features" sectionTitle="Features" flexbox gap={2}>
            <FeatureElement
                image={DashboardImage}
                title="Dashboard"
                icon={DashboardIcon}
                description="Manage and view your collection of talks in a user-friendly dashboard."
            />
            <FeatureElement
                image={ImportImage}
                title="Import from EventFahrplan"
                icon={ImportIcon}
                description="Easily import talks from the EventFahrplan app to your collection."
            />
            <FeatureElement
                image={LanguageImage}
                title="Multi-language support"
                icon={LanguageIcon}
                description="Support for multiple languages, translated by the community. If your language is still missing, you can help us translate it!"
                action={{
                    link: weblateLink,
                    icon: I18nIcon,
                    label: 'Help us translate',
                }}
            />
            <FeatureElement
                image={LoginImage}
                title="Account-based login"
                icon={LoginIcon}
                description="Login with your account to manage your talks. This will also allow you to manage permissions for every user. If you do not want that, you can also disable login entirely."
            />
            <FeatureElement
                image={SettingsImage}
                title="Settings"
                icon={SettingsIcon}
                description="Customize the software to fit your needs. Toggle features and change the way the software behaves."
            />
        </Section>
        <Section id="support" sectionTitle="Support">
            <Typography variant="body1" mb={2}>
                Because Talkarr is an open-source project, we rely on our
                community for support. Here are some ways you can get help:
            </Typography>
            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
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
                    name="FAQ"
                    description="Check out our FAQ for answers to the most common questions."
                    icon={FaqIcon}
                    href={wikiFaqLink}
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
