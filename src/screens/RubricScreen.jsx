import { Outlet } from "react-router-dom";
import { Section, Typography } from "../components/Navbar.style";

const RubricScreen = () => {
    return (
        <Section>
            <Outlet />
        </Section>
    )
}

export default RubricScreen;