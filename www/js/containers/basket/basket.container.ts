class BasketController {

    constructor(private _$ngRedux, private _toyActions) {

    }

    $onInit() {
        this._$ngRedux.connect(this.mapStateToThis, () => { })(this);
    }

    private mapStateToThis(state) {
        return {
            toys: state.toyReducer.toys.filter(toy => {
                return toy.selected;
            }),
            count: state.toyReducer.count
        }
    }

    public delete = toy => {
        this._$ngRedux.dispatch(this._toyActions.selectToy(toy))
    }
}

class BasketContainer {
    public templateUrl;
    public controller;

    constructor() {
        this.templateUrl = './js/containers/basket/basket.html';
        this.controller = BasketController;
    }
}

BasketController.$inject = ['$ngRedux', 'ToyActions'];
export default BasketContainer
