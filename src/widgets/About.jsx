import { Typography, Container, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function About() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mb: 2 }}>
                <Typography
                    gutterBottom
                    spacing={2}
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ textTransform: 'uppercase', padding: '30px' }}
                >
                    Специализированный автосервис RENO-GO
                </Typography>
                <Typography
                    spacing={2}
                    variant="subtitle1"
                >
                    Мы осуществляем комплексное решение любых задач, связанных с устранением неисправностей, профилактикой и диагностики вашего автомобиля. Профессиональные мастера, работающие в нашем автосервисе, обладают всем объёмом навыков, необходимых для работы с автомобилями Renault.
                </Typography>
            </Box>
            <Accordion sx={{ backgroundColor: 'Moccasin' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Подробнее</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        spacing={2}
                        variant="subtitle1"
                        sx={{ mb: 2 }}
                    >
                        Бытует мнение, что французские автомобили почти идентичны, однако это не так. Общего между Renault и Peugeot, как и у Mersedes и BMW — страна происхождения!
                    </Typography>
                    <Typography
                        spacing={2}
                        variant="subtitle1"
                        sx={{ mb: 2 }}
                    >
                        Если на Ваш автомобиль кончилась гарантия, или Вы просто не хотите переплачивать – мы к вашим услугам. Пройти техническое обслуживание, отремонтировать подвеску, двигатель, тормозную систему и другие работы в нашем автосервисе можно сделать дешевле, чем на дилерской станции, при этом качество ремонта останется на высоком уровне.  Имеем большой опыт по ремонту Рено, так как работали у официального дилера. Располагаем необходимым оригинальным спец. инструментом.
                    </Typography>
                    <Typography
                        spacing={2}
                        variant="subtitle1"
                        sx={{ mb: 2 }}
                    >
                        Мы можем предложить Вам как оригинальные, так и качественные не оригинальные запчасти и расходники. Мы гарантируем профессиональный подход к ремонту и порядочность.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default About;
