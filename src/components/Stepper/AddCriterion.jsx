import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { DataContext } from '../../context/DataContext';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddCriterion = () => {
    const { dataRubric } = useContext(DataContext);
    const [criterions, setCriterions] = useState(dataRubric.listCriterionsArr);

    const handleAddCriterion = () => {
        const criterion = dataRubric.createCriterion();
        setCriterions([...criterions, criterion]);
    };

    const handleRemove = (id, index) => {
        const list = [...criterions];
        list.splice(index, 1);
        setCriterions(list);
        dataRubric.deleteCriterion(id);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...criterions];
        list[index][name] = value;
        setCriterions(list);
    };


    return (
        <>
            <div style={{ display: 'flex', width: '100%', justifyContent: "center", padding: 20 }}>
                <Button
                    sx={{ width: "100%" }}
                    onClick={handleAddCriterion}
                    style={{ textTransform: 'none' }}
                >
                    <AddCircleIcon color="success" />
                </Button>
            </div>
            {criterions.map((criterion, index) => {
                criterion.newValue = 100 / criterions.length;
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

                        <h5>{criterion.value.toFixed(2)}%</h5>

                    </div>
                );
            })}
        </>
    );
};

export default AddCriterion;