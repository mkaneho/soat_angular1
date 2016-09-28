import 'ng-cache!./checkout.html'; // permet de garder les templates de containers en cache,
                                  // plutôt que de refaire des requêtes pour les récup

class CheckoutController {
  private disconnect;
  public user;

  constructor(private _$ngRedux,
              private _userActions) {

  }

  $onInit() {
    this.disconnect = this._$ngRedux.connect(this.mapStateToThis, () => { })(this);
    this.user = {};
  }

  $onDestroy() {
    this.disconnect();
  }

  private mapStateToThis(state) {
    return {
      user: state.userReducer.user,
      total: state.toyReducer.total,
      payed: state.userReducer.payed
    }
  }

  public checkout() {
    // dispatch de l'action
    this._$ngRedux.dispatch(this._userActions.doCheckout(this.user));
  }
}

class CheckoutContainer {
  public templateUrl;
  public controller;

  constructor() {
    this.templateUrl = './js/containers/checkout/checkout.html';
    this.controller = CheckoutController;
  }
}

CheckoutController.$inject = ['$ngRedux', 'UserActions'];
export default CheckoutContainer
