import Alt from 'lib/alt';

class PlantActions {
    updateName(plant) {
        this.dispatch(plant);
    }

    clearForm() {
        this.dispatch();
    }
}

export default Alt.createActions(PlantActions);
