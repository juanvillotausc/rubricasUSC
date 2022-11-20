import { v4 as uuidv4 } from 'uuid';
import Criterion from './Criterion';

class Rubric {

    id = "";
    name = "";
    subject = "";
    signature = "";
    date = "";
    total = 0;
    _listCriterions = {};

    constructor(name, subject, signature, date) {
        this.id = `r-${uuidv4()}`;
        this._listCriterions = {};
        this.name = name;
        this.subject = subject;
        this.signature = signature;
        this.date = date;
        this.total = 0;
        this._listCriterions = {};
    }

    get listCriterionsArr() {
        return Object.values(this._listCriterions);
    };

    set nameRubric(name) {
        this.name = name;
    };

    createCriterion(nameCriterion = '') {
        const criterion = new Criterion(nameCriterion);
        this._listCriterions[criterion.id] = criterion;
    };
};



export default Rubric;
