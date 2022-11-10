import fs from "node:fs";

const pathFile = './db/data.json';

const saveDB = (data) => {

    fs.writeFileSync(pathFile, JSON.stringify(data));

}

const readDB = () => {

    if (!fs.existsSync(pathFile)) null;

    const rubrics = fs.readFileSync(pathFile, { encoding: 'utf-8' });

    return JSON.parse(rubrics);

}

module.exports = {
    saveDB,
    readDB
}