import { Route, Routes } from "react-router-dom";
import { DesignRubric, Example, HomeScreen, PageNotFound } from "../screens";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="rubric" element={<DesignRubric />} >
                <Route path="create/:id" element={<Example />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Navigation;