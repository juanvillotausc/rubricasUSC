import { NotAllowed, Typography } from "../components/Navbar.style";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useTheme } from "styled-components";
import Rubric from "../components/Rubric";

const MOCK_DESCRIPTER = [
    {
        title: "Descripter 1sdsdasd",
        result: "No Logrado",
        average: 0,
        value: 50,
        contextA: "Context A",
        contextB: "Context B"
    },
    {
        title: "Descripter 2",
        result: "No Logrado",
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
        descripters: MOCK_DESCRIPTER
    },
    {
        criterion: "Criterio 2",
        result: "No Logrado",
        comments: "Sin eso",
        solution: "Hacer trabajo",
        descripters: MOCK_DESCRIPTER
    },
];


const HomeScreen = () => {


    const theme = useTheme();
    return (
        <>
            <Rubric criterions={MOCK_CRITERIONS} />
            <NotAllowed>
                <PhoneAndroidIcon style={{ transition: "all 0.3s ease-in", textAlign: "center", width: "100%", color: theme.text, fontSize: 70 }} />
                <Typography style={{ color: theme.text }}>Devices frames <br /> not allowed.</Typography>
            </NotAllowed>
        </>
    )
}

export default HomeScreen;