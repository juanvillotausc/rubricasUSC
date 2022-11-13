import { Box, Grid } from "@mui/material"
import { Item, Section, Typography } from "./Navbar.style"
import { TableBody, TableHead } from "../components";

const Rubric = ({ criterions }) => {
    return (
        <Section>
            <Box sx={{ flexGrow: 1 }}>
                <TableHead />
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: 1 }}>
                <TableBody criterions={criterions} />
            </Box>
        </Section>
    )
}

export default Rubric