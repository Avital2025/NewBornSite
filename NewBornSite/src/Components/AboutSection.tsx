import {
    Box, Typography, Container, GridLegacy as Grid, Avatar
} from '@mui/material';
import { Favorite as HeartIcon, Star as StarIcon } from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function AboutSection() {

    return (

        <Box id="about" sx={{ py: 8, backgroundColor: 'white' }}>
            <Typography variant="h6" sx={{ textAlign: 'center', color: 'gray', mt: 4 }}>
                            התחלה של קטע ה־About כאן
                        </Typography>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        
                        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
                            קצת עליי
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey.600', mb: 3, lineHeight: 1.8 }}>
                            שלום, אני שרה - צלמת מקצועית המתמחה בצילומי ניובורן כבר מעל 8 שנים. אני מאמינה שכל תינוק הוא נס קטן, וכל
                            צילום הוא הזדמנות לתעד רגעים קסומים שלא יחזרו.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey.600', mb: 4, lineHeight: 1.8 }}>
                            הסטודיו שלי מצויד בכל הנדרש לצילום בטוח ונוח, ואני עוברת הכשרות מתמידות בבטיחות צילומי ניובורן. המטרה
                            שלי היא ליצור אווירה רגועה ונעימה לכל המשפחה.
                        </Typography>

                        <Grid container spacing={3} sx={{ mb: 4 }}>
                            <Grid item xs={4}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'pink.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
                                        <EmojiEventsIcon sx={{ fontSize: 24, color: 'pink.500' }} />
                                    </Avatar>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
                                        8+
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        שנות ניסיון
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'purple.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
                                        <HeartIcon sx={{ fontSize: 24, color: 'purple.500' }} />
                                    </Avatar>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
                                        500+
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        משפחות מרוצות
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'blue.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
                                        <StarIcon sx={{ fontSize: 24, color: 'blue.500' }} />
                                    </Avatar>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
                                        5.0
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        דירוג ממוצע
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    aspectRatio: '1 / 1',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/placeholder.svg?height=500&width=500"
                                    alt="שרה - צלמת ניובורן"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Box sx={{ position: 'absolute', bottom: -16, left: -16, backgroundColor: 'white', borderRadius: '8px', p: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ display: 'flex' }}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <StarIcon key={star} sx={{ fontSize: 16, color: 'yellow.500', fill: 'current' }} />
                                        ))}
                                    </Box>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'grey.700' }}>
                                        ביקורות מעולות
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}