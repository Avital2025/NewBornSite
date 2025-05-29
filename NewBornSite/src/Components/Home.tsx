// // // "use client"
// // // import {
// // //   AppBar,
// // //   Box,
// // //   Button,
// // //   Card,
// // //   CardContent,
// // //   Container,
// // //   CssBaseline,
// // //   Divider,
// // //   Grid,
// // //   IconButton,
// // //   ImageList,
// // //   ImageListItem,
// // //   Paper,
// // //   Rating,
// // //   ThemeProvider,
// // //   Toolbar,
// // //   Typography,
// // //   createTheme,
// // //   useMediaQuery,
// // // } from "@mui/material"
// // // import { Instagram, Facebook, WhatsApp, Menu, ArrowForward } from "@mui/icons-material"

// // // // יצירת ערכת נושא מותאמת אישית עם צבעים רכים המתאימים לצילומי ניובורן
// // // const theme = createTheme({
// // //   direction: "rtl",
// // //   palette: {
// // //     primary: {
// // //       main: "#d4a5a5",
// // //     },
// // //     secondary: {
// // //       main: "#a5b1d4",
// // //     },
// // //     background: {
// // //       default: "#faf7f7",
// // //     },
// // //   },
// // //   typography: {
// // //     fontFamily: "Assistant, Roboto, Arial, sans-serif",
// // //     h1: {
// // //       fontWeight: 700,
// // //     },
// // //     h2: {
// // //       fontWeight: 600,
// // //     },
// // //     h3: {
// // //       fontWeight: 600,
// // //     },
// // //   },
// // //   components: {
// // //     MuiButton: {
// // //       styleOverrides: {
// // //         root: {
// // //           borderRadius: 28,
// // //         },
// // //       },
// // //     },
// // //   },
// // // })

// // // // נתונים לגלריה
// // // const galleryItems = [
// // //   {
// // //     img: "/placeholder.svg?height=300&width=300",
// // //     title: "תינוק ישן",
// // //   },
// // //   {
// // //     img: "/placeholder.svg?height=300&width=300",
// // //     title: "תינוקת עם כובע",
// // //   },
// // //   {
// // //     img: "/placeholder.svg?height=300&width=300",
// // //     title: "תינוק בסלסלה",
// // //   },
// // //   {
// // //     img: "/placeholder.svg?height=300&width=300",
// // //     title: "תינוקת עם פרחים",
// // //   },
// // //   {
// // //     img: "/placeholder.svg?height=300&width=300",
// // //     title: "תינוק עם הוריו",
// // //   },
// // //   {
// // //     img: "/placeholder.svg?height=300&width=300",
// // //     title: "תינוקת בעטיפה",
// // //   },
// // // ]

// // // // נתונים לחבילות צילום
// // // const packages = [
// // //   {
// // //     title: "חבילה בסיסית",
// // //     price: "₪1,200",
// // //     description: "צילומי ניובורן בסטודיו, 10 תמונות ערוכות, אלבום דיגיטלי",
// // //   },
// // //   {
// // //     title: "חבילה משפחתית",
// // //     price: "₪1,800",
// // //     description: "צילומי ניובורן בסטודיו, צילומי משפחה, 20 תמונות ערוכות, אלבום דיגיטלי ומודפס",
// // //     featured: true,
// // //   },
// // //   {
// // //     title: "חבילת פרימיום",
// // //     price: "₪2,500",
// // //     description: "צילומי ניובורן בסטודיו או בבית, צילומי משפחה, 30 תמונות ערוכות, אלבום דיגיטלי ומודפס, הגדלות קנבס",
// // //   },
// // // ]

// // // // נתונים לביקורות
// // // const testimonials = [
// // //   {
// // //     name: "מיכל כהן",
// // //     rating: 5,
// // //     text: "התמונות של התינוק שלנו יצאו מדהימות! הצלמת הייתה מקצועית, סבלנית ונעימה. ממליצה בחום!",
// // //   },
// // //   {
// // //     name: "דנה לוי",
// // //     rating: 5,
// // //     text: "חוויה מדהימה! הצילומים יצאו מרגשים ומקצועיים. הסטודיו נעים ומזמין והצלמת יודעת בדיוק איך לעבוד עם תינוקות.",
// // //   },
// // //   {
// // //     name: "רותם אברהם",
// // //     rating: 4,
// // //     text: "קיבלנו תמונות מקסימות שנשמור לנצח. הצלמת הייתה קשובה לבקשות שלנו ויצרה בדיוק את האווירה שרצינו.",
// // //   },
// // // ]

// // // export default function Home() {
// // //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

// // //   return (
// // //     <ThemeProvider theme={theme}>
// // //       <CssBaseline />
// // //       <Box dir="rtl" sx={{ flexGrow: 1 }}>
// // //         {/* תפריט ניווט */}
// // //         <AppBar position="static" color="transparent" elevation={0}>
// // //           <Toolbar>
// // //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// // //               <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
// // //                 רגעים קטנים
// // //               </Box>{" "}
// // //               | צילומי ניובורן
// // //             </Typography>
// // //             {isMobile ? (
// // //               <IconButton edge="start" color="inherit" aria-label="menu">
// // //                 <Menu />
// // //               </IconButton>
// // //             ) : (
// // //               <Box>
// // //                 <Button color="inherit">דף הבית</Button>
// // //                 <Button color="inherit">גלריה</Button>
// // //                 <Button color="inherit">חבילות</Button>
// // //                 <Button color="inherit">אודות</Button>
// // //                 <Button color="inherit">צור קשר</Button>
// // //               </Box>
// // //             )}
// // //           </Toolbar>
// // //         </AppBar>

// // //         {/* חלק ראשי - Hero */}
// // //         <Box
// // //           sx={{
// // //             bgcolor: "primary.main",
// // //             color: "white",
// // //             py: 8,
// // //             textAlign: "center",
// // //             borderRadius: { xs: 0, md: "0 0 50px 50px" },
// // //             mb: 6,
// // //           }}
// // //         >
// // //           <Container maxWidth="md">
// // //             <Typography variant="h1" component="h1" gutterBottom>
// // //               רגעים קטנים, זכרונות גדולים
// // //             </Typography>
// // //             <Typography variant="h5" component="h2" gutterBottom>
// // //               צילומי ניובורן מקצועיים שיישארו איתכם לנצח
// // //             </Typography>
// // //             <Button variant="contained" color="secondary" size="large" sx={{ mt: 4, color: "white", px: 4, py: 1 }}>
// // //               קביעת פגישה
// // //             </Button>
// // //           </Container>
// // //         </Box>

// // //         {/* אודות */}
// // //         <Container maxWidth="lg" sx={{ mb: 8 }}>
// // //           <Grid container spacing={4} alignItems="center">
// // //             <Grid item xs={12} md={6}>
// // //               <Box
// // //                 component="img"
// // //                 src="/placeholder.svg?height=400&width=400"
// // //                 alt="צלמת ניובורן"
// // //                 sx={{
// // //                   width: "100%",
// // //                   height: "auto",
// // //                   borderRadius: "20px",
// // //                   boxShadow: 3,
// // //                 }}
// // //               />
// // //             </Grid>
// // //             <Grid item xs={12} md={6}>
// // //               <Typography variant="h2" component="h2" gutterBottom>
// // //                 שלום, אני מיכל
// // //               </Typography>
// // //               <Typography variant="body1" paragraph>
// // //                 כבר למעלה מ-7 שנים אני מתמחה בצילומי ניובורן ומשפחות. אני מאמינה שהרגעים הראשונים בחיי התינוק הם הרגעים
// // //                 היקרים ביותר, ואני כאן כדי לתעד אותם עבורכם בצורה המקצועית והרגישה ביותר.
// // //               </Typography>
// // //               <Typography variant="body1" paragraph>
// // //                 הסטודיו שלי מאובזר בכל הציוד הנדרש לצילומי ניובורן בטוחים ונעימים, עם מגוון רחב של אביזרים, בדים
// // //                 ותפאורות שיהפכו את הצילומים לקסומים.
// // //               </Typography>
// // //               <Button variant="outlined" color="primary" endIcon={<ArrowForward />}>
// // //                 קראו עוד עליי
// // //               </Button>
// // //             </Grid>
// // //           </Grid>
// // //         </Container>

// // //         {/* גלריה */}
// // //         <Box sx={{ bgcolor: "#f5f0f0", py: 8 }}>
// // //           <Container maxWidth="lg">
// // //             <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
// // //               גלריה
// // //             </Typography>
// // //             <ImageList variant="quilted" cols={isMobile ? 2 : 3} gap={16} sx={{ overflow: "hidden" }}>
// // //               {galleryItems.map((item) => (
// // //                 <ImageListItem key={item.img}>
// // //                   <img
// // //                     src={item.img || "/placeholder.svg"}
// // //                     alt={item.title}
// // //                     loading="lazy"
// // //                     style={{ borderRadius: "10px" }}
// // //                   />
// // //                 </ImageListItem>
// // //               ))}
// // //             </ImageList>
// // //             <Box sx={{ textAlign: "center", mt: 4 }}>
// // //               <Button variant="contained" color="primary">
// // //                 לגלריה המלאה
// // //               </Button>
// // //             </Box>
// // //           </Container>
// // //         </Box>

// // //         {/* חבילות צילום */}
// // //         <Container maxWidth="lg" sx={{ my: 8 }}>
// // //           <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
// // //             חבילות צילום
// // //           </Typography>
// // //           <Grid container spacing={4} justifyContent="center">
// // //             {packages.map((pkg, index) => (
// // //               <Grid item xs={12} sm={6} md={4} key={index}>
// // //                 <Card
// // //                   elevation={pkg.featured ? 8 : 2}
// // //                   sx={{
// // //                     height: "100%",
// // //                     display: "flex",
// // //                     flexDirection: "column",
// // //                     borderRadius: "16px",
// // //                     position: "relative",
// // //                     transform: pkg.featured ? "scale(1.05)" : "none",
// // //                     border: pkg.featured ? `2px solid ${theme.palette.primary.main}` : "none",
// // //                   }}
// // //                 >
// // //                   {pkg.featured && (
// // //                     <Box
// // //                       sx={{
// // //                         position: "absolute",
// // //                         top: -15,
// // //                         right: 0,
// // //                         left: 0,
// // //                         textAlign: "center",
// // //                       }}
// // //                     >
// // //                       <Typography
// // //                         variant="subtitle2"
// // //                         sx={{
// // //                           bgcolor: "primary.main",
// // //                           color: "white",
// // //                           py: 0.5,
// // //                           px: 2,
// // //                           borderRadius: "15px",
// // //                           display: "inline-block",
// // //                         }}
// // //                       >
// // //                         הכי פופולרי
// // //                       </Typography>
// // //                     </Box>
// // //                   )}
// // //                   <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
// // //                     <Typography variant="h5" component="h3" gutterBottom>
// // //                       {pkg.title}
// // //                     </Typography>
// // //                     <Typography variant="h4" component="div" color="primary" gutterBottom>
// // //                       {pkg.price}
// // //                     </Typography>
// // //                     <Divider sx={{ my: 2 }} />
// // //                     <Typography variant="body1" color="text.secondary">
// // //                       {pkg.description}
// // //                     </Typography>
// // //                   </CardContent>
// // //                   <Box sx={{ p: 2, textAlign: "center" }}>
// // //                     <Button variant={pkg.featured ? "contained" : "outlined"} color="primary" fullWidth>
// // //                       בחירת חבילה
// // //                     </Button>
// // //                   </Box>
// // //                 </Card>
// // //               </Grid>
// // //             ))}
// // //           </Grid>
// // //         </Container>

// // //         {/* ביקורות */}
// // //         <Box sx={{ bgcolor: "#f5f0f0", py: 8 }}>
// // //           <Container maxWidth="lg">
// // //             <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
// // //               מה אומרים עליי
// // //             </Typography>
// // //             <Grid container spacing={4}>
// // //               {testimonials.map((testimonial, index) => (
// // //                 <Grid item xs={12} md={4} key={index}>
// // //                   <Paper
// // //                     elevation={2}
// // //                     sx={{
// // //                       p: 3,
// // //                       height: "100%",
// // //                       borderRadius: "16px",
// // //                       display: "flex",
// // //                       flexDirection: "column",
// // //                     }}
// // //                   >
// // //                     <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
// // //                     <Typography variant="body1" paragraph sx={{ flexGrow: 1, mb: 2 }}>
// // //                       "{testimonial.text}"
// // //                     </Typography>
// // //                     <Typography variant="subtitle1" fontWeight="bold">
// // //                       {testimonial.name}
// // //                     </Typography>
// // //                   </Paper>
// // //                 </Grid>
// // //               ))}
// // //             </Grid>
// // //           </Container>
// // //         </Box>

// // //         {/* צור קשר */}
// // //         <Container maxWidth="md" sx={{ my: 8, textAlign: "center" }}>
// // //           <Typography variant="h2" component="h2" gutterBottom>
// // //             בואו ניצור קשר
// // //           </Typography>
// // //           <Typography variant="body1" paragraph>
// // //             מעוניינים לקבוע פגישת היכרות או לשמוע פרטים נוספים? אשמח לענות על כל שאלה!
// // //           </Typography>
// // //           <Button variant="contained" color="primary" size="large" sx={{ mt: 2, mb: 4 }}>
// // //             צרו קשר עכשיו
// // //           </Button>
// // //           <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
// // //             <IconButton color="primary" aria-label="instagram">
// // //               <Instagram />
// // //             </IconButton>
// // //             <IconButton color="primary" aria-label="facebook">
// // //               <Facebook />
// // //             </IconButton>
// // //             <IconButton color="primary" aria-label="whatsapp">
// // //               <WhatsApp />
// // //             </IconButton>
// // //           </Box>
// // //         </Container>

// // //         {/* פוטר */}
// // //         <Box
// // //           component="footer"
// // //           sx={{
// // //             bgcolor: "primary.main",
// // //             color: "white",
// // //             py: 4,
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           <Container maxWidth="lg">
// // //             <Typography variant="h6" gutterBottom>
// // //               רגעים קטנים | צילומי ניובורן
// // //             </Typography>
// // //             <Typography variant="body2">© {new Date().getFullYear()} כל הזכויות שמורות</Typography>
// // //           </Container>
// // //         </Box>
// // //       </Box>
// // //     </ThemeProvider>
// // //   )
// // // }


// // // import Grid from '@mui/material/Grid';
// // // import Box from '@mui/material/Box';

// // // export default function Home() {
// // //   const items = [1, 2, 3, 4, 5, 6];

// // //   return (
// // //     <Box sx={{ flexGrow: 1, padding: 2 }}>
// // //       <Grid container spacing={2}>
// // //         {items.map((item, index) => (
// // //           <Grid item xs={12} sm={6} md={4} key={index}>
// // //             <Box
// // //               sx={{
// // //                 backgroundColor: '#4caf50',
// // //                 color: 'white',
// // //                 padding: 2,
// // //                 textAlign: 'center',
// // //               }}
// // //             >
// // //               Item {item}
// // //             </Box>
// // //           </Grid>
// // //         ))}
// // //       </Grid>
// // //     </Box>
// // //   );
// // // }

// // import {
// //     AppBar, Toolbar, Button, Typography, Container, Box, Card, CardContent,
// //     Avatar, Link, Chip
// // } from '@mui/material';

// // import { GridLegacy as Grid } from '@mui/material';


// // import {
// //     PhotoCamera as CameraIcon, Favorite as HeartIcon, Star as StarIcon, Phone as PhoneIcon,
// //     Mail as MailIcon, LocationOn as MapPinIcon, BabyChangingStation as BabyIcon, AccessTime as ClockIcon,
// //     EmojiEvents as AwardIcon, Instagram, Facebook
// // } from '@mui/icons-material';




// // export default function home() {
// //     return (
// //         <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
// //             {/* Header */}
// //             <AppBar position="sticky" color="inherit" elevation={1} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
// //                 <Container maxWidth="lg">
// //                     <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                             <CameraIcon sx={{ color: 'pink.500', fontSize: 32 }} />
// //                             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
// //                                 צילומי ניובורן
// //                             </Typography>
// //                         </Box>
// //                         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
// //                             <Link href="#home" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
// //                                 בית
// //                             </Link>
// //                             <Link href="#gallery" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
// //                                 גלריה
// //                             </Link>
// //                             <Link href="#services" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
// //                                 שירותים
// //                             </Link>
// //                             <Link href="#about" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
// //                                 אודות
// //                             </Link>
// //                             <Link href="#contact" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
// //                                 יצירת קשר
// //                             </Link>
// //                         </Box>
// //                         <Button variant="contained" startIcon={<PhoneIcon />} sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' } }}>
// //                             הזמני צילום
// //                         </Button>
// //                     </Toolbar>
// //                 </Container>
// //             </AppBar>

// //             {/* Hero Section */}
// //             <Box id="home" sx={{ py: 8, px: 2, textAlign: 'center' }}>
// //                 <Container maxWidth="md">
// //                     <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
// //                         <Chip
// //                             icon={<HeartIcon sx={{ mr: 0.5 }} />}
// //                             label="צלמת מקצועית לניובורן"
// //                             sx={{ mb: 4, backgroundColor: 'pink.100', color: 'pink.700', '&:hover': { backgroundColor: 'pink.200' } }}
// //                         />
// //                         <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3, lineHeight: 1.2 }}>
// //                             רגעים קסומים של
// //                             <Typography component="span" variant="h2" sx={{ color: 'pink.500', display: 'block', fontWeight: 'bold' }}>
// //                                 התחלות חדשות
// //                             </Typography>
// //                         </Typography>
// //                         <Typography variant="h6" sx={{ color: 'grey.600', mb: 4, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
// //                             אני מתמחה בצילום ניובורן עדין ובטוח, ויוצרת זיכרונות יפים לכל המשפחה. כל צילום הוא סיפור ייחודי של אהבה
// //                             והתחלה חדשה.
// //                         </Typography>
// //                         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
// //                             <Button
// //                                 variant="contained"
// //                                 size="large"
// //                                 startIcon={<CameraIcon />}
// //                                 sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' }, px: 4, py: 1.5 }}
// //                             >
// //                                 הזמני צילום עכשיו
// //                             </Button>
// //                             <Button
// //                                 variant="outlined"
// //                                 size="large"
// //                                 sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' }, px: 4, py: 1.5 }}
// //                             >
// //                                 צפי בגלריה
// //                             </Button>
// //                         </Box>
// //                     </Box>

// //                     {/* Hero Image */}
// //                     <Box sx={{ mt: 8, position: 'relative' }}>
// //                         <Box
// //                             sx={{
// //                                 aspectRatio: '16 / 9',
// //                                 borderRadius: '16px',
// //                                 overflow: 'hidden',
// //                                 boxShadow: 3,
// //                                 background: 'linear-gradient(to bottom right, #FFF0F5, #E6E6FA)',
// //                             }}
// //                         >
// //                             <Box
// //                                 component="img"
// //                                 src="/placeholder.svg?height=600&width=1000"
// //                                 alt="צילום ניובורן מקצועי"
// //                                 sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                             />
// //                         </Box>
// //                         <Box sx={{ position: 'absolute', bottom: -24, right: -24, backgroundColor: 'white', borderRadius: '50%', p: 2, boxShadow: 3 }}>
// //                             <StarIcon sx={{ fontSize: 32, color: 'yellow.600', fill: 'current' }} />
// //                         </Box>
// //                     </Box>
// //                 </Container>
// //             </Box>

// //             {/* Services Section */}
// //             <Box id="services" sx={{ py: 8, backgroundColor: 'white' }}>
// //                 <Container maxWidth="lg">
// //                     <Box sx={{ textAlign: 'center', mb: 8 }}>
// //                         <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
// //                             השירותים שלי
// //                         </Typography>
// //                         <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
// //                             מגוון שירותי צילום מותאמים לכל משפחה ולכל רגע מיוחד
// //                         </Typography>
// //                     </Box>

// //                     <Grid container spacing={4}>
// //                         <Grid item xs={12} md={4}>
// //                             <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
// //                                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
// //                                     <Avatar sx={{ bgcolor: 'pink.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
// //                                         <BabyIcon sx={{ fontSize: 32, color: 'pink.500' }} />
// //                                     </Avatar>
// //                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
// //                                         צילומי ניובורן
// //                                     </Typography>
// //                                     <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
// //                                         צילומים עדינים ובטוחים לתינוקות בגיל 5-14 יום. כולל פוזות קלאסיות ויצירתיות.
// //                                     </Typography>
// //                                     <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'pink.500', mb: 2 }}>
// //                                         ₪800
// //                                     </Typography>
// //                                     <Button variant="outlined" sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' } }}>
// //                                         פרטים נוספים
// //                                     </Button>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>

// //                         <Grid item xs={12} md={4}>
// //                             <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
// //                                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
// //                                     <Avatar sx={{ bgcolor: 'purple.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
// //                                         <HeartIcon sx={{ fontSize: 32, color: 'purple.500' }} />
// //                                     </Avatar>
// //                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
// //                                         צילומי משפחה
// //                                     </Typography>
// //                                     <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
// //                                         צילומים משפחתיים חמים הכוללים את כל בני המשפחה עם התינוק החדש.
// //                                     </Typography>
// //                                     <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'purple.500', mb: 2 }}>
// //                                         ₪600
// //                                     </Typography>
// //                                     <Button variant="outlined" sx={{ borderColor: 'purple.300', color: 'purple.600', '&:hover': { backgroundColor: 'purple.50' } }}>
// //                                         פרטים נוספים
// //                                     </Button>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>

// //                         <Grid item xs={12} md={4}>
// //                             <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
// //                                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
// //                                     <Avatar sx={{ bgcolor: 'blue.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
// //                                         <CameraIcon sx={{ fontSize: 32, color: 'blue.500' }} />
// //                                     </Avatar>
// //                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
// //                                         חבילה מלאה
// //                                     </Typography>
// //                                     <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
// //                                         שילוב של צילומי ניובורן וצילומי משפחה במחיר מיוחד.
// //                                     </Typography>
// //                                     <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'blue.500', mb: 2 }}>
// //                                         ₪1200
// //                                     </Typography>
// //                                     <Button variant="outlined" sx={{ borderColor: 'blue.300', color: 'blue.600', '&:hover': { backgroundColor: 'blue.50' } }}>
// //                                         פרטים נוספים
// //                                     </Button>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>
// //                     </Grid>
// //                 </Container>
// //             </Box>

// //             {/* Gallery Section */}
// //             <Box id="gallery" sx={{ py: 8, background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
// //                 <Container maxWidth="lg">
// //                     <Box sx={{ textAlign: 'center', mb: 8 }}>
// //                         <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
// //                             גלריית עבודות
// //                         </Typography>
// //                         <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
// //                             מבחר מהעבודות האחרונות שלי - כל תמונה מספרת סיפור של אהבה
// //                         </Typography>
// //                     </Box>

// //                     <Grid container spacing={2}>
// //                         {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
// //                             <Grid item xs={6} md={3} key={i}>
// //                                 <Box
// //                                     sx={{
// //                                         aspectRatio: '1 / 1',
// //                                         borderRadius: '8px',
// //                                         overflow: 'hidden',
// //                                         boxShadow: 1,
// //                                         '&:hover': { boxShadow: 3 },
// //                                         transition: 'box-shadow 0.3s',
// //                                     }}
// //                                 >
// //                                     <Box
// //                                         component="img"
// //                                         src={`/placeholder.svg?height=300&width=300`}
// //                                         alt={`צילום ניובורן ${i}`}
// //                                         sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
// //                                     />
// //                                 </Box>
// //                             </Grid>
// //                         ))}
// //                     </Grid>

// //                     <Box sx={{ textAlign: 'center', mt: 6 }}>
// //                         <Button
// //                             variant="outlined"
// //                             size="large"
// //                             sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' } }}
// //                         >
// //                             צפי בגלריה המלאה
// //                         </Button>
// //                     </Box>
// //                 </Container>
// //             </Box>

// //             {/* About Section */}
// //             <Box id="about" sx={{ py: 8, backgroundColor: 'white' }}>
// //                 <Container maxWidth="lg">
// //                     <Grid container spacing={6} alignItems="center">
// //                         <Grid item xs={12} md={6}>
// //                             <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
// //                                 קצת עליי
// //                             </Typography>
// //                             <Typography variant="body1" sx={{ color: 'grey.600', mb: 3, lineHeight: 1.8 }}>
// //                                 שלום, אני שרה - צלמת מקצועית המתמחה בצילומי ניובורן כבר מעל 8 שנים. אני מאמינה שכל תינוק הוא נס קטן, וכל
// //                                 צילום הוא הזדמנות לתעד רגעים קסומים שלא יחזרו.
// //                             </Typography>
// //                             <Typography variant="body1" sx={{ color: 'grey.600', mb: 4, lineHeight: 1.8 }}>
// //                                 הסטודיו שלי מצויד בכל הנדרש לצילום בטוח ונוח, ואני עוברת הכשרות מתמידות בבטיחות צילומי ניובורן. המטרה
// //                                 שלי היא ליצור אווירה רגועה ונעימה לכל המשפחה.
// //                             </Typography>

// //                             <Grid container spacing={3} sx={{ mb: 4 }}>
// //                                 <Grid item xs={4}>
// //                                     <Box sx={{ textAlign: 'center' }}>
// //                                         <Avatar sx={{ bgcolor: 'pink.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
// //                                             <AwardIcon sx={{ fontSize: 24, color: 'pink.500' }} />
// //                                         </Avatar>
// //                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
// //                                             8+
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             שנות ניסיון
// //                                         </Typography>
// //                                     </Box>
// //                                 </Grid>
// //                                 <Grid item xs={4}>
// //                                     <Box sx={{ textAlign: 'center' }}>
// //                                         <Avatar sx={{ bgcolor: 'purple.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
// //                                             <HeartIcon sx={{ fontSize: 24, color: 'purple.500' }} />
// //                                         </Avatar>
// //                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
// //                                             500+
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             משפחות מרוצות
// //                                         </Typography>
// //                                     </Box>
// //                                 </Grid>
// //                                 <Grid item xs={4}>
// //                                     <Box sx={{ textAlign: 'center' }}>
// //                                         <Avatar sx={{ bgcolor: 'blue.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
// //                                             <StarIcon sx={{ fontSize: 24, color: 'blue.500' }} />
// //                                         </Avatar>
// //                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
// //                                             5.0
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             דירוג ממוצע
// //                                         </Typography>
// //                                     </Box>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>

// //                         <Grid item xs={12} md={6}>
// //                             <Box sx={{ position: 'relative' }}>
// //                                 <Box
// //                                     sx={{
// //                                         aspectRatio: '1 / 1',
// //                                         borderRadius: '16px',
// //                                         overflow: 'hidden',
// //                                         boxShadow: 3,
// //                                     }}
// //                                 >
// //                                     <Box
// //                                         component="img"
// //                                         src="/placeholder.svg?height=500&width=500"
// //                                         alt="שרה - צלמת ניובורן"
// //                                         sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                                     />
// //                                 </Box>
// //                                 <Box sx={{ position: 'absolute', bottom: -16, left: -16, backgroundColor: 'white', borderRadius: '8px', p: 2, boxShadow: 3 }}>
// //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                                         <Box sx={{ display: 'flex' }}>
// //                                             {[1, 2, 3, 4, 5].map((star) => (
// //                                                 <StarIcon key={star} sx={{ fontSize: 16, color: 'yellow.500', fill: 'current' }} />
// //                                             ))}
// //                                         </Box>
// //                                         <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'grey.700' }}>
// //                                             ביקורות מעולות
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>
// //                             </Box>
// //                         </Grid>
// //                     </Grid>
// //                 </Container>
// //             </Box>

// //             {/* Contact Section */}
// //             <Box id="contact" sx={{ py: 8, background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
// //                 <Container maxWidth="lg">
// //                     <Box sx={{ textAlign: 'center', mb: 8 }}>
// //                         <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
// //                             בואו נתחיל לתכנן
// //                         </Typography>
// //                         <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
// //                             אשמח לשמוע עליכם ולתכנן יחד את הצילום המושלם עבור המשפחה שלכם
// //                         </Typography>
// //                     </Box>

// //                     <Grid container spacing={6}>
// //                         <Grid item xs={12} md={6}>
// //                             <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
// //                                 פרטי יצירת קשר
// //                             </Typography>

// //                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// //                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                                     <Avatar sx={{ bgcolor: 'pink.100', width: 48, height: 48 }}>
// //                                         <PhoneIcon sx={{ fontSize: 24, color: 'pink.500' }} />
// //                                     </Avatar>
// //                                     <Box>
// //                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
// //                                             טלפון
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             050-123-4567
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>

// //                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                                     <Avatar sx={{ bgcolor: 'purple.100', width: 48, height: 48 }}>
// //                                         <MailIcon sx={{ fontSize: 24, color: 'purple.500' }} />
// //                                     </Avatar>
// //                                     <Box>
// //                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
// //                                             אימייל
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             sarah@newbornphoto.co.il
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>

// //                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                                     <Avatar sx={{ bgcolor: 'blue.100', width: 48, height: 48 }}>
// //                                         <MapPinIcon sx={{ fontSize: 24, color: 'blue.500' }} />
// //                                     </Avatar>
// //                                     <Box>
// //                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
// //                                             מיקום
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             תל אביב והמרכז
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>

// //                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                                     <Avatar sx={{ bgcolor: 'green.100', width: 48, height: 48 }}>
// //                                         <ClockIcon sx={{ fontSize: 24, color: 'green.500' }} />
// //                                     </Avatar>
// //                                     <Box>
// //                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
// //                                             שעות פעילות
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
// //                                             ראשון-חמישי: 9:00-18:00
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>
// //                             </Box>
// //                         </Grid>

// //                         <Grid item xs={12} md={6}>
// //                             <Card sx={{ borderColor: 'pink.100' }}>
// //                                 <CardContent sx={{ p: 4 }}>
// //                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
// //                                         שלחי הודעה
// //                                     </Typography>
// //                                     <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// //                                         <div>
// //                                             <Typography component="label" htmlFor="full-name" sx={{ display: 'block', mb: 1, fontSize: '0.875rem', fontWeight: 'medium', color: 'grey.700' }}>
// //                                                 שם מלא
// //                                             </Typography>
// //                                             <input
// //                                                 type="text"
// //                                                 id="full-name"
// //                                                 placeholder="השם שלך"
// //                                                 style={{
// //                                                     width: '100%',
// //                                                     padding: '12px 16px',
// //                                                     border: '1px solid #D1D5DB',
// //                                                     borderRadius: '8px',
// //                                                     outline: 'none',
// //                                                     transition: 'border-color 0.2s, box-shadow 0.2s',
// //                                                     '&:focus': {
// //                                                         borderColor: '#EC4899',
// //                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
// //                                                     },
// //                                                 }}
// //                                             />
// //                                         </div>

// //                                         <div>
// //                                             <Typography component="label" htmlFor="phone" sx={{ display: 'block', mb: 1, fontSize: '0.875rem', fontWeight: 'medium', color: 'grey.700' }}>
// //                                                 טלפון
// //                                             </Typography>
// //                                             <input
// //                                                 type="tel"
// //                                                 id="phone"
// //                                                 placeholder="מספר הטלפון שלך"
// //                                                 style={{
// //                                                     width: '100%',
// //                                                     padding: '12px 16px',
// //                                                     border: '1px solid #D1D5DB',
// //                                                     borderRadius: '8px',
// //                                                     outline: 'none',
// //                                                     transition: 'border-color 0.2s, box-shadow 0.2s',
// //                                                     '&:focus': {
// //                                                         borderColor: '#EC4899',
// //                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
// //                                                     },
// //                                                 }}
// //                                             />
// //                                         </div>

// //                                         <div>
// //                                             <Typography component="label" htmlFor="due-date" sx={{ display: 'block', mb: 1, fontSize: '0.875rem', fontWeight: 'medium', color: 'grey.700' }}>
// //                                                 תאריך לידה משוער
// //                                             </Typography>
// //                                             <input
// //                                                 type="date"
// //                                                 id="due-date"
// //                                                 style={{
// //                                                     width: '100%',
// //                                                     padding: '12px 16px',
// //                                                     border: '1px solid #D1D5DB',
// //                                                     borderRadius: '8px',
// //                                                     outline: 'none',
// //                                                     transition: 'border-color 0.2s, box-shadow 0.2s',
// //                                                     '&:focus': {
// //                                                         borderColor: '#EC4899',
// //                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
// //                                                     },
// //                                                 }}
// //                                             />
// //                                         </div>

// //                                         <div>
// //                                             <Typography component="label" htmlFor="message" sx={{ display: 'block', mb: 1, fontSize: '0.875rem', fontWeight: 'medium', color: 'grey.700' }}>
// //                                                 הודעה
// //                                             </Typography>
// //                                             <textarea
// //                                                 id="message"
// //                                                 rows={4}
// //                                                 placeholder="ספרי לי על המשפחה שלך ומה אתם מחפשים..."
// //                                                 style={{
// //                                                     width: '100%',
// //                                                     padding: '12px 16px',
// //                                                     border: '1px solid #D1D5DB',
// //                                                     borderRadius: '8px',
// //                                                     outline: 'none',
// //                                                     resize: 'vertical',
// //                                                     transition: 'border-color 0.2s, box-shadow 0.2s',
// //                                                     '&:focus': {
// //                                                         borderColor: '#EC4899',
// //                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
// //                                                     },
// //                                                 }}
// //                                             />
// //                                         </div>

// //                                         <Button variant="contained" size="large" sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' }, py: 1.5 }}>
// //                                             שלחי הודעה
// //                                         </Button>
// //                                     </Box>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>
// //                     </Grid>
// //                 </Container>
// //             </Box>

// //             {/* Footer */}
// //             <Box component="footer" sx={{ backgroundColor: 'grey.800', color: 'white', py: 6 }}>
// //                 <Container maxWidth="lg">
// //                     <Grid container spacing={4}>
// //                         <Grid item xs={12} md={4}>
// //                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
// //                                 <CameraIcon sx={{ color: 'pink.400', fontSize: 32 }} />
// //                                 <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
// //                                     צילומי ניובורן
// //                                 </Typography>
// //                             </Box>
// //                             <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
// //                                 יוצרת זיכרונות יפים ומתעדת את הרגעים הקסומים הראשונים של התינוק שלכם.
// //                             </Typography>
// //                         </Grid>

// //                         <Grid item xs={12} md={4}>
// //                             <Typography variant="h6" sx={{ fontWeight: 'semibold', mb: 2 }}>
// //                                 קישורים מהירים
// //                             </Typography>
// //                             <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
// //                                 <li>
// //                                     <Link href="#home" color="inherit" underline="none" sx={{ color: 'grey.400', '&:hover': { color: 'pink.400' }, transition: 'color 0.3s' }}>
// //                                         בית
// //                                     </Link>
// //                                 </li>
// //                                 <li>
// //                                     <Link href="#gallery" color="inherit" underline="none" sx={{ color: 'grey.400', '&:hover': { color: 'pink.400' }, transition: 'color 0.3s' }}>
// //                                         גלריה
// //                                     </Link>
// //                                 </li>
// //                                 <li>
// //                                     <Link href="#services" color="inherit" underline="none" sx={{ color: 'grey.400', '&:hover': { color: 'pink.400' }, transition: 'color 0.3s' }}>
// //                                         שירותים
// //                                     </Link>
// //                                 </li>
// //                                 <li>
// //                                     <Link href="#about" color="inherit" underline="none" sx={{ color: 'grey.400', '&:hover': { color: 'pink.400' }, transition: 'color 0.3s' }}>
// //                                         אודות
// //                                     </Link>
// //                                 </li>
// //                                 <li>
// //                                     <Link href="#contact" color="inherit" underline="none" sx={{ color: 'grey.400', '&:hover': { color: 'pink.400' }, transition: 'color 0.3s' }}>
// //                                         יצירת קשר
// //                                     </Link>
// //                                 </li>
// //                             </Box>
// //                         </Grid>

// //                         <Grid item xs={12} md={4}>
// //                             <Typography variant="h6" sx={{ fontWeight: 'semibold', mb: 2 }}>
// //                                 עקבי אחריי
// //                             </Typography>
// //                             <Typography variant="body2" sx={{ color: 'grey.400', mb: 2 }}>
// //                                 ראי עוד מהעבודות שלי ברשתות החברתיות
// //                             </Typography>
// //                             <Box sx={{ display: 'flex', gap: 2 }}>
// //                                 <Button
// //                                     variant="outlined"
// //                                     size="small"
// //                                     startIcon={<Instagram />}
// //                                     sx={{ borderColor: 'grey.600', color: 'grey.400', '&:hover': { color: 'white', borderColor: 'pink.400' } }}
// //                                 >
// //                                     Instagram
// //                                 </Button>
// //                                 <Button
// //                                     variant="outlined"
// //                                     size="small"
// //                                     startIcon={<Facebook />}
// //                                     sx={{ borderColor: 'grey.600', color: 'grey.400', '&:hover': { color: 'white', borderColor: 'pink.400' } }}
// //                                 >
// //                                     Facebook
// //                                 </Button>
// //                             </Box>
// //                         </Grid>
// //                     </Grid>

// //                     <Box sx={{ borderTop: '1px solid', borderColor: 'grey.700', mt: 4, pt: 4, textAlign: 'center', color: 'grey.400' }}>
// //                         <Typography variant="body2">
// //                             &copy; 2024 צילומי ניובורן. כל הזכויות שמורות.
// //                         </Typography>
// //                     </Box>
// //                 </Container>
// //             </Box>
// //         </Box>
// //     );
// // }

// import {
//     AppBar, Toolbar, Button, Typography, Container, Box, Card, CardContent,
//     Avatar, Link, Chip, TextField
// } from '@mui/material';

// import { GridLegacy as Grid } from '@mui/material';


// import {
//     PhotoCamera as CameraIcon, Favorite as HeartIcon, Star as StarIcon, Phone as PhoneIcon,
//     Mail as MailIcon, LocationOn as MapPinIcon, BabyChangingStation as BabyIcon, AccessTime as ClockIcon,
//     EmojiEvents as AwardIcon, Instagram, Facebook
// } from '@mui/icons-material';




// export default function Home() {
//     return (
//         <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
//             {/* Header */}
//             <AppBar position="sticky" color="inherit" elevation={1} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                 <Container maxWidth="lg">
//                     <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <CameraIcon sx={{ color: 'pink.500', fontSize: 32 }} />
//                             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
//                                 צילומי ניובורן
//                             </Typography>
//                         </Box>
//                         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
//                             <Link href="#home" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                                 בית
//                             </Link>
//                             <Link href="#gallery" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                                 גלריה
//                             </Link>
//                             <Link href="#services" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                                 שירותים
//                             </Link>
//                             <Link href="#about" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                                 אודות
//                             </Link>
//                             <Link href="#contact" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                                 יצירת קשר
//                             </Link>
//                         </Box>
//                         <Button variant="contained" startIcon={<PhoneIcon />} sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' } }}>
//                             הזמני צילום
//                         </Button>
//                     </Toolbar>
//                 </Container>
//             </AppBar>

//             {/* Hero Section */}
//             <Box id="home" sx={{ py: 8, px: 2, textAlign: 'center' }}>
//                 <Container maxWidth="md">
//                     <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
//                         <Chip
//                             icon={<HeartIcon sx={{ mr: 0.5 }} />}
//                             label="צלמת מקצועית לניובורן"
//                             sx={{ mb: 4, backgroundColor: 'pink.100', color: 'pink.700', '&:hover': { backgroundColor: 'pink.200' } }}
//                         />
//                         <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3, lineHeight: 1.2 }}>
//                             רגעים קסומים של
//                             <Typography component="span" variant="h2" sx={{ color: 'pink.500', display: 'block', fontWeight: 'bold' }}>
//                                 התחלות חדשות
//                             </Typography>
//                         </Typography>
//                         <Typography variant="h6" sx={{ color: 'grey.600', mb: 4, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
//                             אני מתמחה בצילום ניובורן עדין ובטוח, ויוצרת זיכרונות יפים לכל המשפחה. כל צילום הוא סיפור ייחודי של אהבה
//                             והתחלה חדשה.
//                         </Typography>
//                         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
//                             <Button
//                                 variant="contained"
//                                 size="large"
//                                 startIcon={<CameraIcon />}
//                                 sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' }, px: 4, py: 1.5 }}
//                             >
//                                 הזמני צילום עכשיו
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 size="large"
//                                 sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' }, px: 4, py: 1.5 }}
//                             >
//                                 צפי בגלריה
//                             </Button>
//                         </Box>
//                     </Box>

//                     {/* Hero Image */}
//                     <Box sx={{ mt: 8, position: 'relative' }}>
//                         <Box
//                             sx={{
//                                 aspectRatio: '16 / 9',
//                                 borderRadius: '16px',
//                                 overflow: 'hidden',
//                                 boxShadow: 3,
//                                 background: 'linear-gradient(to bottom right, #FFF0F5, #E6E6FA)',
//                             }}
//                         >
//                             <Box
//                                 component="img"
//                                 src="/placeholder.svg?height=600&width=1000"
//                                 alt="צילום ניובורן מקצועי"
//                                 sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                             />
//                         </Box>
//                         <Box sx={{ position: 'absolute', bottom: -24, right: -24, backgroundColor: 'white', borderRadius: '50%', p: 2, boxShadow: 3 }}>
//                             <StarIcon sx={{ fontSize: 32, color: 'yellow.600', fill: 'current' }} />
//                         </Box>
//                     </Box>
//                 </Container>
//             </Box>

//             {/* Services Section */}
//             <Box id="services" sx={{ py: 8, backgroundColor: 'white' }}>
//                 <Container maxWidth="lg">
//                     <Box sx={{ textAlign: 'center', mb: 8 }}>
//                         <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//                             השירותים שלי
//                         </Typography>
//                         <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
//                             מגוון שירותי צילום מותאמים לכל משפחה ולכל רגע מיוחד
//                         </Typography>
//                     </Box>

//                     <Grid container spacing={4}>
//                         <Grid item xs={12} md={4}>
//                             <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
//                                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                                     <Avatar sx={{ bgcolor: 'pink.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
//                                         <BabyIcon sx={{ fontSize: 32, color: 'pink.500' }} />
//                                     </Avatar>
//                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//                                         צילומי ניובורן
//                                     </Typography>
//                                     <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
//                                         צילומים עדינים ובטוחים לתינוקות בגיל 5-14 יום. כולל פוזות קלאסיות ויצירתיות.
//                                     </Typography>
//                                     <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'pink.500', mb: 2 }}>
//                                         ₪800
//                                     </Typography>
//                                     <Button variant="outlined" sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' } }}>
//                                         פרטים נוספים
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>

//                         <Grid item xs={12} md={4}>
//                             <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
//                                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                                     <Avatar sx={{ bgcolor: 'purple.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
//                                         <HeartIcon sx={{ fontSize: 32, color: 'purple.500' }} />
//                                     </Avatar>
//                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//                                         צילומי משפחה
//                                     </Typography>
//                                     <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
//                                         צילומים משפחתיים חמים הכוללים את כל בני המשפחה עם התינוק החדש.
//                                     </Typography>
//                                     <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'purple.500', mb: 2 }}>
//                                         ₪600
//                                     </Typography>
//                                     <Button variant="outlined" sx={{ borderColor: 'purple.300', color: 'purple.600', '&:hover': { backgroundColor: 'purple.50' } }}>
//                                         פרטים נוספים
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>

//                         <Grid item xs={12} md={4}>
//                             <Card sx={{ borderColor: 'pink.100', '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
//                                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                                     <Avatar sx={{ bgcolor: 'blue.100', width: 64, height: 64, mx: 'auto', mb: 3 }}>
//                                         <CameraIcon sx={{ fontSize: 32, color: 'blue.500' }} />
//                                     </Avatar>
//                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//                                         חבילה מלאה
//                                     </Typography>
//                                     <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
//                                         שילוב של צילומי ניובורן וצילומי משפחה במחיר מיוחד.
//                                     </Typography>
//                                     <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'blue.500', mb: 2 }}>
//                                         ₪1200
//                                     </Typography>
//                                     <Button variant="outlined" sx={{ borderColor: 'blue.300', color: 'blue.600', '&:hover': { backgroundColor: 'blue.50' } }}>
//                                         פרטים נוספים
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>

//             {/* Gallery Section */}
//             <Box id="gallery" sx={{ py: 8, background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
//                 <Container maxWidth="lg">
//                     <Box sx={{ textAlign: 'center', mb: 8 }}>
//                         <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//                             גלריית עבודות
//                         </Typography>
//                         <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
//                             מבחר מהעבודות האחרונות שלי - כל תמונה מספרת סיפור של אהבה
//                         </Typography>
//                     </Box>

//                     <Grid container spacing={2}>
//                         {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                             <Grid item xs={6} md={3} key={i}>
//                                 <Box
//                                     sx={{
//                                         aspectRatio: '1 / 1',
//                                         borderRadius: '8px',
//                                         overflow: 'hidden',
//                                         boxShadow: 1,
//                                         '&:hover': { boxShadow: 3 },
//                                         transition: 'box-shadow 0.3s',
//                                     }}
//                                 >
//                                     <Box
//                                         component="img"
//                                         src={`/placeholder.svg?height=300&width=300`}
//                                         alt={`צילום ניובורן ${i}`}
//                                         sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
//                                     />
//                                 </Box>
//                             </Grid>
//                         ))}
//                     </Grid>

//                     <Box sx={{ textAlign: 'center', mt: 6 }}>
//                         <Button
//                             variant="outlined"
//                             size="large"
//                             sx={{ borderColor: 'pink.300', color: 'pink.600', '&:hover': { backgroundColor: 'pink.50' } }}
//                         >
//                             צפי בגלריה המלאה
//                         </Button>
//                     </Box>
//                 </Container>
//             </Box>

//             {/* About Section */}
//             <Box id="about" sx={{ py: 8, backgroundColor: 'white' }}>
//                 <Container maxWidth="lg">
//                     <Grid container spacing={6} alignItems="center">
//                         <Grid item xs={12} md={6}>
//                             <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
//                                 קצת עליי
//                             </Typography>
//                             <Typography variant="body1" sx={{ color: 'grey.600', mb: 3, lineHeight: 1.8 }}>
//                                 שלום, אני שרה - צלמת מקצועית המתמחה בצילומי ניובורן כבר מעל 8 שנים. אני מאמינה שכל תינוק הוא נס קטן, וכל
//                                 צילום הוא הזדמנות לתעד רגעים קסומים שלא יחזרו.
//                             </Typography>
//                             <Typography variant="body1" sx={{ color: 'grey.600', mb: 4, lineHeight: 1.8 }}>
//                                 הסטודיו שלי מצויד בכל הנדרש לצילום בטוח ונוח, ואני עוברת הכשרות מתמידות בבטיחות צילומי ניובורן. המטרה
//                                 שלי היא ליצור אווירה רגועה ונעימה לכל המשפחה.
//                             </Typography>

//                             <Grid container spacing={3} sx={{ mb: 4 }}>
//                                 <Grid item xs={4}>
//                                     <Box sx={{ textAlign: 'center' }}>
//                                         <Avatar sx={{ bgcolor: 'pink.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
//                                             <AwardIcon sx={{ fontSize: 24, color: 'pink.500' }} />
//                                         </Avatar>
//                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
//                                             8+
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             שנות ניסיון
//                                         </Typography>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={4}>
//                                     <Box sx={{ textAlign: 'center' }}>
//                                         <Avatar sx={{ bgcolor: 'purple.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
//                                             <HeartIcon sx={{ fontSize: 24, color: 'purple.500' }} />
//                                         </Avatar>
//                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
//                                             500+
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             משפחות מרוצות
//                                         </Typography>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={4}>
//                                     <Box sx={{ textAlign: 'center' }}>
//                                         <Avatar sx={{ bgcolor: 'blue.100', width: 48, height: 48, mx: 'auto', mb: 1 }}>
//                                             <StarIcon sx={{ fontSize: 24, color: 'blue.500' }} />
//                                         </Avatar>
//                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
//                                             5.0
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             דירוג ממוצע
//                                         </Typography>
//                                     </Box>
//                                 </Grid>
//                             </Grid>
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <Box sx={{ position: 'relative' }}>
//                                 <Box
//                                     sx={{
//                                         aspectRatio: '1 / 1',
//                                         borderRadius: '16px',
//                                         overflow: 'hidden',
//                                         boxShadow: 3,
//                                     }}
//                                 >
//                                     <Box
//                                         component="img"
//                                         src="/placeholder.svg?height=500&width=500"
//                                         alt="שרה - צלמת ניובורן"
//                                         sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                     />
//                                 </Box>
//                                 <Box sx={{ position: 'absolute', bottom: -16, left: -16, backgroundColor: 'white', borderRadius: '8px', p: 2, boxShadow: 3 }}>
//                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                         <Box sx={{ display: 'flex' }}>
//                                             {[1, 2, 3, 4, 5].map((star) => (
//                                                 <StarIcon key={star} sx={{ fontSize: 16, color: 'yellow.500', fill: 'current' }} />
//                                             ))}
//                                         </Box>
//                                         <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'grey.700' }}>
//                                             ביקורות מעולות
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>

//             {/* Contact Section */}
//             <Box id="contact" sx={{ py: 8, background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
//                 <Container maxWidth="lg">
//                     <Box sx={{ textAlign: 'center', mb: 8 }}>
//                         <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//                             בואו נתחיל לתכנן
//                         </Typography>
//                         <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: '600px', mx: 'auto' }}>
//                             אשמח לשמוע עליכם ולתכנן יחד את הצילום המושלם עבור המשפחה שלכם
//                         </Typography>
//                     </Box>

//                     <Grid container spacing={6}>
//                         <Grid item xs={12} md={6}>
//                             <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
//                                 פרטי יצירת קשר
//                             </Typography>

//                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                                     <Avatar sx={{ bgcolor: 'pink.100', width: 48, height: 48 }}>
//                                         <PhoneIcon sx={{ fontSize: 24, color: 'pink.500' }} />
//                                     </Avatar>
//                                     <Box>
//                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
//                                             טלפון
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             050-123-4567
//                                         </Typography>
//                                     </Box>
//                                 </Box>

//                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                                     <Avatar sx={{ bgcolor: 'purple.100', width: 48, height: 48 }}>
//                                         <MailIcon sx={{ fontSize: 24, color: 'purple.500' }} />
//                                     </Avatar>
//                                     <Box>
//                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
//                                             אימייל
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             sarah@newbornphoto.co.il
//                                         </Typography>
//                                     </Box>
//                                 </Box>

//                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                                     <Avatar sx={{ bgcolor: 'blue.100', width: 48, height: 48 }}>
//                                         <MapPinIcon sx={{ fontSize: 24, color: 'blue.500' }} />
//                                     </Avatar>
//                                     <Box>
//                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
//                                             מיקום
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             תל אביב והמרכז
//                                         </Typography>
//                                     </Box>
//                                 </Box>

//                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                                     <Avatar sx={{ bgcolor: 'green.100', width: 48, height: 48 }}>
//                                         <ClockIcon sx={{ fontSize: 24, color: 'green.500' }} />
//                                     </Avatar>
//                                     <Box>
//                                         <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'grey.800' }}>
//                                             שעות פעילות
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                                             ראשון-חמישי: 9:00-18:00
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <Card sx={{ borderColor: 'pink.100' }}>
//                                 <CardContent sx={{ p: 4 }}>
//                                     <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 3 }}>
//                                         שלחי הודעה
//                                     </Typography>
//                                     <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//                                         <TextField
//                                             label="שם מלא"
//                                             id="full-name"
//                                             placeholder="השם שלך"
//                                             variant="outlined"
//                                             fullWidth
//                                             sx={{
//                                                 '& .MuiOutlinedInput-root': {
//                                                     '&.Mui-focused fieldset': {
//                                                         borderColor: 'pink.500',
//                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
//                                                     },
//                                                 },
//                                             }}
//                                         />

//                                         <TextField
//                                             label="טלפון"
//                                             id="phone"
//                                             placeholder="מספר הטלפון שלך"
//                                             type="tel"
//                                             variant="outlined"
//                                             fullWidth
//                                             sx={{
//                                                 '& .MuiOutlinedInput-root': {
//                                                     '&.Mui-focused fieldset': {
//                                                         borderColor: 'pink.500',
//                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
//                                                     },
//                                                 },
//                                             }}
//                                         />

//                                         <TextField
//                                             label="תאריך לידה משוער"
//                                             id="due-date"
//                                             type="date"
//                                             variant="outlined"
//                                             fullWidth
//                                             InputLabelProps={{ shrink: true }} // Ensures the label is always "shrunk" for date inputs
//                                             sx={{
//                                                 '& .MuiOutlinedInput-root': {
//                                                     '&.Mui-focused fieldset': {
//                                                         borderColor: 'pink.500',
//                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
//                                                     },
//                                                 },
//                                             }}
//                                         />

//                                         <TextField
//                                             label="הודעה"
//                                             id="message"
//                                             placeholder="ספרי לי על המשפחה שלך ומה אתם מחפשים..."
//                                             multiline
//                                             rows={4}
//                                             variant="outlined"
//                                             fullWidth
//                                             sx={{
//                                                 '& .MuiOutlinedInput-root': {
//                                                     '&.Mui-focused fieldset': {
//                                                         borderColor: 'pink.500',
//                                                         boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.25)',
//                                                     },
//                                                 },
//                                             }}
//                                         />
//                                         <Button
//                                             variant="contained"
//                                             size="large"
//                                             endIcon={<MailIcon />}
//                                             sx={{ backgroundColor: 'pink.500', '&:hover': { backgroundColor: 'pink.600' }, py: 1.5 }}
//                                         >
//                                             שלחי הודעה
//                                         </Button>
//                                     </Box>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>

//             {/* Footer */}
//             <Box sx={{ backgroundColor: 'grey.800', color: 'white', py: 4, px: 2 }}>
//                 <Container maxWidth="lg">
//                     <Grid container spacing={4} justifyContent="space-between" alignItems="center">
//                         <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'right' } }}>
//                                 <CameraIcon sx={{ color: 'pink.300', fontSize: 28 }} />
//                                 <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                     צילומי ניובורן
//                                 </Typography>
//                             </Box>
//                             <Typography variant="body2" sx={{ color: 'grey.400', mt: 1 }}>
//                                 © 2025 כל הזכויות שמורות.
//                             </Typography>
//                         </Grid>
//                         <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
//                             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
//                                 <Link href="#" color="inherit" sx={{ '&:hover': { color: 'pink.300' } }}>
//                                     <Instagram sx={{ fontSize: 28 }} />
//                                 </Link>
//                                 <Link href="#" color="inherit" sx={{ '&:hover': { color: 'pink.300' } }}>
//                                     <Facebook sx={{ fontSize: 28 }} />
//                                 </Link>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
//                             <Typography variant="body2" sx={{ color: 'grey.400' }}>
//                                 עוצב ופותח על ידי [השם שלך/שם החברה]
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>
//         </Box>
//     );
// }

import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import Navbar from './NavBar';
import GallerySection from './GalerySection';
import ContactSection from './ContactSection';

export default function Home() {
    return (
        <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #FFF0F5, #FFFFFF)' }}>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <GallerySection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </Box>
    );
}