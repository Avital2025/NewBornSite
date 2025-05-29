


import {
    Box, Typography, Container, GridLegacy as Grid, Card, CardContent,
    Avatar, TextField, Button
} from '@mui/material';

import {
    Phone as PhoneIcon, Mail as MailIcon, LocationOn as MapPinIcon,
    AccessTime as ClockIcon
} from '@mui/icons-material';

export default function ContactSection() {
    <p>contact</p>
    return (
        <Box id="contact" sx={{ py: 8, background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
                        בואו נתחיל לתכנן
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
                        אשמח לשמוע עליכם ולתכנן יחד את הצילום המושלם עבור המשפחה שלכם
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
                            פרטי יצירת קשר
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: 'pink.100', width: 48, height: 48 }}>
                                    <PhoneIcon sx={{ fontSize: 24, color: 'pink.500' }} />
                                </Avatar>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
                                        טלפון
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        050-123-4567
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: 'purple.100', width: 48, height: 48 }}>
                                    <MailIcon sx={{ fontSize: 24, color: 'purple.500' }} />
                                </Avatar>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
                                        אימייל
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        sarah@newbornphoto.co.il
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: 'blue.100', width: 48, height: 48 }}>
                                    <MapPinIcon sx={{ fontSize: 24, color: 'blue.500' }} />
                                </Avatar>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
                                        מיקום
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        תל אביב והמרכז
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: 'green.100', width: 48, height: 48 }}>
                                    <ClockIcon sx={{ fontSize: 24, color: 'green.500' }} />
                                </Avatar>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
                                        שעות פעילות
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                        ראשון-חמישי: 9:00-18:00
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ borderColor: 'pink.100' }}>
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
                                    שלחי הודעה
                                </Typography>
                                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <TextField
                                        label="שם מלא"
                                        id="full-name"
                                        placeholder="השם שלך"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'pink.500',
                                                    boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
                                                },
                                            },
                                        }}
                                    />

                                    <TextField
                                        label="טלפון"
                                        id="phone"
                                        placeholder="מספר הטלפון שלך"
                                        type="tel"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'pink.500',
                                                    boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
                                                },
                                            },
                                        }}
                                    />

                                    <TextField
                                        label="תאריך לידה משוער"
                                        id="due-date"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'pink.500',
                                                    boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
                                                },
                                            },
                                        }}
                                    />

                                    <TextField
                                        label="הודעה"
                                        id="message"
                                        placeholder="ספרי לי על המשפחה שלך ומה אתם מחפשים..."
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'pink.500',
                                                    boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
                                                },
                                            },
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<MailIcon />}
                                        sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' }, py: 1.5 }}
                                    >
                                        שלחי הודעה
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}