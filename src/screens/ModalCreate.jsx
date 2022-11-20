import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StepperMui } from "../components";
import Close from '@mui/icons-material/Close';

const styleDiv = {
    height: "100vh",
    width: '100%',
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.534)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const styleModal = {
    padding: "2rem",
    width: "760px",
    height: "550px",
    backgroundColor: "white",
    borderRadius: "5px",
    position: 'relative',
    overflow: "scroll",
};

const ModalCreate = () => {

    const navigate = useNavigate();

    return (
        <div style={styleDiv}>
            <div style={styleModal}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography fontWeight="bold" fontSize={20}>Design rubric</Typography>
                    <Button onClick={() => navigate(-1)}>
                        <Close />
                    </Button>
                </div>
                <StepperMui />
            </div>
        </div>
    )
}

export default ModalCreate;