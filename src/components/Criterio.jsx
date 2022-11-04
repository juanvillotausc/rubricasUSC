import { Grid } from "@mui/material";
import { Fragment } from "react";
import { Descripter } from "../components";
import { Item, Typography } from "./Navbar.style";

const Criterio = ({ criterions = MOCKS }) => {
    return (
        criterions.map(({
            criterion,
            comments,
            solution,
            descripters
        }) => (
            <Fragment key={criterion}>
                <Grid item xs={2}>
                    <Item>
                        <Typography>{criterion}</Typography>
                    </Item>
                </Grid>
                <Grid item height={"100%"} xs={6}>
                    <Descripter descripters={descripters} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography>{comments}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography>{solution}</Typography>
                    </Item>
                </Grid>
            </Fragment>
        ))
    )
}

export default Criterio;