import { ButtonStyled, NotAllowed, Section, Title, Typography } from "../components/Navbar.style";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useTheme } from "styled-components";
import { Box } from "@mui/material";
import imgHero from "../assets/imgs/headerImg.svg"
import { Link, Outlet } from "react-router-dom";




const HomeScreen = () => {
    const theme = useTheme();
    return (
        <>
            <Section style={{ padding: 0 }}>
                <Box sx={{ margin: "auto", display: 'flex', flexDirection: 'row', maxWidth: "1220px", width: '75%', alignItems: 'center', justifyContent: 'center', height: "70vh" }}>
                    <div style={{ flex: 1, alignItems: 'left', justifyContent: "space-evenly", display: "flex", flexDirection: "column" }}>
                        <Typography style={{ textAlign: "left", fontWeight: "bold", fontSize: 16 }}>Santiago de Cali University</Typography>
                        <Title>Analytics <br /> Rubrics</Title>
                        <h4 style={{ color: "red" }}>Prototype</h4>
                        <Typography style={{ fontSize: "1.1em", textAlign: "left", width: "85%" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Link style={{ textDecoration: "none" }} to="/rubric">
                            <ButtonStyled style={{ marginTop: 15, textTransform: "none", backgroundColor: "" }}>Get Started</ButtonStyled>
                        </Link>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <img src={imgHero} alt="ImgHero" style={{ height: 400 }} />
                    </div>

                </Box>
            </Section>
            <NotAllowed>
                <PhoneAndroidIcon style={{ transition: "all 0.3s ease-in", textAlign: "center", width: "100%", color: theme.text, fontSize: 70 }} />
                <Typography style={{ color: theme.text }}>Devices frames <br /> not allowed.</Typography>
            </NotAllowed>

        </>
    )
}

export default HomeScreen;