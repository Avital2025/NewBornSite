import { Container, Typography, Button, Grid, Card, CardMedia, Box } from "@mui/material";

export default function HomePage() {
  const images = ["baby1.jpg", "baby2.jpg", "baby3.jpg"];

  return (
    <Box sx={{ bgcolor: "#fff7f9", minHeight: "100vh", py: 6 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          צלמת Newborn - נועה לוי
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          תיעוד הרגעים הראשונים של התינוק שלך – באהבה, רכות ואור טבעי
        </Typography>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" size="large">
            צור קשר
          </Button>
        </Box>

        <Grid container spacing={4} mt={2}>
          {images.map((img, idx) => (
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={`/images/${img}`}
                  alt={`תמונה ${idx + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
