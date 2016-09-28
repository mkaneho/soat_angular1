export const USER = {
    PAYED: 'PAYED'
}

class UserActions {
    constructor(private _$state) {

    }

    public doCheckout(checkoutData) {
        return (dispatch, getState) => {
            dispatch({
                type: USER.PAYED,
                payload: checkoutData
            });

            // TODO : est-ce que tu as bien total dans le reducer?
            if (!getState().userReducer.payed) {
                this._$state.go('toys');
            }
        }
    }
}   

UserActions.$inject = ['$state'];
export default UserActions;