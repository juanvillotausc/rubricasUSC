import { v4 as uuidv4 } from 'uuid';


class Descripter {

    id = "";
    title_desc = "";
    contextA = ""
    contextB = "";
    average = 0;
    value = 0;

    constructor(title) {
        this.id = `d-${uuidv4()}`
        this.title_desc = title;
        this.contextA = ""
        this.contextB = "";
        this.average = 0;
        this.value = 0;
    };

    set newTitle(title_desc) {
        this.title_desc = title_desc;
    };

    set newAverage(average) {
        this.average = average;
    };

    set newValue(value) {
        this.value = value;
    };

    set newContextA(contextA) {
        this.contextA = contextA;
    };
    set newContextB(contextB) {
        this.contextB = contextB;
    };

};

export default Descripter;