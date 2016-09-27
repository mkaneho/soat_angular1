/**
 *  External Modules
 */
import ngRedux from 'ng-redux';
import Config from './config';

/**
 *  App Modules
 */
import MainContainer from './containers/main.container'
import HeaderContainer from './containers/header/header.container'
import ToyContainer from './containers/toy/toy.container'
import BasketContainer from './containers/basket/basket.container'
import CheckoutContainer from './containers/checkout/checkout.container'
import ToyComponent from './containers/toy/toy.component'
import ToyService from './containers/toy/toy.service'
import ToyActions from './actions/toy.actions'

angular.module('ToyStore', ['ngRedux', 'ui.router'])
  .component('mainContainer', new MainContainer())
  .component('headerContainer', new HeaderContainer())
  .component('toyContainer', new ToyContainer())
  .component('basketContainer', new BasketContainer())
  .component('checkoutContainer', new CheckoutContainer())
  .component('toyComponent', new ToyComponent())
  .service('ToyService', ToyService) // apparemment, pas besoin de faire new sur des services. comparer avec Interstellar
                                     // + le T majuscule est important dans le nommage du service, même dans la partie chaîne de caractères
  .service('ToyActions', ToyActions)
  .config(Config)

//Ligne permettant de lancer/bootstrapper l'app
angular.bootstrap(document.documentElement, ['ToyStore'])
