import { useNavigate } from "react-router-dom";
import { StepperMui } from "../components";

const styleDiv = {

    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(91, 112, 131, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const styleModal = {
    width: "350px",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
};

const ModalCreate = () => {

    const navigate = useNavigate();

    return (
        <div style={styleDiv}>
            <div style={styleModal}>
                <StepperMui />
                <button onClick={() => navigate(-1)}>Close</button>
            </div>
        </div>
    )
}

export default ModalCreate;