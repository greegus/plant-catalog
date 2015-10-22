import ImmutableStore from 'alt/utils/ImmutableUtil';
import List from 'immutable';

import Alt from 'lib/alt';

import PlantsListActions from 'actions/PlantsListActions';

class PlantsListStore {
    constructor() {
        this.state = this.getDefault();

        this.bindListeners({
            addPlant: PlantsListActions.ADD_PLANT,
            removePlant: PlantsListActions.REMOVE_PLANT
        });
    }

    getDefault() {
        return {
            plants: new List()
        }
    }

    addPlant(plant) {
        return this.setState(this.state.plants.push(plant));
    }

    removePlant(id) {
        let index = this.state.plants.findIndex((plant) => plant.get('id') === id);

        return index !== (-1) ? this.setState(this.state.plants.delete(index)) :
            this.state.plants;
    }
}

export default Alt.createStore(ImmutableStore(PlantsListStore));