import {
    AppBar, Toolbar, Typography, Container, Box, Link
} from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="sticky" color="inherit" elevation={1} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
                    {/* הכותרת בצד אחד */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
                            צילומי ניובורן
                        </Typography>
                    </Box>

                    {/* הלינקים במרכז ללא 'יצירת קשר' */}
                    <Box sx={{ display: 'flex', gap: 4, flexGrow: 1, justifyContent: 'center' }}>
                        <Link href="#services" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
                            שירותים
                        </Link>
                        <Link href="#about" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
                            אודות
                        </Link>
                        <Link href="#gallery" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
                            גלריה
                        </Link>
                        <Link href="#home" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
                            בית
                        </Link>
                    </Box>

                    {/* יצירת קשר בצד השני */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Link href="#contact" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
                            יצירת קשר
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

// import {
//     AppBar, Toolbar, Typography, Container, Box, Link
// } from '@mui/material';
// import { PhotoCamera as CameraIcon } from '@mui/icons-material';

// export default function Navbar() {
//     return (
//         <AppBar position="sticky" color="inherit" elevation={1} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//             <Container maxWidth="lg">
//                 <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>

//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <CameraIcon sx={{ color: 'pink.500', fontSize: 32 }} />
//                         <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'grey.800' }}>
//                             צילומי ניובורן
//                         </Typography>
//                     </Box>

//                     <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
//                         <Link href="#contact" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                             יצירת קשר
//                         </Link>
//                         <Link href="#services" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                             שירותים
//                         </Link>

//                         <Link href="#about" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                             אודות
//                         </Link>

//                         <Link href="#gallery" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                             גלריה
//                         </Link>
//                         <Link href="#home" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'pink.500' }, transition: 'color 0.3s' }}>
//                             בית
//                         </Link>
//                     </Box>


//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
