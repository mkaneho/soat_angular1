class HeaderController {

  constructor(private _$ngRedux,
              private _$state) {

  }

  $onInit() {
    this._$ngRedux.connect(this.mapStateToThis, () => { })(this);
  }

  private mapStateToThis(state) {
    return {
      count: state.toyReducer.toysCount
    }
  }

  public goHome() {
    this._$state.go('toys');
  }
}

class HeaderContainer {
  public templateUrl;
  public controller;

  constructor() {
    this.templateUrl = './js/containers/header/header.html';
    this.controller = HeaderController;
  }
}

HeaderController.$inject = ['$ngRedux', '$state'];
export default HeaderContainer
