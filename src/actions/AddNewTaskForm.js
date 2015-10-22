import AltInstance from 'lib/alt';

class AddNewTaskFormActions {
    changeContent(content) {
        this.dispatch(content);
    }

    changeTitle(title) {
        this.dispatch(title);
    }

    clearForm() {
        this.dispatch();
    }
}

export default AltInstance.createActions(AddNewTaskFormActions);