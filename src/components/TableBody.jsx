import { Grid } from "@mui/material";
import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Descripter } from ".";
import { DataContext } from "../context/DataContext";
import { InputField, Item, Typography } from "./Navbar.style";

const TableBody = () => {

    const { dataRubric } = useContext(DataContext);
    const criterions = dataRubric.listCriterionsArr;
    const navigate = useNavigate();
    const [approve, setApprove] = useState([]);
    let subtotalRu = 0;


    useEffect(() => {
        if (!criterions)
            navigate("/");
    }, [approve])

    return (
        <Grid container spacing={1}>
            {criterions?.map((criterion, index) => {
                subtotalRu += criterion.subtotal;
                dataRubric.totalPoint = subtotalRu;

                return (
                    <Fragment key={index}>
                        <Grid item xs={2}>
                            <Item style={{ flexDirection: 'column' }}>
                                <Typography>CE {index + 1}</Typography>
                                <Typography>{criterion.title_ctro}</Typography>
                                <Typography>Ponderacion {criterion.value.toFixed(2)}%</Typography>
                                <Typography>Subtotal {criterion.subtotal.toFixed(2)}</Typography>
                            </Item>
                        </Grid>
                        <Grid item height={"100%"} xs={6}>
                            <Descripter criterion={criterion} setApprove={setApprove} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <InputField multiline placeholder="Comentarios" />
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <InputField multiline placeholder="Propuestas de solución" />
                            </Item>
                        </Grid>
                    </Fragment>
                )
            })}
            <Grid item xs={4} height={60}>
                <Item style={{ backgroundColor: "#32ff3c60" }}>
                    <Typography>Puntaje total: {dataRubric?.total?.toFixed(2)}</Typography>
                </Item>
            </Grid>
        </Grid>
    )
};

export default TableBody;