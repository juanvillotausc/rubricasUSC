import { Outlet } from "react-router-dom";
import { Section, Typography } from "../components/Navbar.style";

const DesignRubric = () => {
    return (
        <Section>
            <Typography>Design</Typography>
            <Outlet />
        </Section>
    )
}

export default DesignRubric;