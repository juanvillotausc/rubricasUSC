import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Gridd, Item, Row, Typography } from "./Navbar.style";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const Descripter = ({ criterion, setApprove }) => {
  const [descripter, setDescripter] = useState({});
  let subtotalCri = 0;

  const handleApprove = (context, descripter, index) => {
    setDescripter({});
    let subtotalDesc = descripter.average;
    const valueA = ((60 / 100) * criterion.value) / criterion.listDescriptersArr.length;
    const valueB = ((20 / 100) * criterion.value) / criterion.listDescriptersArr.length;
    let rest = ((criterion.value / criterion.listDescriptersArr.length) - (valueA + valueB));


    if (context === "A") {
      descripter.newApproveA = !descripter.approveA;
    } else {
      descripter.newApproveB = !descripter.approveB;
    }

    if (descripter.approveA && descripter.approveB) {
      subtotalDesc = (valueA + valueB + rest);
      descripter.newResult = 3
    } else if (descripter.approveA && !descripter.approveB) {
      subtotalDesc = valueA
      descripter.newResult = 1
    } else if (!descripter.approveA && descripter.approveB) {
      subtotalDesc = valueB;
      descripter.newResult = 2
    } else {
      subtotalDesc = 0;
      descripter.newResult = 0
    }

    descripter.newAverage = subtotalDesc;

    setApprove([{}]);
  };

  useEffect(() => {
    setApprove([{}]);
  }, [descripter])


  return (
    <>
      {criterion.listDescriptersArr.map((descripter, index) => {

        subtotalCri += descripter.average
        criterion.newSubtotal = subtotalCri;

        return (
          <Gridd key={index}>
            <Grid
              item
              style={{ height: "100%", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              <Item style={{ backgroundColor: '#448ec030' }}>
                <Typography style={{ fontSize: 12 }}>{descripter.title_desc}</Typography>
              </Item>
            </Grid>
            <Grid
              item
              style={{ height: "100%", gridColumnStart: 3, gridRowStart: "span 2" }}
            >
              <Item>
                <Typography>{descripter.value.toFixed(2)}</Typography>
              </Item>
            </Grid>
            <Grid
              item
              style={{ height: "100%", gridColumnStart: 4, gridRowStart: "span 2" }}
            >
              <Item style={{
                backgroundColor:
                  descripter.result === 0
                    ? "#d32f2f36"
                    : descripter.result === 1
                      ? "#51d0fb50"
                      : descripter.result === 2
                        ? "#ffc10752"
                        : "#2e7d32b9"
              }}>
                <Typography>{
                  descripter.result === 1
                    ? "Logrado"
                    : descripter.result === 2
                      ? "En proceso"
                      : descripter.result === 3
                        ? "Excelente"
                        : "No logrado"
                }</Typography>
              </Item>
            </Grid>
            <Grid
              item
              style={{ height: "100%", gridColumnStart: 5, gridRowStart: "span 2" }}
            >
              <Item>
                <Typography>{descripter.average.toFixed(2)}</Typography>
              </Item>
            </Grid>
            <Grid style={{ height: "100%" }}>
              <Item>
                <Button
                  onClick={() => handleApprove("A", descripter, index)}
                  color={descripter.approveA ? "success" : "error"}
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    height: "100%",
                    textTransform: "none",
                    transition: "all 0.3s ease-in",
                  }}
                >
                  <Typography style={{ fontSize: 12 }}>{descripter.contextA}</Typography>
                  {descripter.approveA ? <CheckCircleIcon /> : <CancelIcon />}
                </Button>
              </Item>
            </Grid>
            <Grid item style={{ height: "100%" }}>
              <Item>
                <Button
                  onClick={() => handleApprove("B", descripter, index)}
                  color={descripter.approveB ? "success" : "error"}
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    height: "100%",
                    textTransform: "none",
                    transition: "all 0.3s ease-in",
                  }}
                >
                  <Typography style={{ fontSize: 10 }}>{descripter.contextB}</Typography>
                  {descripter.approveB ? <CheckCircleIcon /> : <CancelIcon />}
                </Button>
              </Item>
            </Grid>
          </Gridd>
        )
      })}
    </>
  );
};

export default Descripter;
