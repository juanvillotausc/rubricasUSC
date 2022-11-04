import { Button, Grid } from "@mui/material";
import { Fragment, useState } from "react";
import { useTheme } from "styled-components";
import { Gridd, Item, Row, Typography } from "./Navbar.style";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Descripter = ({ descripters }) => {

    const [approve, setApprove] = useState({
        contextA: false,
        contextB: false
    });

    return (

        descripters.map(({ title, result, average, value, contextA, contextB }) => (
            <Gridd key={title}>
                <Grid item style={{ height: "100%", gridColumnStart: 1, gridColumnEnd: 3 }}>
                    <Item>
                        <Typography>{title}</Typography>
                    </Item>
                </Grid>
                <Grid item style={{ height: "100%", gridColumnStart: 3, gridRowStart: "span 2" }}>
                    <Item>
                        <Typography>{value}</Typography>
                    </Item>
                </Grid>
                <Grid item style={{ height: "100%", gridColumnStart: 4, gridRowStart: "span 2" }}>
                    <Item>
                        <Typography>{result}</Typography>
                    </Item>
                </Grid>
                <Grid item style={{ height: "100%", gridColumnStart: 5, gridRowStart: "span 2" }}>
                    <Item>
                        <Typography>{average}</Typography>
                    </Item>
                </Grid>
                <Grid style={{ height: "100%" }}>
                    <Item>
                        <Button onClick={() => setApprove({ ...approve, contextA: !approve.contextA })}
                            color={approve.contextA ? "success" : "error"}
                            style={{ flex: 1, flexDirection: "column", height: "100%", textTransform: "none", transition: "all 0.3s ease-in" }}>
                            <Typography>{contextA}</Typography>
                            {approve.contextA ? <CheckCircleIcon /> : <CancelIcon />}
                        </Button>
                    </Item>
                </Grid>
                <Grid item style={{ height: "100%" }}>
                    <Item>
                        <Button onClick={() => setApprove({ ...approve, contextB: !approve.contextB })}
                            color={approve.contextB ? "success" : "error"}
                            style={{ flex: 1, flexDirection: "column", height: "100%", textTransform: "none", transition: "all 0.3s ease-in" }}>
                            <Typography>{contextB}</Typography>
                            {approve.contextB ? <CheckCircleIcon /> : <CancelIcon />}
                        </Button>
                    </Item>
                </Grid>
            </Gridd >
        ))

    )
}

export default Descripter;