import { v4 as uuidv4 } from 'uuid';


class Descripter {

    id = "";
    title_desc = "";
    contextA = ""
    contextB = "";
    average = 0;
    value = 0;

    constructor(title, contextA, contextB) {
        this.id = `d-${uuidv4()}`
        this.title_desc = title;
        this.contextA = contextA
        this.contextB = contextB;
        this.average = 0;
        this.value = 0;
    };


};

export default Descripter;