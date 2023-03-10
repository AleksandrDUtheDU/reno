import {
    Grid,
    Container,
    Typography,
    Box,
    Link
} from "@mui/material";
import { WrappColor } from "../shared/ui/WrappColor";
import Logo from "../shared/ui/Logo";

function Footer() {

    return (
        <WrappColor as="footer">
            <Container maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="start"
                    columns={{ xs: 4, sm: 6, md: 12 }}
                    spacing={2}
                >
                    <Grid
                        item
                        xs={4}
                        sm={3}
                        md={3}
                    >
                        <Box justifyContent="center" sx={{ display: 'flex' }}>
                            <Logo />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    lineHeight: '60px'
                                }}
                            >
                                RENO-GO
                            </Typography>
                        </Box>
                        <Box align="center"
                        >
                            <Link
                                sx={{ color: 'black' }}
                                variant="subtitle1"
                                component="a"
                                align="center"
                                href="https://reno-go.ru/"
                            >
                                reno-go.ru
                            </Link>
                        </Box>

                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sm={3}
                        md={3}
                    >
                        <Typography
                            variant="h6"
                            align="center"
                        >
                            ????????
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sm={3}
                        md={3}
                    >
                        <Typography
                            variant="h6"
                            align="center"

                        >
                            ????????????
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sm={3}
                        md={3}
                    >
                        <Typography
                            variant="h6"
                            align="center"
                        >
                            ????????????????
                        </Typography>
                        <Typography
                            variant="subtitle1"
                        >
                            ???????? ???????????? ?? 10.00  ???? 21.00 ?????? ???????????????? ?? ????????????????
                        </Typography>
                        <Typography
                            variant="subtitle1"
                        >
                            ??. ??????????-?????????????????? ????. ?????????????????????? 8??
                        </Typography>
                        <Box>
                            <Link
                                sx={{ color: 'black' }}
                                variant="subtitle1"
                                component="a"
                                href="tel:+79291772270"
                            >
                                ??????????????: +7-929-177-22-70
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                sx={{ color: 'black' }}
                                variant="subtitle1"
                                component="a"
                                href="tel:+79291772280"
                            >
                                ??????????????: +7-929-177-22-80
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                sx={{ color: 'black' }}
                                variant="subtitle1"
                                component="a"
                                href="mailto:Reno-go1772270@yandex.ru"
                            >
                                ??????????: Reno-go1772270@yandex.ru
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </WrappColor>
    );
}

export default Footer;
