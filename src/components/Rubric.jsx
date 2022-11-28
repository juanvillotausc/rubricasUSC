import { Box, Grid } from "@mui/material"
import { Item, Section, Typography } from "./Navbar.style"
import { TableBody, TableHead } from "../components";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Rubric = () => {
    const { dataRubric } = useContext(DataContext);

    return (
        <Section>
            <Typography style={{ padding: 15, fontSize: 20 }}>Rubrica: {dataRubric.name}</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <TableHead />
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: 1 }}>
                <TableBody />
            </Box>
        </Section>
    )
}

export default Rubric