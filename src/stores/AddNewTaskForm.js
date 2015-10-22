import AltInstance from 'lib/alt';
import Actions from 'actions/AddNewTaskForm';

class AddNewTaskFormStore {
    constructor() {
        this.validationError = '';
        this.content = '';
        this.title = '';
        this.submittable = false;

        let {
            changeContent,
            clearForm,
            changeTitle,
            } = Actions;

        this.bindListeners({
            changeContent,
            changeTitle,
            clearForm });
    }

    changeContent(newContent) {
        let validationError = this.validate(newContent),
            submittable     = validationError.length === 0;

        this.setState({ validationError,
            content: newContent,
            submittable });
    }

    changeTitle(newTitle) {
        this.setState({
            title: newTitle
        });
    }

    clearForm() { this.setState({ validationError: '',
        content: '',
        submittable: false }); }

    validate(newContent) {
        return (newContent.length > 3) ? '' : 'Task content have to be longer than 3 characters.';
    }
}

export default AltInstance.createStore(AddNewTaskFormStore);