import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext';

const AdjustDescripter = () => {

    const { dataRubric, setStepCompleted } = useContext(DataContext);
    const criterions = dataRubric.listCriterionsArr;
    const [descripters, setDescripters] = useState([]);

    const handleChange = (e, descripter) => {
        const { name, value } = e.target;
        descripter.newValue = Number(value);
        setDescripters([...descripters, descripter]);
    };

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: 'max-content',
            width: '100%',
            alignItems: 'flex-start'
        }}>
            {criterions.map((criterion, index) => {

                return (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'left',
                            justifyContent: 'center',
                            width: '100%',
                            flexDirection: 'column',
                            border: '1px solid #e9e9e9',
                            borderRadius: 5,
                            marginTop: 10
                        }}
                    >
                        <h4 style={{ padding: 10, backgroundColor: "skyblue" }}>
                            Criterio {index + 1}:
                            <span style={{ fontWeight: "normal" }}> {criterion.title_ctro}</span>
                        </h4>
                        {/* Descripter */}
                        {criterion.listDescriptersArr.map((descripter, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        width: '100%',
                                        flexDirection: 'column',
                                        borderTop: '1px solid #e9e9e9',
                                        padding: 10
                                    }}
                                >
                                    <h4>Descriptor {index + 1}</h4>
                                    <h4>Contexto: <span style={{ fontWeight: "normal" }}>{descripter.title_desc}</span></h4>
                                    <h4>Subcriterio A+: <span style={{ fontWeight: "normal" }}>{descripter.contextA}</span></h4>
                                    <h4>Subcriterio B: <span style={{ fontWeight: "normal" }}>{descripter.contextB}</span></h4>
                                    <TextField
                                        required
                                        name="value"
                                        id="value"
                                        label="Puntaje parcial"
                                        variant="outlined"
                                        placeholder="Ingresa el valor del descriptor"
                                        margin='normal'
                                        fullWidth
                                        value={descripter.value}
                                        onChange={(e) => handleChange(e, descripter)}
                                    />
                                </div>
                            )
                        })}
                        {/* Descripter */}
                    </div>
                )
            })}
        </div>
    );
};

export default AdjustDescripter;