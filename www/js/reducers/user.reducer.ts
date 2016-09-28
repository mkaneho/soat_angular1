import { USER } from '../actions/user.actions';
import { clone } from '../helpers/helpers';

// le reducer est juste une fonction
function userReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case USER.PAYED:
            // Si user.payed, on rajoute un payed: true dans le state
            newState = clone(state);

            //Si tu veux avoir le user dans le state, il faut le rajouter à partir de action.payload
            return Object.assign(newState, {payed: true });

        default:
            return state; // tjrs songer à renvoyer le state pour au moins retrouver l'état initial si jamais on a oublié de gérer un type d'actions
    }
}

export default userReducer;