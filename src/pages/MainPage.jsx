import styled from "@emotion/styled";
import { Typography, Container } from "@mui/material";

import bgPhoto from "../resources/renault-bg2.jpg"

const BgMain = styled.div(
    ({ bgPhoto }) =>
        `
    padding: 30px;
    height: 610px;
    background: url(${bgPhoto}) no-repeat 50%/cover;
`,
)



function Main() {
    return (
        <section>
            <BgMain
                bgPhoto={bgPhoto}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        component="h1"
                    >
                        СПЕЦИАЛИЗИРОВАННЫЙ АВТОСЕРВИС RENO РЕМОНТ МАРКИ РЕНО
                    </Typography>
                </Container>
            </BgMain>
            {/* <div>КАРУСЕЛЬ</div>
            <div>СЕРВИС И РЕМОНТ МОДЕЛЕЙ RENAULT В РЕНОМАКС</div>
            <div>НАШИ ПРЕИМУЩЕСТВА</div>
            <div>ПОПУЛЯРНЫЕ УСЛУГИ</div>
            <div>РЕАЛЬНЫЕ ОТЗЫВЫ</div>
            <div>ПРИЕЗЖАЙТЕ К НАМ</div> */}
        </section>
    );
}

export default Main;
