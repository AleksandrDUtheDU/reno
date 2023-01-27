import { Container, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { modelRange } from "../dataBase/dataBase";

const items = modelRange.map(item => {
    const { id, img, name } = item;

    return (
        <Grid
            item
            xs={2}
            sm={3}
            md={2}
            key={id}
        >

            <Card key={id}
                sx={{ maxWidth: 190 }}
            >
                <CardMedia
                    sx={{ height: 92 }}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
});


function CarList() {

    return (
        <Container sx={{ mt: 5 }} maxWidth="lg">
            <Typography
                gutterBottom
                spacing={2}
                variant="h4"
                component="h2"
                align="center"
                sx={{ textTransform: 'uppercase', padding: '30px' }}
            >
                СЕРВИС И РЕМОНТ МОДЕЛЕЙ RENAULT
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="start"
                columns={{ xs: 4, sm: 9, md: 10 }}
                spacing={2}
            >
                {items}
            </Grid>



        </Container>
    )
}

export default CarList;
