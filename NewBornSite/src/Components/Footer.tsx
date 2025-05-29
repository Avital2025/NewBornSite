import {
    Box, Typography, Container, GridLegacy as Grid
} from '@mui/material';
import { PhotoCamera as CameraIcon } from '@mui/icons-material';

export default function Footer() {
    <p>footer</p>
    return (
        <Box sx={{ backgroundColor: 'grey.800', color: 'white', py: 4, px: 2 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'right' } }}>
                            <CameraIcon sx={{ color: 'pink.300', fontSize: 28 }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                צילומי ניובורן
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'grey.400', mt: 1 }}>
                            © 2025 כל הזכויות שמורות.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}