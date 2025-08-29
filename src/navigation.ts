import type { Route } from 'next';

import GithubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/HomeRounded';
import FeaturesIcon from '@mui/icons-material/NewReleasesRounded';
import SupportIcon from '@mui/icons-material/QuestionAnswerRounded';

import type SvgIcon from '@mui/material/SvgIcon';

import { githubRepoLink } from '@/constants';

export interface NavbarConfig {
    navHeight: number;
    footerHeight: number;
    padding: number;
    opacity: number;
    routesToShow: {
        path: Route | `https://${string}`;
        label: string;
        icon?: typeof SvgIcon;
    }[];
}

const navbar: NavbarConfig = {
    navHeight: 64,
    footerHeight: 48,
    padding: 16,
    opacity: 0.95,
    routesToShow: [
        {
            path: '/',
            label: 'Home',
            icon: HomeIcon,
        },
        {
            path: '/#features',
            label: 'Features',
            icon: FeaturesIcon,
        },
        {
            path: '/#support',
            label: 'Support',
            icon: SupportIcon,
        },
        {
            path: githubRepoLink,
            label: 'GitHub',
            icon: GithubIcon,
        },
    ],
};

export default navbar;
