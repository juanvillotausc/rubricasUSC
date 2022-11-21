import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DataGeneral, AddCriterion, PercentagesCriterions } from './index';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const steps = ['Datos generales', 'Definir criterios', 'Ajustar porcentajes Criterios', "Agregar descriptores", "Ajustar porcentajes Descriptores"];

const stepContent = (step) => {
    switch (step) {
        case 0:
            return <DataGeneral />
        case 1:
            return <AddCriterion />

        case 2:
            return <PercentagesCriterions />
        case 3:
            return (
                <h1>{step + 1}</h1>
            );
        case 4:
            return (
                <h1>{step + 1}</h1>
            );
    };
};


const StepperMui = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const { dataRubric, setDataRubric } = useContext(DataContext);

    const methods = useForm(dataRubric);

    const isStepOptional = (step) => {
        return step === 6;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (data) => {
        let newSkipped = skipped;
        console.log(dataRubric);
        console.log(data);
        const newdataRubric = Object.assign(dataRubric, data);
        setDataRubric(newdataRubric);
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {stepContent(activeStep)}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: '100%' }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                    style={{ textTransform: 'none' }}
                                >
                                    Atrás
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )}

                                <Button
                                    style={{ textTransform: 'none' }}
                                    type='submit'
                                >
                                    {activeStep === steps.length - 1 ? 'Crear' : 'Siguiente'}
                                </Button>
                            </Box>
                        </form>
                    </FormProvider>
                </>
            )}
        </Box>
    );
};

export default StepperMui;
