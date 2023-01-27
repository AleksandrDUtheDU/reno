import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import { specialOffers } from '../dataBase/dataBase';
import { WrappColor } from '../shared/ui/WrappColor';

const items = specialOffers.map(item => {
    const { id, img, name, descr } = item;

    return (
        <Card key={id}
        // sx={{ maxWidth: 500 }}
        >
            <CardMedia
                sx={{ height: 640 }}
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
    )
});


function CarouselMUI() {

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
                Спецпредложения
            </Typography>

            <Carousel
                index={3}
                navButtonsAlwaysVisible
            // NextIcon={<ArrowForwardIosIcon />}
            // PrevIcon={<ArrowBackIosNewIcon />}
            >
                {items}
            </Carousel>
        </Container>
    )
}

export default CarouselMUI;




