'use client';
import type { FC, ReactElement } from 'react';
import { useMemo } from 'react';

import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import DarkThemeIcon from '@mui/icons-material/DarkMode';
import LightThemeIcon from '@mui/icons-material/LightMode';

import { useColorScheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export interface ThemeSwitcherState {
    Icon: ReactElement;
    label: string;
    nextMode: 'light' | 'dark' | 'system';
}

const ThemeSwitcher: FC = () => {
    const { mode, setMode } = useColorScheme();

    const state = useMemo((): ThemeSwitcherState => {
        switch (mode) {
            case 'light':
                return {
                    Icon: <LightThemeIcon />,
                    label: 'Light mode',
                    nextMode: 'dark',
                };
            case 'dark':
                return {
                    Icon: <DarkThemeIcon />,
                    label: 'Dark mode',
                    nextMode: 'system',
                };
            case 'system':
            default:
                return {
                    Icon: <BrightnessMediumIcon />,
                    label: 'System mode',
                    nextMode: 'light',
                };
        }
    }, [mode]);

    const { Icon, label, nextMode } = state;

    return (
        <Tooltip
            title={`Switch to ${nextMode} mode`}
            sx={{
                color: 'primary.contrastText',
            }}
        >
            <IconButton
                color="inherit"
                onClick={() => {
                    setMode(nextMode);
                }}
                aria-label={label}
                size="large"
            >
                {Icon}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeSwitcher;
