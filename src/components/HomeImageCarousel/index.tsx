'use client';
import type { StaticImageData } from 'next/image';

import type { FC } from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import Image from 'next/image';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DashboardImage from '@/assets/screenshot/dashboard.png';
import ImportImage from '@/assets/screenshot/import.png';
import LanguageImage from '@/assets/screenshot/language.png';
import LoginImage from '@/assets/screenshot/login.png';
import SettingsImage from '@/assets/screenshot/settings.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
};

const imagesWithText: {
    image: StaticImageData;
    caption: string;
}[] = [
    {
        image: DashboardImage,
        caption: 'View and manage your collection of talks.',
    },
    {
        image: ImportImage,
        caption: 'Easily import talks from EventFahrplan.',
    },
    {
        image: LanguageImage,
        caption: 'Support for multiple languages.',
    },
    {
        image: LoginImage,
        caption: 'Login with your account to manage your talks.',
    },
    {
        image: SettingsImage,
        caption: 'Customize the software to fit your needs.',
    },
];

const aspectRatioFromImage = (image: StaticImageData): number =>
    image.width > 0 && image.height > 0 ? image.width / image.height : 16 / 9;

const HomeImageCarousel: FC = () => {
    const theme = useTheme();

    return (
        <Box mt={2} maxWidth="85%" marginX="auto">
            <style jsx global>
                {`
                    .slick-prev:before,
                    .slick-next:before {
                        color: ${theme.palette.primary.main} !important;
                        font-size: 30px;
                    }

                    .slick-prev {
                        left: -38px;
                    }

                    .slick-next {
                        right: -28px;
                    }

                    .slick-dots li button:before {
                        color: ${theme.palette.primary.main} !important;
                    }
                `}
            </style>
            <Slider {...settings}>
                {imagesWithText.map(({ image, caption }, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Box key={`slider-image-${index}`}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            gap={1}
                        >
                            <Image
                                src={image}
                                alt={caption}
                                priority={index === 0}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxHeight: 'max(50vh, 400px)',
                                    maxWidth: '100%',
                                    aspectRatio: `${aspectRatioFromImage(
                                        image,
                                    )}`,
                                    borderRadius: theme.shape.borderRadius * 8,
                                }}
                            />
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                gap={1}
                                mb={1}
                            >
                                <Typography
                                    variant="h6"
                                    color="textPrimary"
                                    textAlign="center"
                                >
                                    {caption}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HomeImageCarousel;
