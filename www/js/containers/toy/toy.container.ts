class ToyController {
    public toys;

    constructor() {
        
    }

    $onInit() {
        this.toys = [
            {
                "title": "ball",
                "icon": "airballoon",
                "price": 5
            },
            {
                "title": "plane",
                "icon": "airplane",
                "price": 35
            },
            {
                "title": "ambulance",
                "icon": "ambulance",
                "price": 15
            },
            {
                "title": "robot",
                "icon": "android",
                "price": 40
            },
            {
                "title": "bike",
                "icon": "bike",
                "price": 250
            },
            {
                "title": "virus",
                "icon": "biohazard",
                "price": 0.5
            },
            {
                "title": "bone",
                "icon": "bone",
                "price": 1
            },
            {
                "title": "magnetophone",
                "icon": "boombox",
                "price": 12
            },
            {
                "title": "plastic cake",
                "icon": "cake",
                "price": 4
            },
            {
                "title": "camera",
                "icon": "camera",
                "price": 55
            },
            {
                "title": "car",
                "icon": "car",
                "price": 28
            },
            {
                "title": "castle",
                "icon": "castle",
                "price": 18
            },
            {
                "title": "cat",
                "icon": "cat",
                "price": 12
            },
            {
                "title": "chemical weapon",
                "icon": "chemical-weapon",
                "price": 2
            },
            {
                "title": "dice",
                "icon": "dice-5",
                "price": 3
            },
            {
                "title": "duck",
                "icon": "duck",
                "price": 6
            },
            {
                "title": "boat",
                "icon": "ferry",
                "price": 32
            },
            {
                "title": "fish",
                "icon": "fish",
                "price": 20
            },
            {
                "title": "snakes",
                "icon": "language-python",
                "price": 12
            },
            {
                "title": "rugby balloon",
                "icon": "football-australian",
                "price": 13
            },
            {
                "title": "ghost",
                "icon": "ghost",
                "price": 32
            },
            {
                "title": "pint",
                "icon": "glass-mug",
                "price": 4.5
            },
            {
                "title": "playmobil",
                "icon": "human-child",
                "price": 12
            },
            {
                "title": "jeep",
                "icon": "jeepney",
                "price": 3
            },
            {
                "title": "panda",
                "icon": "panda",
                "price": 11
            },
            {
                "title": "phone",
                "icon": "phone-classic",
                "price": 24
            },
            {
                "title": "owl",
                "icon": "owl",
                "price": 5
            },
            {
                "title": "pig",
                "icon": "pig",
                "price": 18
            },
            {
                "title": "truck",
                "icon": "truck",
                "price": 10
            }
        ]
    }
}

// container global de tous les toys à afficher (dans le maincontainer)
class ToyContainer {
    public templateUrl;
    public controller;

    constructor() {
        this.templateUrl = './js/containers/toy/toy.html';
        this.controller = ToyController; // automatiquement associé au container qd on fait new Container 
    }
}

export default ToyContainer
