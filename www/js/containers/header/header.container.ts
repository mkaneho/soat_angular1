class HeaderController {

  constructor(private _$ngRedux) {

  }

  $onInit() {
        this._$ngRedux.connect(this.mapStateToThis, () => {})(this);
  }

  private mapStateToThis(state) {
        return {
            count: state.toyReducer.toysCount
        }
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

HeaderController.$inject = ['$ngRedux'];
export default HeaderContainer
