class CheckoutController {

  constructor(private _$ngRedux) {

  }

  $onInit() {
        this._$ngRedux.connect(this.mapStateToThis, () => {})(this);
  }

  private mapStateToThis(state) {
        // TODO : compléter le return
        return
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

CheckoutController.$inject = ['$ngRedux'];
export default CheckoutContainer
