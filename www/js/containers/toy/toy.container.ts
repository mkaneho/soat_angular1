class ToyController {
    private reduxDisconnectFunction;
    public toys;

    constructor(private _$ngRedux, /*private _toyService,*/ private _toyActions) {        
    }

    $onInit() {
        this.reduxDisconnectFunction = this._$ngRedux.connect(this.mapStateToThis, () => {})(this);
        this._$ngRedux.dispatch(this._toyActions.getToys());

        //this._toyService.getToys()
        //    .then(result => this.toys = result.data);
        // En faisant appel au toyActions, on délègue le chargement des toys au gestionnaire de flux => toyService n'est plus nécessaire 
    }

    // TODO: Reprendre ce mécanisme dans tous les controllers où on se connecte
    //Sinon, on a une fuite mémoire (le state existe mais n'est plus rattaché au controller)
    $onDestroy() {
        this.reduxDisconnectFunction();
    }

    private mapStateToThis(state) {
        return {
            toys: state.toyReducer.toys
        }
    }

    public select(toy) {
        this._$ngRedux.dispatch(this._toyActions.selectToy(toy));
    }
}

// container global de tous les toys à afficher (dans le maincontainer)
class ToyContainer {
    public templateUrl;
    public controller;

    constructor() {
        this.templateUrl = './js/containers/toy/toy.html';
        this.controller = ToyController; // automatiquement associé au container qd on fait new Container 
    }
}

ToyController.$inject = ['$ngRedux', /*'ToyService',*/ 'ToyActions'];
export default ToyContainer;
