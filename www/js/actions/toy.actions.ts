export const TOY = {
    SELECTED: 'TOY_SELECTED',
    RESPONSE: 'TOY_RESPONSE'
}

class ToyActions {
    constructor(private _toyService, private _$state) {

    }

    public selectToy(selectedToy) {
        return (dispatch, getState) => {
            dispatch({
                type: TOY.SELECTED,
                payload: selectedToy
            });

            if (!getState().toyReducer.total) {
                this._$state.go('toys');
            }
        }
    }

    public getToys() {
        return (dispatch, getState) => {
            const toys = getState().toyReducer.toys;
            if (toys && toys.length) {
                return;
            } // peut être fait différemment algorithmiquement; à voir


            this._toyService.getToys().then(result => {
                dispatch({
                    type: TOY.RESPONSE,
                    toys: result.data
                })
            })
        }
    }
}

ToyActions.$inject = ['ToyService', '$state'];
export default ToyActions;