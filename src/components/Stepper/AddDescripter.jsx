import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddDescripter = () => {

    const { dataRubric } = useContext(DataContext);
    const [criterions, setCriterion] = useState(dataRubric.listCriterionsArr);
    const [descripters, setDescripters] = useState([]);

    const handleAddDescripter = (criterion) => {
        const descripter = criterion.createDescripter();
        setDescripters([...descripters, descripter]);
    };

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
                        {descripters.map((descripter, index) => {

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
                                    <h4>Descriptor #1</h4>
                                    <TextField
                                        required
                                        name="title_desc"
                                        id="title_desc"
                                        label="Contexto"
                                        variant="outlined"
                                        placeholder="Ingresa el contexto del descriptor"
                                        margin='normal'
                                        fullWidth
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