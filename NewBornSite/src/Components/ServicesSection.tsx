import {
    Box, Typography, Container, GridLegacy as Grid, Card, CardContent, Avatar
  } from '@mui/material';
  import StarIcon from '@mui/icons-material/Star';
  
  const testimonials = [
    {
      name: 'מורן לוי',
      content: 'חוויה מדהימה! הצילומים היו נעימים, מקצועיים, ויצאו תמונות פשוט מושלמות.',
      color: 'pink',
    },
    {
      name: 'דנה פרץ',
      content: 'ממליצה בחום! ידע להרגיע את התינוק, לכוון אותנו, והתוצאה מדהימה.',
      color: 'purple',
    },
    {
      name: 'אורית שחר',
      content: 'עברנו הרבה צלמים, אבל כאן מצאנו שילוב נדיר של סבלנות, מקצועיות ואסתטיקה.',
      color: 'blue',
    },
  ];
  
  export default function TestimonialsSection() {
    return (
      <Box id="testimonials" sx={{ py: 10, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
              המלצות חמות
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.600', maxWidth: 600, mx: 'auto' }}>
              מהלקוחות המרוצים שלי
            </Typography>
          </Box>
  
          <Grid container spacing={4}>
            {testimonials.map((t, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    border: `1px solid ${t.color}.100`,
                    boxShadow: 0,
                    '&:hover': { boxShadow: 4 },
                    transition: 'box-shadow 0.3s',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Avatar sx={{ bgcolor: `${t.color}.100`, width: 64, height: 64, mx: 'auto', mb: 2 }}>
                      <StarIcon sx={{ color: `${t.color}.500` }} />
                    </Avatar>
                    <Typography variant="body1" sx={{ color: 'grey.700', mb: 2 }}>
                      {t.content}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: `${t.color}.700` }}>
                      {t.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
  