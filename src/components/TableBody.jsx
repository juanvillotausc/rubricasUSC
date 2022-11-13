import { Grid, TextField } from "@mui/material";
import { Fragment } from "react";
import { Descripter } from ".";
import { Item, Typography } from "./Navbar.style";

const TableBody = ({ criterions = MOCKS }) => {
    return (
        <Grid container spacing={1}>
            {criterions.map(({
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
                            <TextField
                                maxRows={10}
                                minRows={10}
                                multiline
                                maxLength={90}
                                sx={{ color: "white", overflow: "hidden" }}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>
                            <Typography>{solution}</Typography>
                        </Item>
                    </Grid>
                </Fragment>
            ))}
            <Grid item xs={4} height={60}>
                <Item style={{ backgroundColor: "#32ff3c60" }}>
                    <Typography>Puntaje total: {0}</Typography>
                </Item>
            </Grid>
        </Grid>
    )
};

export default TableBody;