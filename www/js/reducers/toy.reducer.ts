import { TOY } from '../actions/toy.actions';
import { clone } from '../helpers/helpers';

// le reducer est juste une fonction
function toyReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case TOY.SELECTED:
            newState = clone(state);

            const toys = newState.toys.map(toy => {
                toy.selected = (toy.title === action.payload.title ? !toy.selected : toy.selected);
                return toy;
            });

            const toysCount = newState.toys.filter(toy => {
                return toy.selected;
            }).length;

            const total = newState.toys.reduce((acc, item) => {
                return item.selected ?
                    acc + item.price :
                    acc
            }, 0)

            return Object.assign(newState, { toys }, { toysCount }, { total });

        case TOY.RESPONSE:
            newState = clone(state);
            return Object.assign(newState, { toys: action.toys }); //Doc Object assign à lire; spécifique ES6 => compat navigateurs?

        default:
            return state; // tjrs songer à renvoyer le state pour au moins retrouver l'état initial si jamais on a oublié de gérer un type d'actions
    }
}

export default toyReducer;