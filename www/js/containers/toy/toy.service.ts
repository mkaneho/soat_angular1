class ToyService {

    constructor(private _$http) {
    }

    public getToys() {
        // dans le correctif, on a rajouté un $q.defer...
        return this._$http.get('./mocks/toys.json')
            .success(result => result.data) //retourne directement le tableau d'éléments contenus dans le fichier
            .error(error => console.log("getToys n'a pas marché"));
    }
}

ToyService.$inject = ['$http'];

export default ToyService;