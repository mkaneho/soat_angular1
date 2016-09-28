class BasketController {
    private disconnect;

    constructor(private _$ngRedux,
        private _toyActions,
        private _$state) {

    }

    $onInit() {
        this.disconnect = this._$ngRedux.connect(this.mapStateToThis, () => { })(this);
    }

    $onDestroy() {
        this.disconnect();
    }

    private mapStateToThis(state) {
        return {
            toys: state.toyReducer.toys.filter(toy => {
                return toy.selected;
            }),
            count: state.toyReducer.count,
            total: state.toyReducer.total
        }
    }

    public delete = toy => {
        this._$ngRedux.dispatch(this._toyActions.selectToy(toy))
    }

    public goToCheckout() {
        this._$state.go('checkout');
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

BasketController.$inject = ['$ngRedux', 'ToyActions', '$state'];
export default BasketContainer
