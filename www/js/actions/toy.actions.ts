export const TOY = {
    SELECTED: 'TOY_SELECTED',
    RESPONSE: 'TOY_RESPONSE'
}

class ToyActions {
    constructor(private _toyService) {

    }

    public selectToy(selectedToy) {
        return {
            type: TOY.SELECTED,
            payload: selectedToy
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

ToyActions.$inject = ['ToyService'];
export default ToyActions;