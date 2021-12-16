import express from 'express';

export default function(database) {
    const app = express();
    const bodyParser = require('body-parser'); 
    //app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    const collections = [
        {userId:'1', dogId:[]},
        {userId:'2', dogId:[1000, 1025]}
    ]; 

    const addDog = ({userId, dogId}) => {
        collections.includes({userId}) ?
            collections.dogId.push(dogId) :
            collections = {
                userId,
                dogId: []
            };
    };

    //mock database collections of dogs
    const dogs = [
        {id: 1000, dog: 'Labrador Retriever'},
        {id: 1005, dog: 'Golden Retriever'},
        {id: 1010, dog: 'German Shepherd'},
        {id: 1015, dog: 'Chihuahua'},
        {id: 1020, dog: 'Siberian Husky'},
        {id: 1025, dog: 'Yorkshire Terrier'},
        {id: 1030, dog: 'American Pit Bull'},
        {id: 1035, dog: 'Australian Shepherd'},
        {id: 1040, dog: 'Dachshund'},
        {id: 1045, dog: 'Shih Tzu'},
        {id: 1050, dog: 'French Bulldog'},
    ];

    // const users = [
    //     {id:1, doggyDex: []},
    //     {id:2, doggyDex: [1000, 1040]}
    // ]

    app.post('/addDog', (req, res) => {
        const {userId,  dogId} = req.body;
        if(!userId || !dogId){
            res.status(400).send('Failed to add a dog');
            return;
        }
        addDog({
            userId,
            dogId
        });
        res.send('Success in adding dog')
    });

    app.get('/getDog', (req, res) => {
        console.log(req.body);
        const data = req.body;
        console.log('hello', data);

        res.send('bye');
    });

    return app;
}