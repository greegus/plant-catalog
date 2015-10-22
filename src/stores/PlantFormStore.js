import Alt from 'lib/alt';

import PlantActions from 'actions/PlantActions';

class PlantFormStore {
    constructor() {
        this.state = this.getDefault();

        this.bindListeners({
            updateName: PlantActions.UPDATE_NAME,
            clearForm: PlantActions.CLEAR_FORM
        });
    }

    getDefault() {
        return {
            plant: {
                name: ''
            }
        }
    }

    updateName(name) {
        this.state.plant.name = name;
    }

    clearForm() {
        this.setState(this.getDefault());
    }
}

export default Alt.createStore(PlantFormStore, 'PlantFormStore')