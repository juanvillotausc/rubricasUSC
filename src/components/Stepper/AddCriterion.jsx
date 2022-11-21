import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { DataContext } from '../../context/DataContext';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const AddCriterion = () => {
    const { dataRubric } = useContext(DataContext);
    const [criterions, setCriterions] = useState(dataRubric.listCriterionsArr);
    const [values, setValues] = useState([]);

    const handleAddCriterion = () => {
        const criterion = dataRubric.createCriterion();

        setCriterions([...criterions, criterion]);
        console.log(dataRubric);
    };

    const handleValueCriterion = () => {

        if (criterions.length === 0) return;
        console.log(criterions);
        const list = criterions.map((criterion, index) => {
            console.log(criterion);
        });
        setCriterions(list);
    };

    const handleRemove = (id, index) => {
        const list = [...criterions];
        list.splice(index, 1);
        setCriterions(list);
        dataRubric.deleteCriterion(id);
        console.log(dataRubric);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...criterions];
        list[index][name] = value;
        setCriterions(list);
    };

    useEffect(() => {
        handleValueCriterion();
    }, [criterions])


    return (
        <>
            <Button onClick={handleAddCriterion}>Add</Button>
            {criterions.map((criterion, index) => {
                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            style={{ width: '80%' }}
                            key={index}
                            required
                            name="title_ctro"
                            value={criterion.title_ctro}
                            id={`criterion${index + 1}`}
                            label={`Criterio ${index + 1}`}
                            variant="outlined"
                            placeholder="Enter rubric name"
                            margin='normal'
                            onChange={(e) => handleChange(e, index)}
                        />
                        <Button
                            onClick={() => handleRemove(criterion.id, index)}
                            color="error"
                            style={{ height: "58px", marginBottom: -8 }}>
                            <RemoveCircleOutlineIcon />
                        </Button>

                        <h5>{criterion.value}%</h5>

                    </div>
                );
            })}
        </>
    );
};

export default AddCriterion;