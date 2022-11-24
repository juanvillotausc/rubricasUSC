import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddDescripter = () => {

    const { dataRubric, setStepCompleted } = useContext(DataContext);
    const criterions = dataRubric.listCriterionsArr;
    const [descripters, setDescripters] = useState([]);

    const handleAddDescripter = (criterion) => {
        const descripter = criterion.createDescripter();
        setDescripters([...descripters, descripter]);
    };

    const handleRemoveDescripter = (id, criterion, index) => {
        const list = [...descripters];
        list.splice(index, 1);
        criterion.deleteDescripter(id);
        setDescripters(list);
    };

    const handleChange = (e, descripter) => {
        const { name, value } = e.target;

        switch (name) {
            case 'title_desc':
                descripter.newTitle = value;
                break;
            case 'contextA':
                descripter.newContextA = value;
                break;
            case 'contextB':
                descripter.newContextB = value;
                break;
            default:
                break;
        };

        setDescripters([]);
    };

    useEffect(() => {

        const isEmpty = criterions.filter((criterion) => criterion.listDescriptersArr.length === 0);

        if (isEmpty.length === 0) {
            setStepCompleted(false);
        } else {
            setStepCompleted(true);
        }

    }, [descripters])


    return (
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>

            {criterions.map((criterion, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '70%',
                            flexDirection: 'column',
                            border: '1px solid #e9e9e9',
                            borderRadius: 5,
                            paddingTop: 10
                        }}
                    >
                        <h4>CE-{index + 1}</h4>
                        <p>{criterion.title_ctro}</p>
                        <Button
                            sx={{ width: "100%" }}
                            style={{ textTransform: 'none' }}
                            onClick={() => handleAddDescripter(criterion)}
                        >
                            <AddCircleIcon color="success" />
                        </Button>
                        {/* Descripter */}
                        {criterion.listDescriptersArr.map((descripter, index) => {
                            descripter.newValue = (100 / criterion.listDescriptersArr.length)
                            return (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        flexDirection: 'column',
                                        border: '1px solid #e9e9e9',
                                        padding: 10
                                    }}
                                >
                                    <h4>Descriptor #{index + 1}</h4>
                                    <Button
                                        onClick={() => handleRemoveDescripter(descripter.id, criterion, index)}
                                        color="error"
                                        style={{ height: "58px", marginBottom: -8 }}>
                                        <RemoveCircleOutlineIcon />
                                    </Button>
                                    <TextField
                                        required
                                        name="title_desc"
                                        id="title_desc"
                                        label="Contexto"
                                        variant="outlined"
                                        placeholder="Ingresa el contexto del descriptor"
                                        margin='normal'
                                        fullWidth
                                        onChange={(e) => handleChange(e, descripter, index)}
                                        value={descripter.title_desc}
                                    />
                                    <TextField
                                        required
                                        name="contextA"
                                        id="contextA"
                                        label="Subcriterio A+"
                                        variant="outlined"
                                        placeholder="Ingresa el subcriterio A+"
                                        margin='normal'
                                        fullWidth
                                        onChange={(e) => handleChange(e, descripter, index)}
                                        value={descripter.contextA}
                                    />
                                    <TextField
                                        required
                                        name="contextB"
                                        id="contextB"
                                        label="Subcriterio B"
                                        variant="outlined"
                                        placeholder="Ingresa el subcriterio B"
                                        margin='normal'
                                        fullWidth
                                        onChange={(e) => handleChange(e, descripter, index)}
                                        value={descripter.contextB}
                                    />
                                </div>
                            );

                        })}
                        {/* Descripter */}
                    </div>
                );
            })}
        </div>
    );
};

export default AddDescripter;