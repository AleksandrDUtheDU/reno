import styled from "@emotion/styled";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { specialOffers } from '../dataBase/dataBase'


const items = specialOffers.map(item => {
    const { id, img, name, descr } = item;

    return (
        <Grid
            item
            xs={4}
            sm={3}
            md={4}
            key={id}
        >
            <Card
                sx={{ maxWidth: 345 }}
            >
                <CardMedia
                    sx={{ height: 240 }}
                    image={img}
                    title="green iguana"
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
                    <Typography variant="body2" color="text.secondary">
                        {descr}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
});


function SpecialOffers() {
    return (
        <Container maxWidth="lg">
            <Typography
                gutterBottom
                spacing={2}
                variant="h4"
                component="h2"
                align="center"
                sx={{ textTransform: 'uppercase', padding: '30px' }}
            >
                Спецпредложения
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="start"
                columns={{ xs: 4, sm: 6, md: 12 }}
                spacing={2}
            >
                {items}
            </Grid>
        </Container>
    );
}

export default SpecialOffers;




