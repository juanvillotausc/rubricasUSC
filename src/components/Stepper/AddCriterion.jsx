import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DataContext } from '../../context/DataContext';

const AddCriterion = () => {
    const { control, setValue, getValues } = useFormContext();
    const { dataRubric, setDataRubric } = useContext(DataContext);
    const [criterions, setCriterions] = useState(dataRubric.listCriterionsArr);
    console.log(criterions);
    const handleAddCriterion = (e, index) => {
        const criterion = dataRubric.createCriterion();
        console.log(criterion);
        setCriterions([...criterions, { criterion }]);
    };
    const handleChange = (e, criterion) => {

        const { name, value } = e.target;
        criterion['title_ctro'] = value;
    };

    return (
        <>
            <Button onClick={handleAddCriterion}>Add</Button>
            {criterions.map((criterion, index) => {
                console.log(criterion);
                return (
                    <TextField
                        key={index}
                        required
                        id={`criterion${index + 1}`}
                        label={`Criterio ${index + 1}`}
                        variant="outlined"
                        placeholder="Enter rubric name"
                        margin='normal'
                        onChange={(e) => handleChange(e, criterion)}
                        fullWidth

                    />

                );
            })}
        </>
    );
};

export default AddCriterion;