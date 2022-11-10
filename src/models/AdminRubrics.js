import Criterion from "./Criterion";
import Rubric from "./Rubric";

class AdminRubrics {

    _listRubric = {};

    constructor() {
        this._listRubric = {};
    };

    get listRubricArr() {
        return Object.values(this._listRubric);
    };

    loadRubrics(rubrics = []) {
        rubrics.forEach((rubric) => {
            this._listRubric[rubric.id] = rubric;
        });
    };

    createRubric(name = '') {
        const rubric = new Rubric(name);
        this._listRubric[rubric.id] = rubric;
        return rubric;
    };


};

export default AdminRubrics;