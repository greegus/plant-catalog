import React from 'react/addons';

import PlantFormStore from 'stores/PlantFormStore';
import PlantActions from 'actions/PlantActions';
import PlantsListActions from 'actions/PlantsListActions';

export default class PlantForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = PlantFormStore.getState();
        
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        PlantFormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        PlantFormStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    updateName(e) {
        PlantActions.updateName(e.target.value);
    }

    submit(e) {
        e.preventDefault();

        console.log('submit', this.state);

        PlantsListActions.addPlant(this.state.plant);
        PlantActions.clearForm();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                this.state.plant.name: {this.state.plant.name}
                <input type="text" onChange={this.updateName} placeholder="Plant" value={this.state.plant.name} />
                <button type="submit">Pridať</button>
            </form>
        )

    }
}