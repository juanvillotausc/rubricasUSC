import { Box, Grid } from "@mui/material"
import Criterio from "./Criterio"
import { Section } from "./Navbar.style"
import TableHead from "./TableHead"

const Rubric = ({ criterions }) => {
    return (
        <Section>
            <Box sx={{ flexGrow: 1 }}>
                <TableHead />
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: 1 }}>
                <Grid container spacing={1}>
                    <Criterio criterions={criterions} />
                </Grid>
            </Box>
        </Section>
    )
}

export default Rubric