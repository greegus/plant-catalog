import React from 'react/addons';

import PlantForm from 'components/PlantForm';
import PlantsListStore from 'stores/PlantsListStore';

export default class PlantsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = PlantsListStore.getState();
    }

    render() {
        return (
            <div>
                x {this.state.plants.length} x
                <PlantForm />
            </div>
        )
    }

    onChange(state) {
        this.setState(state)
    }
}