import { MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const currencies = [
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
    const [currency, setCurrency] = useState(currencies[0].value);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <>
            <Controller
                control={control}
                name="name"
                render={({ field }) => (
                    <TextField
                        required
                        id="rubric-name"
                        label="Name"
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
                render={({ field }) => (
                    <TextField
                        select
                        required
                        id="signature"
                        label="Asignatura"
                        variant="outlined"
                        placeholder="Curso"
                        margin='normal'
                        value={currency}
                        onChange={handleChange}
                        style={{ marginRight: 5, width: "35%" }}
                        {...field}
                    >
                        {currencies.map((option) => (
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
                render={({ field }) => (
                    <TextField
                        required
                        id="dateRubric"
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