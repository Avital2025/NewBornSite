import {
    Box, Typography, Container, Button, Chip
} from '@mui/material';
import { PhotoCamera as CameraIcon, Favorite as HeartIcon, Star as StarIcon } from '@mui/icons-material';

export default function HeroSection() {
    <p>Hero</p>
    return (
        <Box id="home" sx={{ py: 8, px: 2, textAlign: 'center' }}>
            <Container maxWidth="md">
                <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
                    <Chip
                        icon={<HeartIcon sx={{ mr: 0.5 }} />}
                        label="צלמת מקצועית לניובורן"
                        sx={{ mb: 4, backgroundColor: 'pink.100', color: 'pink.700', '&:hover': { backgroundColor: 'pink.200' } }}
                    />
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3, lineHeight: 1.2 }}>
                        רגעים קסומים של
                        <Typography component="span" variant="h2" sx={{ color: 'pink.500', display: 'block', fontWeight: 'bold' }}>
                            התחלות חדשות
                        </Typography>
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.600', mb: 4, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
                        אני מתמחה בצילום ניובורן עדין ובטוח, ויוצרת זיכרונות יפים לכל המשפחה. כל צילום הוא סיפור ייחודי של אהבה
                        והתחלה חדשה.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<CameraIcon />}
                            sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' }, px: 4, py: 1.5 }}
                        >
                            הזמני צילום עכשיו
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' }, px: 4, py: 1.5 }}
                        >
                            צפי בגלריה
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ mt: 8, position: 'relative' }}>
                    <Box
                        sx={{
                            aspectRatio: '16 / 9',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: 3,
                            background: 'linear-gradient(to bottom right, #FFF0F5, #E6E6FA)',
                        }}
                    >
                        <Box
                            component="img"
                            src="/placeholder.svg?height=600&width=1000"
                            alt="צילום ניובורן מקצועי"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: -24, right: -24, backgroundColor: 'white', borderRadius: '50%', p: 2, boxShadow: 3 }}>
                        <StarIcon sx={{ fontSize: 32, color: 'yellow.600', fill: 'current' }} />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}