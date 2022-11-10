import { v4 as uuidv4 } from 'uuid';
import Descripter from './Descripter';

class Criterion {

    id = "";
    title_ctro = "";
    _listDescripters = {};

    constructor(name) {
        this.id = `c-${uuidv4()}`;
        this.title_ctro = name;
        this._listDescripters = {};
    };

    get listDescriptersArr() {
        return Object.values(this._listDescripters);
    };

    createDescripter(title, contextA, contextB) {
        const descripter = new Descripter(title, contextA, contextB);
        this._listDescripters[descripter.id] = descripter;
    };
};

export default Criterion;