import { Route, Routes, useLocation } from "react-router-dom";
import { RubricScreen, HomeScreen, PageNotFound, GenerateRubric, ModalCreate, CreatedRubric } from "../screens";
import Navbar from "./Navbar";
import { NotAllowed, Typography } from "./Navbar.style";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useTheme } from "styled-components";

const Navigation = () => {
    const theme = useTheme();
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <>
            <Navbar />
            <NotAllowed>
                <PhoneAndroidIcon style={{ transition: "all 0.3s ease-in", textAlign: "center", width: "100%", color: theme.text, fontSize: 70 }} />
                <Typography style={{ color: theme.text }}>Devices frames <br /> not allowed.</Typography>
            </NotAllowed>
            <Routes location={background || location}>
                <Route path="/" element={<HomeScreen />} >
                    <Route path="create/:id" element={<ModalCreate />} />
                </Route>
                <Route path="/rubric" element={<RubricScreen />} >
                    <Route path="generate" element={<GenerateRubric />} />
                    <Route path=":id" element={<CreatedRubric />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Navigation;