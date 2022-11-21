import { v4 as uuidv4 } from 'uuid';
import Descripter from './Descripter';

class Criterion {

    id = "";
    title_ctro = "";
    commentaries = "";
    proposers = "";
    _listDescripters = {};
    value = "";
    subtotal = "";
    constructor(name) {
        this.id = `c-${uuidv4()}`;
        this.title_ctro = name;
        this.commentaries = " ";
        this.proposers = " ";
        this._listDescripters = {};
        this.value = 0;
        this.subtotal = 0;
    };

    get listDescriptersArr() {
        return Object.values(this._listDescripters);
    };

    set newValue(value) {
        this.value = value;
    };
    set newSubtotal(subtotal) {
        this.subtotal = subtotal;
    };

    createDescripter(title, contextA, contextB) {
        const descripter = new Descripter(title, contextA, contextB);
        this._listDescripters[descripter.id] = descripter;
    };
};

export default Criterion;