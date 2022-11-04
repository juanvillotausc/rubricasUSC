import { Box, Grid } from "@mui/material";
import { Criterio, TableHead } from "../components";
import { NotAllowed, Section, Typography } from "../components/Navbar.style";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useTheme } from "styled-components";
import Rubric from "../components/Rubric";

const MOCK_DESCRIPTER = [
    {
        title: "Descripter 1",
        result: "Excelente",
        average: 0,
        value: 50,
        contextA: "Context A",
        contextB: "Context B"
    },
    {
        title: "Descripter 2",
        result: "Excelente",
        average: 0,
        value: 50,
        contextA: "Context A",
        contextB: "Context B"
    },
];

const MOCK_CRITERIONS = [
    {
        criterion: "Criterio 1",
        comments: "Sin eso",
        solution: "Hacer trabajo",
        descripters: MOCK_DESCRIPTER,
        total: 90
    },
    {
        criterion: "Criterio 2",
        result: "Excelente",
        comments: "Sin eso",
        solution: "Hacer trabajo",
        descripters: MOCK_DESCRIPTER,
        total: 100
    },
];

const MOCK_RUBRIC = [
    {
        criterions: MOCK_CRITERIONS,
        total: 150
    }
];

const HomeScreen = () => {
    const theme = useTheme();
    return (
        <>
            <Rubric criterions={MOCK_CRITERIONS} />
            <NotAllowed>
                <PhoneAndroidIcon style={{ transition: "all 0.3s ease-in", textAlign: "center", width: "100%", color: theme.text, fontSize: 70 }} />
                <Typography style={{ color: theme.text }}>Tablet or view <br /> Phone not permitted</Typography>
            </NotAllowed>
        </>
    )
}

export default HomeScreen;