import { MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const signatures = [
    {
        value: 'Gestion de proyectos TI',
        label: 'Gestion de proyectos TI',
    },
    {
        value: 'Gobierno y servicios de TI',
        label: 'Gobierno y servicios de TI',
    },
];

const DataGeneral = () => {
    const { control } = useFormContext();
    const [signature, setSignature] = useState(signatures[0].value);

    const handleChange = (event) => {
        const { value } = event.target;
        setSignature(value);
    };
    return (
        <>
            <Controller
                control={control}
                name="name"
                defaultValue={""}
                render={({ field }) => (
                    <TextField
                        required
                        id="name"
                        label="Nombre"
                        variant="outlined"
                        placeholder="Enter rubric name"
                        margin='normal'
                        fullWidth
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="subject"
                defaultValue={""}
                render={({ field }) => (
                    <TextField
                        required
                        id="subject"
                        label="Objeto de estudio"
                        variant="outlined"
                        placeholder="Tema de rubrica"
                        margin='normal'
                        style={{ marginRight: 5 }}
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="signature"
                defaultValue={""}
                render={({ field }) => (
                    <TextField
                        select
                        required
                        id="signature"
                        label="Asignatura"
                        variant="outlined"
                        placeholder="Curso"
                        margin='normal'
                        value={signature}
                        onChange={handleChange}
                        style={{ marginRight: 5, width: "35%" }}
                        {...field}
                    >
                        {signatures.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                )}
            />
            <Controller
                control={control}
                name="date"
                defaultValue={""}
                render={({ field }) => (
                    <TextField
                        required
                        id="date"
                        label=""
                        variant="outlined"
                        placeholder="Fecha de creacion"
                        margin='normal'
                        type="date"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="competency"
                defaultValue={""}
                render={({ field }) => (
                    <TextField
                        id="competency"
                        label="Competencia"
                        variant="outlined"
                        placeholder="Competencia"
                        margin='normal'
                        multiline
                        rows={4}
                        sx={{ width: 345 }}
                        style={{ marginRight: 5 }}
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="learnResult"
                defaultValue={""}
                render={({ field }) => (
                    <TextField
                        id="learnResult"
                        label="Resultado de aprendizaje"
                        variant="outlined"
                        placeholder="Resultado esperado"
                        margin='normal'
                        multiline
                        sx={{ width: 345 }}
                        rows={4}
                        {...field}
                    />
                )}
            />
        </>
    );
};

export default DataGeneral;