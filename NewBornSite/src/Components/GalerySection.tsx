import {
    Box, Typography, Container, GridLegacy as Grid, Button
} from '@mui/material';

export default function GallerySection() {
    <p>Gallery</p>
    return (
        <Box id="gallery" sx={{ py: 8, background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
                        גלריית עבודות
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
                        מבחר מהעבודות האחרונות שלי - כל תמונה מספרת סיפור של אהבה
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Grid item xs={6} md={3} key={i}>
                            <Box
                                sx={{
                                    aspectRatio: '1 / 1',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: 1,
                                    '&:hover': { boxShadow: 3 },
                                    transition: 'box-shadow 0.3s',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`/placeholder.svg?height=300&width=300`}
                                    alt={`צילום ניובורן ${i}`}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' } }}
                    >
                        צפי בגלריה המלאה
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}