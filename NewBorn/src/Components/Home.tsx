// "use client"

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   TextField,
//   Rating,
//   Avatar,
//   IconButton,
//   Paper,
//   Divider,
//   Stack,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material"
// import {
//   Camera,
//   Favorite,
//   Baby,
//   Phone,
//   Email,
//   LocationOn,
//   Schedule,
//   Award,
//   People,
//   Instagram,
//   Facebook,
//   Menu as MenuIcon,
// } from "@mui/icons-material"
// import Image from "next/image"
// import Link from "next/link"

// export default function HomePage() {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
//       {/* Header */}
//       <AppBar
//         position="sticky"
//         sx={{
//           bgcolor: "rgba(255, 255, 255, 0.95)",
//           backdropFilter: "blur(10px)",
//           color: "text.primary",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Toolbar>
//           <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//             <Camera sx={{ mr: 1, color: "primary.main" }} />
//             <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
//               Sweet Moments
//             </Typography>
//           </Box>
//           {!isMobile && (
//             <Stack direction="row" spacing={3} alignItems="center">
//               <Link href="#about" style={{ textDecoration: "none" }}>
//                 <Typography sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>About</Typography>
//               </Link>
//               <Link href="#gallery" style={{ textDecoration: "none" }}>
//                 <Typography sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>Gallery</Typography>
//               </Link>
//               <Link href="#services" style={{ textDecoration: "none" }}>
//                 <Typography sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>Services</Typography>
//               </Link>
//               <Link href="#contact" style={{ textDecoration: "none" }}>
//                 <Typography sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>Contact</Typography>
//               </Link>
//               <Button variant="contained" color="primary">
//                 Book Session
//               </Button>
//             </Stack>
//           )}
//           {isMobile && (
//             <IconButton>
//               <MenuIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Box sx={{ py: { xs: 8, lg: 16 }, bgcolor: "background.paper" }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} lg={6}>
//               <Stack spacing={4}>
//                 <Box>
//                   <Chip
//                     icon={<Favorite />}
//                     label="Newborn Photography Specialist"
//                     color="primary"
//                     variant="outlined"
//                     sx={{ mb: 2 }}
//                   />
//                   <Typography
//                     variant="h2"
//                     component="h1"
//                     sx={{
//                       fontWeight: "bold",
//                       mb: 2,
//                       fontSize: { xs: "2.5rem", lg: "3.5rem" },
//                     }}
//                   >
//                     Capturing Your Baby's{" "}
//                     <Typography component="span" variant="inherit" color="primary" sx={{ display: "block" }}>
//                       First Moments
//                     </Typography>
//                   </Typography>
//                   <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//                     Professional newborn photography that preserves the precious early days of your little one's life
//                     with artistic beauty and tender care.
//                   </Typography>
//                 </Box>
//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <Button variant="contained" size="large" startIcon={<Camera />} sx={{ px: 4, py: 1.5 }}>
//                     Book Your Session
//                   </Button>
//                   <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
//                     View Portfolio
//                   </Button>
//                 </Stack>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 3, pt: 2 }}>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                     <Rating value={5} readOnly size="small" />
//                     <Typography variant="body2" color="text.secondary">
//                       5.0 (150+ reviews)
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Stack>
//             </Grid>
//             <Grid item xs={12} lg={6}>
//               <Box sx={{ position: "relative" }}>
//                 <Paper
//                   elevation={8}
//                   sx={{
//                     borderRadius: 4,
//                     overflow: "hidden",
//                     position: "relative",
//                   }}
//                 >
//                   <Image
//                     src="/placeholder.svg?height=600&width=500"
//                     alt="Newborn baby sleeping peacefully"
//                     width={500}
//                     height={600}
//                     style={{ width: "100%", height: "auto", display: "block" }}
//                   />
//                 </Paper>
//                 <Paper
//                   elevation={4}
//                   sx={{
//                     position: "absolute",
//                     bottom: -24,
//                     left: -24,
//                     p: 2,
//                     borderRadius: 3,
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                     <Avatar sx={{ bgcolor: "primary.main" }}>
//                       <Baby />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="subtitle1" fontWeight="bold">
//                         Safe & Gentle
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Certified newborn specialist
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Paper>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* About Section */}
//       <Box id="about" sx={{ py: 10, bgcolor: "background.default" }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} lg={6}>
//               <Box sx={{ position: "relative" }}>
//                 <Paper elevation={4} sx={{ borderRadius: 4, overflow: "hidden" }}>
//                   <Image
//                     src="/placeholder.svg?height=500&width=500"
//                     alt="Photographer with newborn"
//                     width={500}
//                     height={500}
//                     style={{ width: "100%", height: "auto", display: "block" }}
//                   />
//                 </Paper>
//                 <Avatar
//                   sx={{
//                     position: "absolute",
//                     top: 16,
//                     right: 16,
//                     bgcolor: "primary.main",
//                     width: 56,
//                     height: 56,
//                   }}
//                 >
//                   <Award />
//                 </Avatar>
//               </Box>
//             </Grid>
//             <Grid item xs={12} lg={6}>
//               <Stack spacing={3}>
//                 <Box>
//                   <Chip label="About Me" color="primary" variant="outlined" sx={{ mb: 2 }} />
//                   <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
//                     Hi, I'm Sarah
//                   </Typography>
//                   <Typography variant="h6" color="text.secondary" paragraph>
//                     With over 8 years of experience in newborn photography, I specialize in creating timeless portraits
//                     that capture the pure innocence and beauty of your newest family member.
//                   </Typography>
//                   <Typography color="text.secondary">
//                     I'm certified in newborn safety and posing, ensuring your baby's comfort and security throughout our
//                     session. My studio is equipped with professional heating and safety equipment to create the perfect
//                     environment for your little one.
//                   </Typography>
//                 </Box>
//                 <Grid container spacing={3}>
//                   <Grid item xs={6}>
//                     <Paper
//                       elevation={1}
//                       sx={{
//                         p: 3,
//                         textAlign: "center",
//                         bgcolor: "primary.50",
//                         borderRadius: 2,
//                       }}
//                     >
//                       <Typography variant="h4" fontWeight="bold" color="primary">
//                         500+
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Happy Families
//                       </Typography>
//                     </Paper>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Paper
//                       elevation={1}
//                       sx={{
//                         p: 3,
//                         textAlign: "center",
//                         bgcolor: "primary.50",
//                         borderRadius: 2,
//                       }}
//                     >
//                       <Typography variant="h4" fontWeight="bold" color="primary">
//                         8
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Years Experience
//                       </Typography>
//                     </Paper>
//                   </Grid>
//                 </Grid>
//               </Stack>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Gallery Section */}
//       <Box id="gallery" sx={{ py: 10, bgcolor: "background.paper" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Chip label="Portfolio" color="primary" variant="outlined" sx={{ mb: 2 }} />
//             <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
//               Recent Work
//             </Typography>
//             <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
//               Each session is unique and tailored to capture your baby's personality and your family's love.
//             </Typography>
//           </Box>
//           <Grid container spacing={3}>
//             {[...Array(6)].map((_, i) => (
//               <Grid item xs={12} md={6} lg={4} key={i}>
//                 <Card
//                   sx={{
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       transform: "translateY(-4px)",
//                       boxShadow: 4,
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={`/placeholder.svg?height=300&width=400`}
//                     alt={`Newborn photography ${i + 1}`}
//                     sx={{
//                       transition: "transform 0.3s ease",
//                       "&:hover": { transform: "scale(1.05)" },
//                     }}
//                   />
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//           <Box sx={{ textAlign: "center", mt: 6 }}>
//             <Button variant="outlined" size="large">
//               View Full Gallery
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Services Section */}
//       <Box id="services" sx={{ py: 10, bgcolor: "background.default" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Chip label="Services" color="primary" variant="outlined" sx={{ mb: 2 }} />
//             <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
//               Photography Packages
//             </Typography>
//             <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
//               Choose the perfect package to capture your baby's precious moments.
//             </Typography>
//           </Box>
//           <Grid container spacing={4}>
//             {[
//               {
//                 name: "Essential",
//                 price: "$299",
//                 description: "Perfect for first-time parents",
//                 features: ["1-hour studio session", "15 edited digital images", "Online gallery", "Print release"],
//                 popular: false,
//               },
//               {
//                 name: "Premium",
//                 price: "$499",
//                 description: "Complete newborn experience",
//                 features: [
//                   "2-hour studio session",
//                   "30 edited digital images",
//                   "Family portraits included",
//                   "Props & outfits provided",
//                   "USB with all images",
//                 ],
//                 popular: true,
//               },
//               {
//                 name: "Luxury",
//                 price: "$799",
//                 description: "Ultimate photography experience",
//                 features: [
//                   "3-hour session",
//                   "50+ edited digital images",
//                   "Custom photo album",
//                   "Canvas print included",
//                   "Milestone session discount",
//                 ],
//                 popular: false,
//               },
//             ].map((pkg, i) => (
//               <Grid item xs={12} md={4} key={i}>
//                 <Card
//                   elevation={pkg.popular ? 8 : 2}
//                   sx={{
//                     height: "100%",
//                     position: "relative",
//                     border: pkg.popular ? 2 : 0,
//                     borderColor: pkg.popular ? "primary.main" : "transparent",
//                     transition: "all 0.3s ease",
//                     "&:hover": { boxShadow: 6 },
//                   }}
//                 >
//                   {pkg.popular && (
//                     <Chip
//                       label="Most Popular"
//                       color="primary"
//                       sx={{
//                         position: "absolute",
//                         top: 16,
//                         right: 16,
//                         zIndex: 1,
//                       }}
//                     />
//                   )}
//                   <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
//                     <Box sx={{ mb: 3 }}>
//                       <Typography variant="h5" fontWeight="bold" gutterBottom>
//                         {pkg.name}
//                       </Typography>
//                       <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
//                         {pkg.price}
//                       </Typography>
//                       <Typography color="text.secondary">{pkg.description}</Typography>
//                     </Box>
//                     <Stack spacing={2} sx={{ flexGrow: 1, mb: 3 }}>
//                       {pkg.features.map((feature, j) => (
//                         <Box key={j} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                           <Box
//                             sx={{
//                               width: 8,
//                               height: 8,
//                               borderRadius: "50%",
//                               bgcolor: "primary.main",
//                             }}
//                           />
//                           <Typography color="text.secondary">{feature}</Typography>
//                         </Box>
//                       ))}
//                     </Stack>
//                     <Button variant="contained" fullWidth size="large" sx={{ mt: "auto" }}>
//                       Choose Package
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Testimonials */}
//       <Box sx={{ py: 10, bgcolor: "background.paper" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Chip label="Testimonials" color="primary" variant="outlined" sx={{ mb: 2 }} />
//             <Typography variant="h3" component="h2" fontWeight="bold">
//               What Parents Say
//             </Typography>
//           </Box>
//           <Grid container spacing={4}>
//             {[
//               {
//                 name: "Emily & David",
//                 text: "Sarah captured the most beautiful moments of our daughter's first days. The photos are absolutely stunning and we'll treasure them forever.",
//                 rating: 5,
//               },
//               {
//                 name: "Jessica & Mark",
//                 text: "Professional, patient, and incredibly talented. Sarah made us feel comfortable and the results exceeded our expectations.",
//                 rating: 5,
//               },
//               {
//                 name: "Rachel & Tom",
//                 text: "The attention to detail and care Sarah showed during our session was amazing. Our son was so comfortable throughout the entire shoot.",
//                 rating: 5,
//               },
//             ].map((testimonial, i) => (
//               <Grid item xs={12} md={4} key={i}>
//                 <Card
//                   elevation={2}
//                   sx={{
//                     height: "100%",
//                     transition: "all 0.3s ease",
//                     "&:hover": { boxShadow: 4 },
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Stack spacing={2}>
//                       <Rating value={testimonial.rating} readOnly />
//                       <Typography variant="body1" sx={{ fontStyle: "italic" }}>
//                         "{testimonial.text}"
//                       </Typography>
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                         <Avatar sx={{ bgcolor: "primary.light" }}>
//                           <People />
//                         </Avatar>
//                         <Typography variant="subtitle1" fontWeight="bold">
//                           {testimonial.name}
//                         </Typography>
//                       </Box>
//                     </Stack>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Contact Section */}
//       <Box id="contact" sx={{ py: 10, bgcolor: "background.default" }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6}>
//             <Grid item xs={12} lg={6}>
//               <Stack spacing={4}>
//                 <Box>
//                   <Chip label="Contact" color="primary" variant="outlined" sx={{ mb: 2 }} />
//                   <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
//                     Let's Capture Your Baby's Story
//                   </Typography>
//                   <Typography variant="h6" color="text.secondary">
//                     Ready to book your newborn session? I'd love to hear from you and discuss how we can create
//                     beautiful memories together.
//                   </Typography>
//                 </Box>
//                 <Stack spacing={3}>
//                   {[
//                     { icon: Phone, title: "Phone", value: "(555) 123-4567" },
//                     { icon: Email, title: "Email", value: "hello@sweetmoments.com" },
//                     { icon: LocationOn, title: "Studio Location", value: "Downtown Photography District" },
//                     { icon: Schedule, title: "Best Time to Book", value: "During pregnancy (32-36 weeks)" },
//                   ].map((contact, i) => (
//                     <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                       <Avatar sx={{ bgcolor: "primary.light" }}>
//                         <contact.icon />
//                       </Avatar>
//                       <Box>
//                         <Typography variant="subtitle1" fontWeight="bold">
//                           {contact.title}
//                         </Typography>
//                         <Typography color="text.secondary">{contact.value}</Typography>
//                       </Box>
//                     </Box>
//                   ))}
//                 </Stack>
//               </Stack>
//             </Grid>
//             <Grid item xs={12} lg={6}>
//               <Paper
//                 elevation={4}
//                 sx={{
//                   p: 4,
//                   bgcolor: "primary.50",
//                   borderRadius: 3,
//                 }}
//               >
//                 <Stack spacing={3} component="form">
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField fullWidth label="Parent's Name" variant="outlined" placeholder="Your name" />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField fullWidth label="Phone" variant="outlined" placeholder="Your phone" />
//                     </Grid>
//                   </Grid>
//                   <TextField fullWidth label="Email" type="email" variant="outlined" placeholder="your@email.com" />
//                   <TextField
//                     fullWidth
//                     label="Due Date"
//                     type="date"
//                     variant="outlined"
//                     InputLabelProps={{ shrink: true }}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Message"
//                     multiline
//                     rows={4}
//                     variant="outlined"
//                     placeholder="Tell me about your vision for the session..."
//                   />
//                   <Button variant="contained" size="large" startIcon={<Favorite />} sx={{ py: 2 }}>
//                     Send Message
//                   </Button>
//                 </Stack>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Box sx={{ bgcolor: "grey.900", color: "white", py: 6 }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Stack spacing={2}>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                   <Camera sx={{ color: "primary.light" }} />
//                   <Typography variant="h5" fontWeight="bold">
//                     Sweet Moments
//                   </Typography>
//                 </Box>
//                 <Typography color="grey.400">
//                   Capturing the precious early moments of your baby's life with artistic beauty and tender care.
//                 </Typography>
//               </Stack>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Stack spacing={2}>
//                 <Typography variant="h6" fontWeight="bold">
//                   Quick Links
//                 </Typography>
//                 <Stack spacing={1}>
//                   {["About", "Gallery", "Services", "Contact"].map((link) => (
//                     <Link key={link} href={`#${link.toLowerCase()}`} style={{ textDecoration: "none" }}>
//                       <Typography color="grey.400" sx={{ "&:hover": { color: "primary.light" } }}>
//                         {link}
//                       </Typography>
//                     </Link>
//                   ))}
//                 </Stack>
//               </Stack>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Stack spacing={2}>
//                 <Typography variant="h6" fontWeight="bold">
//                   Follow Us
//                 </Typography>
//                 <Typography color="grey.400">Stay updated with our latest work and photography tips.</Typography>
//                 <Stack direction="row" spacing={1}>
//                   <IconButton sx={{ color: "grey.400", "&:hover": { color: "primary.light" } }}>
//                     <Instagram />
//                   </IconButton>
//                   <IconButton sx={{ color: "grey.400", "&:hover": { color: "primary.light" } }}>
//                     <Facebook />
//                   </IconButton>
//                 </Stack>
//               </Stack>
//             </Grid>
//           </Grid>
//           <Divider sx={{ my: 4, borderColor: "grey.800" }} />
//           <Typography textAlign="center" color="grey.400">
//             © 2024 Sweet Moments Photography. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>
//     </Box>
//   )
// }
