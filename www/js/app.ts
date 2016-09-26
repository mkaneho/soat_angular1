/**
 *  App Modules
 */
import MainContainer from './containers/main.container'
import HeaderContainer from './containers/header/header.container'
import ToyContainer from './containers/toy/toy.container'

angular.module('ToyStore', [])
  .component('mainContainer', new MainContainer())
  .component('headerContainer', new HeaderContainer())
  .component('toyContainer', new ToyContainer())

//Ligne permettant de lancer/bootstrapper l'app
angular.bootstrap(document.documentElement, ['ToyStore'])
