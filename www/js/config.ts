import rootReducer from './reducers/index';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';

class Config {
    constructor(_$ngReduxProvider, _$stateProvider, _$urlRouterProvider) {
        _$ngReduxProvider.createStoreWith(
            rootReducer,
            [thunk, createLogger()]
        );

        _$stateProvider.state('toys', {
            url: '/toys',
            template: '<toy-container/>'
        })
        .state('basket', {
            url: '/basket',
            template: '<basket-container/>'
        })
        .state('checkout', {
            url: '/checkout',
            template: '<checkout-container/>'
        });

        _$urlRouterProvider.otherwise($injector => {
            const $state = $injector.get('$state');
            $state.go('toys');
        })
    }
}

Config.$inject = ['$ngReduxProvider', '$stateProvider', '$urlRouterProvider'];
export default Config;