module.exports = {

    read: (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => 
            res.status(200).send(houses)
        )
    },
    
    post: (req, res) => {
        const db = req.app.get('db');
        const {id, price, address, city, state, zip} = req.body;

        db.list_house([id, price, address, city, state, zip])
        .then( () => res.send(200))


    }

}