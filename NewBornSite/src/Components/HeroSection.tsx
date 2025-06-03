import {
    Box, Typography, Container, Button, Chip
} from '@mui/material';
import { PhotoCamera as CameraIcon, Favorite as HeartIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const images = [
    '/images/newborn1.jpg',
    '/images/newborn2.jpg',
    '/images/newborn3.jpg',
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // כל 5 שניות
        return () => clearInterval(interval);
    }, []);

    return (
        <Box id="home" sx={{ pt: 8, pb: 10, px: 2, textAlign: 'center', backgroundColor: '#fffafc' }}>
            <Container maxWidth="lg">
                <Chip
                    icon={<HeartIcon sx={{ mr: 0.5 }} />}
                    label="צלמת מקצועית לניובורן"
                    sx={{
                        mb: 4,
                        backgroundColor: 'pink.100',
                        color: 'pink.700',
                        fontSize: '1rem',
                        '&:hover': { backgroundColor: 'pink.200' }
                    }}
                />
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 'bold',
                        color: 'grey.800',
                        mb: 2,
                        lineHeight: 1.2,
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                >
                    תיעוד רגעים ראשונים
                    <Typography
                        component="span"
                        sx={{
                            color: 'pink.500',
                            display: 'block',
                            fontWeight: 'bold',
                            fontSize: { xs: '2.4rem', md: '3.5rem' }
                        }}
                    >
                        באהבה ורגש
                    </Typography>
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: 'grey.600',
                        mb: 4,
                        maxWidth: '700px',
                        mx: 'auto',
                        fontSize: '1.1rem'
                    }}
                >
                    חוויית צילום ניובורן רכה, בטוחה ומרגשת, באווירה רגועה שתשאיר זיכרונות לכל החיים.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<CameraIcon />}
                        sx={{
                            backgroundColor: 'pink.500',
                            '&:hover': { backgroundColor: 'pink.600' },
                            px: 4,
                            py: 1.5
                        }}
                    >
                        הזמיני סשן צילום
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            borderColor: 'pink.300',
                            color: 'pink.600',
                            '&:hover': { backgroundColor: 'pink.50' },
                            px: 4,
                            py: 1.5
                        }}
                    >
                        צפייה בגלריה
                    </Button>
                </Box>

                {/* קרוסלת תמונות */}
                <Box
                    sx={{
                        aspectRatio: '16 / 9',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: 4,
                        maxWidth: '1000px',
                        mx: 'auto',
                        position: 'relative'
                    }}
                >
                    {images.map((img, idx) => (
                        <Box
                            key={img}
                            component="img"
                            src={img}
                            alt={`ניובורן ${idx + 1}`}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: currentIndex === idx ? 1 : 0,
                                transition: 'opacity 1s ease-in-out'
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
