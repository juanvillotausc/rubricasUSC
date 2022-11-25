import React, { useContext, useEffect, useState } from 'react'
import RubricGenerated from '../components/RubricGenerated';
import { DataContext } from '../context/DataContext';

const RUBRIC_MOCK = {

    competency: "Conocer el modelado de un diagrama uml",
    date: "2022-11-06",
    learnResult: "Entender el modelado de diagramas de clases UML",
    name: "Diagrama de clases UML",
    signature: "Ingenieria de Software",
    subject: "Identificar y construir diagramas de clases UML",
    total: 0,
};

const GenerateRubric = () => {

    const { dataRubric, setDataRubric } = useContext(DataContext);
    const [rubric, setRubric] = useState({});



    useEffect(() => {
        const newdataRubric = Object.assign(dataRubric, RUBRIC_MOCK);
        setDataRubric(newdataRubric);
    }, []);
    return (
        <RubricGenerated setRubric={setRubric} />
    )
}

export default GenerateRubric;