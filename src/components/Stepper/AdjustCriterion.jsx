import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import { TextField } from '@mui/material';

const AdjustPorcentages = () => {
    const { dataRubric } = useContext(DataContext);
    const [criterions, setCriterions] = useState(dataRubric.listCriterionsArr);

    const handleChangeValue = (e, index) => {
        const { name, value } = e.target;
        const list = [...criterions];
        const valueNumber = Number(value)
        list[index][name] = valueNumber;
        setCriterions(list);
        console.log(dataRubric);
    };

    return (
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
            {criterions.map((criterion, index) => {
                return (
                    <div
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
                        key={index}
                    >
                        <TextField
                            style={{ width: '80%' }}
                            required
                            type="number"
                            name="value"
                            value={Math.round(criterion.value)}
                            id={`value${index + 1}`}
                            label={criterion.title_ctro}
                            variant="outlined"
                            placeholder="Ingrese un porcentaje"
                            margin='normal'
                            onChange={(e) => handleChangeValue(e, index)}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default AdjustPorcentages