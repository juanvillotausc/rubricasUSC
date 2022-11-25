import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material"
import { Section } from "./Navbar.style"
import { TableBody, TableHead } from ".";
import { DataContext } from "../context/DataContext";


const CRITERION = [
    {
        title_ctro: 'Legibilidad del modelo',
        value: 15,
        descripters: [
            {
                title_desc: "En mas de la mitad de los componentes  del estadar UML",
                value: 33,
                contextA: "El tamaño de la letra es visible",
                contextB: "La tipografia es clara"
            },
            {
                title_desc: "Ninguna de las lineas que vinvulan los componentes en el diagrama UML",
                value: 33,
                contextA: "Se superponen",
                contextB: "Comparten el mismo extremo"
            },
            {
                title_desc: "Las lineas en todo el diagrama UML",
                value: 34,
                contextA: "No presentan cruces entre ellas",
                contextB: "Son horizontales y verticales"
            },
        ]
    },
    {
        title_ctro: 'Uso correcto de la sintaxis',
        value: 20,
        descripters: [
            {
                title_desc: "Todas las clases del diagrama",
                value: 20,
                contextA: "Estan de acuerdo con la notacion del estadar UML",
                contextB: "Tienen declarados los tres componentes(nombre, atributos y operaciones)"
            },
            {
                title_desc: "El uso de la composicion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 20,
                contextA: "El simbolo utilizado es un diamante de color negro",
                contextB: "La multiplicidad es ! del lado de todo"
            },
            {
                title_desc: "El uso de la agregacion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 20,
                contextA: "El simbolo utlizado es un diamante de color blanco",
                contextB: "Existe una operacion que implementa la agregacion"
            },
            {
                title_desc: "El uso de la asociacion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 20,
                contextA: "Las lineas que unen las clases son continuas",
                contextB: "Tienen un nombre que la caracteriza"
            },
            {
                title_desc: "El uso de la generalizacion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 20,
                contextA: "El simbolo utilizado es una flecha de triangulo blanco",
                contextB: "Los atributos declarados en un nivel de la jerarquia no esta duplicado en un nivel mas bajo"
            },
        ]
    },
    {
        title_ctro: 'Uso correcto de la semantica',
        value: 20,
        descripters: [
            {
                title_desc: "El uso de la composicion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 33,
                contextA: "Refleja el todo y las partes",
                contextB: "Comparten el mismo ciclo de vida"
            },
            {
                title_desc: "El uso de la agregacion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 33,
                contextA: "Refleja el todo y las partes",
                contextB: "No comparten el mismo ciclo de vida"
            },
            {
                title_desc: "El uso de la generalizacion esta siempre acorde con la definicion de UML en cuanto a que",
                value: 34,
                contextA: "La relacion muestra un concepto mas general",
                contextB: "Refleja una o mas jerarquias"
            },
        ]
    },
    {
        title_ctro: 'Relaciones',
        value: 15,
        descripters: [
            {
                title_desc: "Para todas las clases del diagrama",
                value: 33,
                contextA: "Los atributos los describe especificamente",
                contextB: "Todos sus atributos utilizan la misma convencion de nombres"
            },
            {
                title_desc: "Todos los atributos",
                value: 33,
                contextA: "Tienen un tipo de dato asociado",
                contextB: "Tienen una visibilidad asociada"
            },
            {
                title_desc: "Ningun atributo es utilizado conceptualmente como una",
                value: 34,
                contextA: "Clave primaria",
                contextB: "Clave foranea"
            }
        ]
    },
];

const RubricGenerated = ({ setRubric }) => {
    const { dataRubric, setDataRubric } = useContext(DataContext);

    useEffect(() => {
        CRITERION.forEach((criterion, index) => {
            const criterio = dataRubric.createCriterion(criterion.title_ctro);
            criterio.newValue = criterion.value;
            criterion.descripters.forEach((descripter, index) => {
                const newDescripter = criterio.createDescripter(descripter.title_desc);
                newDescripter.newValue = descripter.value;
                newDescripter.newContextA = descripter.contextA;
                newDescripter.newContextB = descripter.contextB;
            });
        });
        setRubric({});
    }, [])

    return (
        <Section>
            <Box sx={{ flexGrow: 1 }}>
                <TableHead />
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: 1 }}>
                <TableBody />
            </Box>
        </Section>
    )
}

export default RubricGenerated;