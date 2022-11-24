import { ButtonStyled, NotAllowed, Section, Title, Typography } from "../components/Navbar.style";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useTheme } from "styled-components";
import { Box } from "@mui/material";
import imgHero from "../assets/imgs/headerImg.svg"
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
import AdminRubrics from "../models/AdminRubrics";

const AdminRubric = new AdminRubrics();

const HomeScreen = () => {
    const theme = useTheme();
    const { setDataRubric } = useContext(DataContext);
    const navigate = useNavigate();

    const handleCreateRubric = () => {
        const rubric = AdminRubric.createRubric();
        setDataRubric(rubric);
        navigate(`create/${rubric.id}`);
    };

    return (
        <>
            <Section style={{ padding: 0 }}>
                <Box sx={{
                    margin: "auto",
                    display: 'flex',
                    flexDirection: 'row',
                    maxWidth: "1220px",
                    width: '75%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "70vh"
                }}>
                    <div style={{
                        flex: 1,
                        alignItems: 'left',
                        justifyContent: "space-evenly",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Typography style={{
                            textAlign: "left",
                            fontWeight: "bold",
                            fontSize: 16
                        }}>
                            Universidad Santiago de Cali
                        </Typography>
                        <Title>Rúbricas <br /> Analíticas</Title>
                        <h4 style={{ color: "red", marginBottom: 10 }}>Prototype</h4>
                        <Typography style={{
                            fontSize: "1em",
                            textAlign: "left",
                            width: "90%"
                        }}>
                            Una estrategia de evaluación por medio de rúbricas analíticas, ayudando tanto a profesores como estudiantes en su situación académica.                        </Typography>
                        <div style={{ width: "100%" }}>
                            <ButtonStyled style={{
                                marginTop: 15,
                                marginRight: 15,
                                textTransform: "none",
                                backgroundColor: ""
                            }} onClick={handleCreateRubric}>
                                Diseñar
                            </ButtonStyled>
                            <Link style={{ textDecoration: "none" }} to="/rubric/generate">
                                <ButtonStyled style={{
                                    marginTop: 15,
                                    textTransform: "none",
                                    backgroundColor: ""
                                }}>
                                    Generar
                                </ButtonStyled>
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        padding: 15
                    }}>
                        <img src={imgHero} alt="ImgHero" style={{ height: 270 }} />
                    </div>

                </Box>
            </Section>
            <NotAllowed>
                <PhoneAndroidIcon style={{ transition: "all 0.3s ease-in", textAlign: "center", width: "100%", color: theme.text, fontSize: 70 }} />
                <Typography style={{ color: theme.text }}>Devices frames <br /> not allowed.</Typography>
            </NotAllowed>
            <Outlet />
        </>
    )
}

export default HomeScreen;