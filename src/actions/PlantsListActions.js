import UUID from 'node-uuid';
import Immutable from 'immutable';

import Alt from 'lib/alt';

class PlantsListActions {
    addPlant(content) {
        this.dispatch(Immutable.fromJS({
            id: UUID.v4(), content
        }));
    }

    removePlant(id) {
        this.dispatch(id);
    }
}

export default Alt.createActions(PlantsListActions);
