class ToyComponent {
    public bindings;
    public templateUrl;

    constructor() {
        this.templateUrl = './js/containers/toy/toy.component.html';
        this.bindings = {
            toy: '<',
            onSelect: '&'
        };
    }
}

export default ToyComponent;