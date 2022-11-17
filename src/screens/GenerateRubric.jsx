import React from 'react'
import { useParams } from 'react-router-dom';
import Rubric from '../components/Rubric';

const MOCK_DESCRIPTER = [
    {
        title: "Descripter 1sdsdasd",
        result: "No Logrado",
        average: 0,
        value: 50,
        contextA: "Context A",
        contextB: "Context B"
    },
    {
        title: "Descripter 2",
        result: "No Logrado",
        average: 0,
        value: 50,
        contextA: "Context A",
        contextB: "Context B"
    },
];

const MOCK_CRITERIONS = [
    {
        criterion: "Criterio 1",
        comments: "Sin eso",
        solution: "Hacer trabajo",
        descripters: MOCK_DESCRIPTER
    },
    {
        criterion: "Criterio 2",
        result: "No Logrado",
        comments: "Sin eso",
        solution: "Hacer trabajo",
        descripters: MOCK_DESCRIPTER
    },
];

const GenerateRubric = () => {

    const { id } = useParams();

    console.log({ id });
    return (
        <Rubric criterions={MOCK_CRITERIONS} />
    )
}

export default GenerateRubric;