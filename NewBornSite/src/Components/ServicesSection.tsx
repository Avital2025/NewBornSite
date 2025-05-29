import {
    Box, Typography, Container, GridLegacy as Grid, Card, CardContent,
    Avatar, Button
} from '@mui/material';

import { BabyChangingStation as BabyIcon, PhotoCamera as CameraIcon } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ServicesSection() {
    <p>services</p>
    return (
        <Box id="services" sx={{ py: 8, backgroundColor: 'white' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
                        השירותים שלי
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
                        מגוון שירותי צילום מותאמים לכל משפחה ולכל רגע מיוחד
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Avatar sx={{ bgcolor: 'pink.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
                                    <BabyIcon sx={{ fontSize: 32, color: 'pink.500' }} />
                                </Avatar>
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
                                    צילומי ניובורן
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
                                    צילומים עדינים ובטוחים לתינוקות בגיל 5-14 יום. כולל פוזות קלאסיות ויצירתיות.
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'pink.500', mb: 2 }}>
                                    ₪800
                                </Typography>
                                <Button variant="outlined" sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' } }}>
                                    פרטים נוספים
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Avatar sx={{ bgcolor: 'purple.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
                                    <FavoriteBorderIcon sx={{ fontSize: 32, color: 'purple.500' }} />
                                </Avatar>
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
                                    צילומי משפחה
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
                                    צילומים משפחתיים חמים הכוללים את כל בני המשפחה עם התינוק החדש.
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'purple.500', mb: 2 }}>
                                    ₪600
                                </Typography>
                                <Button variant="outlined" sx={{ borderColor: 'purple.300', color: 'purple.600', '&:hover': { backgroundColor: 'purple.50' } }}>
                                    פרטים נוספים
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Avatar sx={{ bgcolor: 'blue.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
                                    <CameraIcon sx={{ fontSize: 32, color: 'blue.500' }} />
                                </Avatar>
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
                                    חבילה מלאה
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
                                    שילוב של צילומי ניובורן וצילומי משפחה במחיר מיוחד.
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'blue.500', mb: 2 }}>
                                    ₪1200
                                </Typography>
                                <Button variant="outlined" sx={{ borderColor: 'blue.300', color: 'blue.600', '&:hover': { backgroundColor: 'blue.50' } }}>
                                    פרטים נוספים
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}