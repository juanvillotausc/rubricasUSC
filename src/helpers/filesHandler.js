import fs from "node:fs";

const pathFile = './db/rubrics.json';

export const saveDB = (data) => {

    fs.writeFileSync(pathFile, JSON.stringify(data));

}

export const readDB = () => {

    if (!fs.existsSync(pathFile)) null;

    const rubrics = fs.readFileSync(pathFile, { encoding: 'utf-8' });

    return JSON.parse(rubrics);

};