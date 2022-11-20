import { Route, Routes, useLocation } from "react-router-dom";
import { RubricScreen, HomeScreen, PageNotFound, GenerateRubric, ModalCreate, CreatedRubric } from "../screens";
import Navbar from "./Navbar";

const Navigation = () => {

    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <>
            <Navbar />
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