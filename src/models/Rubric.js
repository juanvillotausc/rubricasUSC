import { v4 as uuidv4 } from 'uuid';
import Criterion from './Criterion';

class Rubric {

    id = "";
    name = "";
    total = 0;
    commentaries = "";
    proposers = "";
    _listCriterions = {};

    constructor(name) {
        this.id = `r-${uuidv4()}`;
        this._listCriterions = {};
        this.name = name;
        this.total = 0;
        this.commentaries = " ";
        this.proposers = " ";
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
