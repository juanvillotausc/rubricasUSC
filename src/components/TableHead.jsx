import { Grid } from "@mui/material"
import { Item, Typography } from "./Navbar.style"

const TableHead = () => {
    return (
        <Grid container spacing={1} style={{ height: "90px" }}>
            <Grid item xs={2}>
                <Item style={{ backgroundColor: "#bbe4ff78" }}>
                    <Typography>Criterio de evaluación</Typography>
                </Item>
            </Grid>
            <Grid item xs={3.5}>
                <Item style={{ backgroundColor: "#bbe4ff78" }}>
                    <Typography>Descriptores</Typography>
                </Item>
            </Grid>
            <Grid item xs={1.5}>
                <Item style={{ backgroundColor: "#bbe4ff78" }}>
                    <Typography>Resultado</Typography>
                </Item>
            </Grid>
            <Grid item xs={1}>
                <Item style={{ backgroundColor: "#bbe4ff78" }}>
                    <Typography>Puntaje parcial</Typography>
                </Item>
            </Grid>
            <Grid item xs={2}>
                <Item style={{ backgroundColor: "#bbe4ff78" }}>
                    <Typography>
                        Comentarios
                    </Typography>
                </Item>
            </Grid>
            <Grid item xs={2}>
                <Item style={{ backgroundColor: "#bbe4ff78" }}>
                    <Typography>
                        Propuesta de solución
                    </Typography>
                </Item>
            </Grid>
        </Grid>
    )
}

export default TableHead