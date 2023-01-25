import styled from "@emotion/styled";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import { specialOffers } from '../dataBase/dataBase'




const items = specialOffers.map(item => {
    const { id, img, name, descr } = item;

    return (
        <Card
            key={id}
            sx={{ maxWidth: 345 }}
        >
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descr}
                </Typography>
            </CardContent>
        </Card>
    )
});


function SpecialOffers() {
    return (
        <Container>
            <h2>
                Спецпредложения
            </h2>
            {items}




        </Container>


    );
}

export default SpecialOffers;




