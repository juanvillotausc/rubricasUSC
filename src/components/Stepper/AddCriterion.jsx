import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DataContext } from '../../context/DataContext';

const AddCriterion = () => {
    const { control, setValue, getValues } = useFormContext();
    const { dataRubric, setDataRubric } = useContext(DataContext);
    const [criterions, setCriterions] = useState(dataRubric.listCriterionsArr);

    const handleAddCriterion = (e, index) => {
        const criterion = dataRubric.createCriterion();
        setCriterions([...criterions, criterion])
    };
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setCriterions([...criterions, { name: value }]);
        console.log(dataRubric);

    };

    return (
        <>
            <Button onClick={handleAddCriterion}>Add</Button>
            {criterions.map((criterion, index) => {
                return (

                    <TextField
                        key={index}
                        required
                        id={`criterion${index + 1}`}
                        label={`Criterio ${index + 1}`}
                        variant="outlined"
                        placeholder="Enter rubric name"
                        margin='normal'
                        onChange={handleChange}
                        fullWidth

                    />

                );
            })}
        </>
    );
};

export default AddCriterion;